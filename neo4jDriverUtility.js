const neo4j = require('neo4j-driver').v1;

//import config file for database
const neoConfig = require('./database_config/config.json');

//import serializer to serialize for visJS format
const serializer = require('./utility/serializer');

const { user, password } = neoConfig;

let neo4Jdriver;
var session;

var runQuery = (query) => {
    if (query) {
        if (!!query.length) {
            return session.run(query);
        }
    } else {
        console.error('Empty query passed');
        throw Error;
    }
}

var initiate = () => {
    if (!user) {
        console.error('No User provided, make sure you have entered the user in database_config/config.json --->', user);
    } else if (!password) {
        neo4Jdriver = neo4j.driver(neoConfig.url, neo4j.auth.basic(neoConfig.user, ''))
    } else {
        neo4Jdriver = neo4j.driver(neoConfig.url, neo4j.auth.basic(neoConfig.user, neoConfig.password))
    }
    session = neo4Jdriver.session();
}

var getMetaData = () => {
    let queryForNodes = 'match (p) -[r]-> (q) return count(p), p';
    let queryForRelationships = 'match (p) -[r]-> (q) return count(r), r';
    let dataToReturn = {
        Nodes: {},
        Relationships: {}
    }
    return runQuery(queryForNodes)
        .then(result => {
            let final = processMetaData({ result, type: 'node' });
            dataToReturn.Nodes = final;
            // now ge the meta data of relationship
            return runQuery(queryForRelationships)
        })
        .then(relationshipResult => {
            let final = processMetaData({ result: relationshipResult, type: 'relationship' });
            dataToReturn.Relationships = final;
            neo4Jdriver.close();
            return new Promise((res, rej) => {
                if (dataToReturn.constructor !== Object) {
                    rej('Nothing recieved on processing the metaData');
                } else {
                    //send data back
                    res(dataToReturn);
                }
            });
        })
        .catch(err => {
            console.log('an error occured while retrieving metadata for nodes', err);
            neo4Jdriver.close();
        });
}

function processMetaData(dataToProcess) {
    if (dataToProcess.constructor === Object) {
        //data is an object
        if (dataToProcess.hasOwnProperty('result') && dataToProcess.hasOwnProperty('type')) {
            if (dataToProcess.type === 'node') {
                // process node
                let NodeData = dataToProcess.result;
                if (NodeData.hasOwnProperty('records')) {
                    if (NodeData.records.length > 0) {
                        let DATA = NodeData.records.map(node => {
                            return node._fields[1];
                        });
                        // add total count
                        let finalDATA = {
                            count: DATA.length,
                            data: DATA
                        }
                        return finalDATA;
                    } else {
                        // empty records
                        return null;
                    }
                } else {
                    // no records key found inside the data object , it should be there as the neo4J returns it
                    return null;
                }
            }



            if (dataToProcess.type === 'relationship') {
                // process relationships
                let relationshipData = dataToProcess.result;
                if (relationshipData.hasOwnProperty('records')) {
                    if (relationshipData.records.length > 0) {
                        let DATA = relationshipData.records.map(relationship => {
                            return relationship._fields[1];
                        });
                        // add total count
                        let finalDATA = {
                            count: DATA.length,
                            data: DATA
                        }
                        console.log('Total nodes returned are ', finalDATA);
                        return finalDATA;
                    } else {
                        // empty records
                        return null;
                    }
                } else {
                    // no records key found inside the data object , it should be there as the neo4J returns it
                    return null;
                }
            }
        } else {
            //invalid format of data provided
            return null;
        }
    } else {
        //entered data is not an object
        return null;
    }
}

var getData = (query) => {
    if (!query || query.length <= 0) {
        query = neoConfig.initial_query
    }
    return runQuery(query)
        .then(result => {
            let serializedData = serializer.Neo4JtoVisFormat(JSON.stringify(result.records));
            console.log('serialized data is ', serializedData.seperateNodes.length, serializedData.seperateEdges.length);
            neo4Jdriver.close();
            return new Promise((res, rej) => {
                if (serializedData.seperateNodes.length > 0 || serializedData.seperateEdges.length > 0) {
                    console.log('successfully returining the request');
                    res(serializedData);
                } else {
                    console.log('error while returning data');
                    rej('Both are empty in serialized data');
                }
            });
        })
        .catch(err => {
            console.log('an error occured while retrieving', err);
            neo4Jdriver.close();
        });
}

function createProperString(data) {
    return data.map(d => `'${d}'`).join(',');

}

function createProperRelationString(data, delimiter = '|') {
    return data.map(s => `:${s}`).join(delimiter);
}

function runQueryWithTypes(dataObj) {
    // check if the object is empty---> return error if it is
    if (dataObj.constructor === Object) {
        dataObj.relation = createProperRelationString(dataObj.relation);
        if (dataObj.length === 1) {
            dataObj.nodes[0].value = createProperString(dataObj.nodes[0].value);
            let queryStatement = '';
            if (!!dataObj.relation) {
                queryStatement = `match (p:${dataObj.nodes[0].type}) <-[r${dataObj.relation}]->(q) where p.Name IN [${dataObj.nodes[0].value}] return p,q,r`;
            } else {
                queryStatement = queryStatement = `match (p:${dataObj.nodes[0].type}) <-[r]->(q) where p.Name IN [${dataObj.nodes[0].value}] return p,q,r`;
            }
            console.log('query for 1 node type is ', queryStatement);
            return runQuery(queryStatement).then(result => {
                let serializedData = serializer.Neo4JtoVisFormat(JSON.stringify(result.records));
                return new Promise((resolve, reject) => {
                    resolve(serializedData);
                });
            }).catch(err => {
                console.log('An error occured while runnning the query', err);
                return new Promise((resolve, reject) => {
                    reject('API : get/data | ERROR : Error encountered while reading from database');
                });
            });
        } else if (dataObj.length === 2) {
            dataObj.nodes.forEach(node => {
                node.value = createProperString(node.value);
            });
            let queryStatement = '';
            if (!!dataObj.relation) {
                queryStatement = `match (p:${dataObj.nodes[0].type})-[r${dataObj.relation}]-(q:${dataObj.nodes[1].type})
                where p.Name IN [${dataObj.nodes[0].value}] and q.Name IN [${dataObj.nodes[1].value}] return p,q,r`;
            } else {
                queryStatement = `match (p:${dataObj.nodes[0].type}) <-[r]->(q:${dataObj.nodes[1].type}) 
                where p.Name IN [${dataObj.nodes[0].value}]
                and q.Name IN [${dataObj.nodes[1].value}] return p,q,r`;
            }
            console.log('query is ', queryStatement);

            return runQuery(queryStatement).then(result => {
                let serializedData = serializer.Neo4JtoVisFormat(JSON.stringify(result.records));
                return new Promise((resolve, reject) => {
                    resolve(serializedData);
                });
            }).catch(err => {
                console.log('An error occured while runnning the query', err);
                return new Promise((resolve, reject) => {
                    reject('API : get/data | ERROR : Error encountered while reading from database with 2 types');
                });
            });
        } else if (dataObj.length === 3) {
            dataObj.nodes.forEach(node => {
                node.value = createProperString(node.value);
            });
            let queryStatement
            if (!dataObj.relation) {
                queryStatement = `match (p:${dataObj.nodes[0].type}) <-[r]->(q:${dataObj.nodes[1].type}) <-[s]->(t:${dataObj.nodes[2].type}) 
                where p.Name IN [${dataObj.nodes[0].value}]
                and q.Name IN [${dataObj.nodes[1].value}] and t.Name IN [${dataObj.nodes[2].value}] return p,q,r,t,s`;
            } else {
                queryStatement = `match (p:${dataObj.nodes[0].type}) <-[r${dataObj.relation}]->(q:${dataObj.nodes[1].type}) <-[s${dataObj.relation}]->(t:${dataObj.nodes[2].type}) 
                where p.Name IN [${dataObj.nodes[0].value}]
                and q.Name IN [${dataObj.nodes[1].value}] and t.Name IN [${dataObj.nodes[2].value}] return p,q,r,t,s`;
            }
            console.log('query is ', queryStatement);

            return runQuery(queryStatement).then(result => {
                let serializedData = serializer.Neo4JtoVisFormat(JSON.stringify(result.records));
                return new Promise((resolve, reject) => {
                    resolve(serializedData);
                });
            }).catch(err => {
                console.log('An error occured while runnning the query', err);
                return new Promise((resolve, reject) => {
                    reject('API : get/data | ERROR : Error encountered while reading from database with 3 types');
                });
            });

        } else {
            //this will work in case user sends only relationships
            let queryStatement = '';
            if (!dataObj.relation) {
                queryStatement = `match (p) <-[r]->(q) return p,q,r`;
            } else {
                queryStatement = `match (p) <-[r${dataObj.relation}]->(q) return p,q,r`;
            }
            console.log('query for 0 node type is ', queryStatement);

            return runQuery(queryStatement).then(result => {
                let serializedData = serializer.Neo4JtoVisFormat(JSON.stringify(result.records));
                return new Promise((resolve, reject) => {
                    resolve(serializedData);
                });
            }).catch(err => {
                console.log('An error occured while runnning the query', err);
                return new Promise((resolve, reject) => {
                    reject('API : get/data | ERROR : Error encountered while reading from database with 0 types');
                });
            });

        }



    } else {

    }
}

var getGraphData = (req) => {
    let relationshipTypesArray = [];

    if (req.body.hasOwnProperty('edges') && req.body.edges.length > 0) {
        // data for edges / relationships is present, get all the relevant information
        req.body.edges.filter(edge => {
            if (edge.hasOwnProperty('type') && edge.type.length > 0) {
                relationshipTypesArray.push(edge.type);
                return true;
            } else {
                // did not get the type key in the current edge
                console.log(`API : graph/data | WARNING : The given edge ${JSON.stringify(edge)} has no property type\n`);
            }
        });
        console.log(`Edge types are ${relationshipTypesArray}\n`);
    }
    // process nodes and edges in the given format
    // 1. find all the types of nodes needed for the query
    if (req.body.hasOwnProperty('nodes') && req.body.nodes.length >= 0) {
        // data for nodes is present, get all the relevant information
        if (req.body.nodes.length == 1) {
            return runQueryWithTypes({ relation: relationshipTypesArray, nodes: req.body.nodes, length: 1 });
        } else if (req.body.nodes.length == 2) {
            return runQueryWithTypes({ relation: relationshipTypesArray, nodes: req.body.nodes, length: 2 })
        } else if (req.body.nodes.length === 3) {
            return runQueryWithTypes({ relation: relationshipTypesArray, nodes: req.body.nodes, length: 3 })
        } else {
            return runQueryWithTypes({ relation: relationshipTypesArray, nodes: req.body.nodes, length: 0 })
        }
    } else {
        return new Promise((resolve, reject) => {
            // send back the data 
            reject('No nodes provided in the body');
        });
    }
}

var searchQuery = (requestBody, raw = false) => {
    // all the cross verification has been done earlier, now it is sure to have a query key
    let queryToExecute = requestBody.query;
    return runQuery(queryToExecute).then(result => {
        let serializedData;
        if (raw) {
            console.log('raw request\n');
            serializedData = result.records;
        } else {
            serializedData = serializer.Neo4JtoVisFormat(JSON.stringify(result.records));
        }
        return new Promise((resolve, reject) => {
            resolve(serializedData);
        });
    }).catch(err => {
        console.log('An error occured while runnning the query', err);
        return new Promise((resolve, reject) => {
            if (raw) {
                return resolve({ err, message: err.message });
            }
            reject('API : get/data | ERROR : Error encountered while reading from database');
        });
    });

}
var getDataV2 = (query) => {
    if (!query || query.length <= 0) {
        query = neoConfig.initial_query_v2
    }
    return runQuery(query)
        .then(result => {
            let serializedData = serializer.Neo4JtoVisFormat(JSON.stringify(result.records));
            console.log('serialized data is ', serializedData.seperateNodes.length, serializedData.seperateEdges.length);
            neo4Jdriver.close();
            return new Promise((res, rej) => {
                if (serializedData.seperateNodes.length > 0 || serializedData.seperateEdges.length > 0) {
                    console.log('successfully returining the request');
                    res(serializedData);
                } else {
                    console.log('error while returning data');
                    rej('Both are empty in serialized data');
                }
            });
        })
        .catch(err => {
            console.log('an error occured while retrieving', err);
            neo4Jdriver.close();
        });
}
var getGraphDataV2 = (req) => {
    let relationshipTypesArray = [];

    if (req.body.hasOwnProperty('edges') && req.body.edges.length > 0) {
        // data for edges / relationships is present, get all the relevant information
        req.body.edges.filter(edge => {
            if (edge.hasOwnProperty('type') && edge.type.length > 0) {
                relationshipTypesArray.push(edge.type);
                return true;
            } else {
                // did not get the type key in the current edge
                console.log(`API : graph/data | WARNING : The given edge ${JSON.stringify(edge)} has no property type\n`);
            }
        });
        console.log(`Edge types are ${relationshipTypesArray}\n`);
    }
    // process nodes and edges in the given format
    // 1. find all the types of nodes needed for the query
    if (req.body.hasOwnProperty('nodes') && req.body.nodes.length >= 0) {
        // data for nodes is present, get all the relevant information
        if (req.body.nodes.length == 1) {
            return runQueryWithTypesV2({ relation: relationshipTypesArray, nodes: req.body.nodes, length: 1 });
        } else if (req.body.nodes.length == 2) {
            return runQueryWithTypesV2({ relation: relationshipTypesArray, nodes: req.body.nodes, length: 2 })
        } else if (req.body.nodes.length === 3) {
            return runQueryWithTypesV2({ relation: relationshipTypesArray, nodes: req.body.nodes, length: 3 })
        } else {
            return runQueryWithTypesV2({ relation: relationshipTypesArray, nodes: req.body.nodes, length: 0 })
        }
    } else {
        return new Promise((resolve, reject) => {
            // send back the data 
            reject('No nodes provided in the body');
        });
    }
}

function runQueryWithTypesV2(dataObj) {
    // check if the object is empty---> return error if it is
    if (dataObj.constructor === Object) {
        dataObj.relation = createProperRelationString(dataObj.relation);
        if (dataObj) {
            dataObj.nodes[0].value = createProperString(dataObj.nodes[0].value);
            dataObj.nodes[1].value = createProperString(dataObj.nodes[1].value);
            dataObj.nodes[2].value = createProperString(dataObj.nodes[2].value);
            dataObj.nodes[3].value = createProperString(dataObj.nodes[3].value);
            let queryStatement = '';
            if (!!dataObj.relation) {
                queryStatement = `match (p:${dataObj.nodes[0].type}) <-[r${dataObj.relation}]->(q) where p.Name IN [${dataObj.nodes[0].value}] return p,q,r`;
            } else {
                queryStatement = queryStatement = `match (p:\`${dataObj.nodes[0].type}\`) where p.Name IN [${dataObj.nodes[0].value}] or p.Type IN [${dataObj.nodes[1].value}] or p.Connection IN [${dataObj.nodes[2].value}] or p.Represent in [${dataObj.nodes[3].value}] return p`;
            }
            console.log('query for 1 node type is ', queryStatement);
            return runQuery(queryStatement).then(result => {
                let serializedData = serializer.Neo4JtoVisFormat(JSON.stringify(result.records));
                return new Promise((resolve, reject) => {
                    resolve(serializedData);
                });
            }).catch(err => {
                console.log('An error occured while runnning the query', err);
                return new Promise((resolve, reject) => {
                    reject('API : get/data | ERROR : Error encountered while reading from database');
                });
            });
        } else if (dataObj.length === 2) {
            dataObj.nodes.forEach(node => {
                node.value = createProperString(node.value);
            });
            let queryStatement = '';
            if (!!dataObj.relation) {
                queryStatement = `match (p:${dataObj.nodes[0].type})-[r${dataObj.relation}]-(q:${dataObj.nodes[1].type})
                where p.Name IN [${dataObj.nodes[0].value}] and q.Name IN [${dataObj.nodes[1].value}] return p,q,r`;
            } else {
                queryStatement = `match (p:\`${dataObj.nodes[0].type}\`) where p.Name IN [${dataObj.nodes[0].value}]
                or p.Type IN [${dataObj.nodes[1].value}] return p`;
            }
            console.log('query is ', queryStatement);

            return runQuery(queryStatement).then(result => {
                let serializedData = serializer.Neo4JtoVisFormat(JSON.stringify(result.records));
                return new Promise((resolve, reject) => {
                    resolve(serializedData);
                });
            }).catch(err => {
                console.log('An error occured while runnning the query', err);
                return new Promise((resolve, reject) => {
                    reject('API : get/data | ERROR : Error encountered while reading from database with 2 types');
                });
            });
        } else if (dataObj.length === 3) {
            dataObj.nodes.forEach(node => {
                node.value = createProperString(node.value);
            });
            let queryStatement
            if (!dataObj.relation) {
                queryStatement = `match (p:${dataObj.nodes[0].type}) <-[r]->(q:${dataObj.nodes[1].type}) <-[s]->(t:${dataObj.nodes[2].type}) 
                where p.Name IN [${dataObj.nodes[0].value}]
                and q.Name IN [${dataObj.nodes[1].value}] and t.Name IN [${dataObj.nodes[2].value}] return p,q,r,t,s`;
            } else {
                queryStatement = `match (p:${dataObj.nodes[0].type}) <-[r${dataObj.relation}]->(q:${dataObj.nodes[1].type}) <-[s${dataObj.relation}]->(t:${dataObj.nodes[2].type}) 
                where p.Name IN [${dataObj.nodes[0].value}]
                and q.Name IN [${dataObj.nodes[1].value}] and t.Name IN [${dataObj.nodes[2].value}] return p,q,r,t,s`;
            }
            console.log('query is ', queryStatement);

            return runQuery(queryStatement).then(result => {
                let serializedData = serializer.Neo4JtoVisFormat(JSON.stringify(result.records));
                return new Promise((resolve, reject) => {
                    resolve(serializedData);
                });
            }).catch(err => {
                console.log('An error occured while runnning the query', err);
                return new Promise((resolve, reject) => {
                    reject('API : get/data | ERROR : Error encountered while reading from database with 3 types');
                });
            });

        } else {
            //this will work in case user sends only relationships
            let queryStatement = '';
            if (!dataObj.relation) {
                queryStatement = `match (p) <-[r]->(q) return p,q,r`;
            } else {
                queryStatement = `match (p) <-[r${dataObj.relation}]->(q) return p,q,r`;
            }
            console.log('query for 0 node type is ', queryStatement);

            return runQuery(queryStatement).then(result => {
                let serializedData = serializer.Neo4JtoVisFormat(JSON.stringify(result.records));
                return new Promise((resolve, reject) => {
                    resolve(serializedData);
                });
            }).catch(err => {
                console.log('An error occured while runnning the query', err);
                return new Promise((resolve, reject) => {
                    reject('API : get/data | ERROR : Error encountered while reading from database with 0 types');
                });
            });

        }



    } else {

    }
}



module.exports = {
    initiate,
    getData,
    searchQuery,
    getMetaData,
    getGraphData,
    getGraphDataV2,
    getDataV2
}