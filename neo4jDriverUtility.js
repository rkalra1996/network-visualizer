const neo4j = require('neo4j-driver').v1;

//import config file for database
const neoConfig = require('./database_config/config.json');

//import serializer to serialize for visJS format
const serializer = require('./utility/serializer');

const {user,password} = neoConfig;

let neo4Jdriver;
var session;

var runQuery = (query) => {
    if (!!query.length) {
        return session.run(query);
    } else {
        console.error('Empty query passed');
        throw Error;
    }
}

var initiate = () => {
    if(!user) {
        console.error('No User provided, make sure you have entered the user in database_config/config.json --->', user);
    } else if (!password) {
        neo4Jdriver = neo4j.driver(neoConfig.url, neo4j.auth.basic(neoConfig.user, ''))
    } else {
        neo4Jdriver = neo4j.driver(neoConfig.url, neo4j.auth.basic(neoConfig.user, neoConfig.password))
    }
    session = neo4Jdriver.session();
}

var getMetaData = () => {
    let queryForNodes = 'match (p) -[r]-> (q) return count(p), p.Name';
    let queryForRelationships = 'match (p) -[r]-> (q) return count(r), r.Name';
    let dataToReturn = {
        Nodes: {},
        Relationships: {}
    }
    return runQuery(queryForNodes)
    .then(result => {
        let final = processMetaData({result, type: 'node'});
            dataToReturn.Nodes = final;
            // now ge the meta data of relationship
            return runQuery(queryForRelationships)
    })
    .then(relationshipResult => {
        let final = processMetaData({result: relationshipResult, type: 'relationship'});
        dataToReturn.Relationships = final;
        neo4Jdriver.close();
        return new Promise((res,rej) => {
            if (dataToReturn.constructor !== Object) {
                rej('Nothing recieved on processing the metaData');
            }
            else {
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
                        console.log('Total nodes returned are ', finalDATA);
                        return finalDATA;
                    }
                    else {
                        // empty records
                        return null;
                    }
                }
                else {
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
                    }
                    else {
                        // empty records
                        return null;
                    }
                }
                else {
                    // no records key found inside the data object , it should be there as the neo4J returns it
                    return null;
                }
            }
        }
        else {
            //invalid format of data provided
            return null;
        }
    }
    else {
        //entered data is not an object
        return null;
    }
}

var getData = (query) => {
    if(!query || query.length <= 0) {
        query = neoConfig.initial_query
    }
    return runQuery(query)
    .then(result => {
        let serializedData = serializer.Neo4JtoVisFormat(JSON.stringify(result.records));
        console.log('serialized data is ',serializedData.seperateNodes.length, serializedData.seperateEdges.length);
        neo4Jdriver.close();
        return new Promise ((res,rej) => {
            if (serializedData.seperateNodes.length > 0 ||  serializedData.seperateEdges.length > 0) {
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

module.exports = {
    initiate,
    getData,
    getMetaData
}
