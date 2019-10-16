const _ = require('lodash');


var processProperties = (objectName, dataProperties, addBrackets = false) => {
    if (Object.keys(dataProperties).length > 0) {
        // has some properties, now convert them
        if (!!objectName) {
            let query = [];
            Object.keys(dataProperties).forEach(key => {
                /* if (dataProperties[key].constructor === Boolean) {
                    // if a value of property is boolean, set it as boolean and not a string
                    // example : hello : true should convert to ObjectName.hello = true and not ObjectName.hello = "true"
                    query.push(`${objectName}.\`${key}\` = ${dataProperties[key]}`)
                } else {
                    query.push(`${objectName}.\`${key}\` = "${dataProperties[key]}"`)
                } */
                query.push(`${objectName}.\`${key}\` = "${dataProperties[key]}"`);
            });
            // join all the sub queries
            let completeQuery = query.join(',');
            if (addBrackets) {
                return `{ ${completeQuery} }`
            } else {
                return completeQuery;
            }
        } else {
            // no reference object name provided, cannot create a new query
            return ''
        }
    } else return '';
}

// deprecated , processProperties now has this capability
function quickQuery(objectName, properties, ) {
    let queryArr = [];
    Object.keys(properties).forEach(key => {
        queryArr.push(`${objectName}.\`${key}\` = "${properties[key]}"`);
    });
    if (addBrackets) {
        return `{ ${queryArr.join(', ')} }`
    } else {
        return queryArr.join(', ');
    }
}

var createUpdateNodeQuery = (data) => {
    if (data.hasOwnProperty('type') && data.hasOwnProperty('id')) {
        // node has the previous id and type, find the node using these and update the properties
        let query = `match (targetNode : \`${data.type[0]}\` ) where id(targetNode) = ${data.id} set targetNode = {} with targetNode set`;
        let subQuery = '';
        let returnQuery = 'return targetNode';
        // add the default deleted to false here
        data.properties['deleted'] = false;
        // subquery will store the data of properties to update
        subQuery = processProperties('targetNode', data.properties);
        // join all the queries
        let finalQuery = `${query} ${subQuery} ${returnQuery}`;
        return finalQuery;
    } else return '';
}

var createUpdateRelationQuery = (data) => {
    // logic to  create updateRelationQuery
    if (data.hasOwnProperty('type') && data.hasOwnProperty('id')) {
        // relation has previous id and type, find the relation using these and update the properties
        let query = `match (source)-[relation:\`${data.type}\`]-(target) 
        where id(relation) = ${data.id} set relation = {} with relation set`;
        let subQuery = '';
        let returnQuery = 'return relation';
        // add the default deleted to false here
        data.properties['deleted'] = false;
        // subQuery will store the properties of relation
        subQuery = processProperties('relation', data.properties);
        // join all the queries
        let finalQuery = `${query} ${subQuery} ${returnQuery}`;
        console.log('query created is ', finalQuery);
        return finalQuery;
    } else {
        // will not create a query unless type and id are specified
        return ''
    }
}

var createDeleteNodeQuery = (nodeID, relationIDS) => {
    // if there is no relation connected to node, simply delete the node
    if (!!nodeID && relationIDS.length === 0) {
        let query = `match (source) where id(source) = ${nodeID} set source.\`deleted\` = true return source`;
        return query;
    } else if (!!nodeID && relationIDS.length > 0) {
        // user did not supply nodeID , cannot delete only relationship on delete node
        let query = `match (source)-[r]-() where id(source) = ${nodeID} and id(r) in [${relationIDS}] 
        set source.\`deleted\` = true , r.\`deleted\` = true return source,r`;
        console.log('delete node query is ', query);
        return query;
    } else if (!nodeID && relationIDS.length === 0) {
        // if user did not supply anything, there is no use
        console.log('Error : NodeID and relationArray both are empty / missing');
        return ''
    } else {
        // some arbitrary error
        return '';
    }
}

var createDeleteRelationQuery = (relationID) => {
    if (relationID.length > 0 || !isNaN(relationID)) {
        let query = `match ()-[r]-() where id(r) = ${relationID} set r.\`deleted\` = true return r`;
        return query;
    } else {
        return '';
    }
}

function extractProperties(entitiesArray, type = 'node') {
    try {
        if (entitiesArray.length > 0) {
            // start collecting the list
            let idealObject = {}
            entitiesArray.forEach(entity => {
                if (Object.keys(entity).length > 0) {
                    Object.keys(entity).forEach(entityKey => {
                        if (entityKey === 'Name' && entity['deleted'] === 'true' | entity['deleted'] === true) {

                        } else {
                            if (Object.keys(idealObject).indexOf(entityKey) > -1) {
                                idealObject[entityKey].push(entity[entityKey]);
                            } else {
                                idealObject[entityKey] = [];
                                idealObject[entityKey].push(entity[entityKey]);
                            }
                        }

                    });
                }
            });

            // make all the keys unique
            Object.keys(idealObject).forEach(key => {
                idealObject[key] = _.uniq(idealObject[key]);
                idealObject[key] = _.orderBy(idealObject[key]);
            });
            return idealObject;
        }
    } catch (e) {
        // illegal datatype provided in entitiesArray
        console.log('bad datatype provided in entitiesArray', e);
        return {}
    }
}

var processFetchedProperties = (rawGraphResponse) => {
    // iterate to all the nodes and relations and collect all the possible values used in the properties
    let responseObj = {
            nodes: [],
            relations: []
        }
        // seperate nodes and relations properties
    rawGraphResponse.forEach(record => {
        // index 0 is for node, 1 for relation
        try {
            if (record._fields[0] !== null && record._fields[0].hasOwnProperty('properties')) {
                responseObj.nodes.push(record._fields[0].properties);
            }
            if (record._fields[1] !== null && record._fields[1].hasOwnProperty('properties')) {
                responseObj.relations.push(record._fields[1].properties);
            }
        } catch (e) {
            console.log('An error occured while seperating node and relationships in processFetchedProperties ', e);
        }
    });
    return {
        nodes: extractProperties(responseObj.nodes, 'node'),
        relations: extractProperties(responseObj.relations, 'relation')
    };
}

var convertToBoolean = (possibleBool) => {
    // To convert the given string representation into boolean respresentation, or false otherwise
    return !!possibleBool ? ((possibleBool === 'true') ? true : false) : false;
}

var createQueryForRestore = (dataObj) => {
    if (dataObj.hasOwnProperty('nodes') || dataObj.hasOwnProperty('relations')) {
        let idStringNodesArray = '';
        let idStringRelationsArray = '';
        let query = '';
        // start creating the query
        if (dataObj.nodes.length > 0) {
            idStringNodesArray = convertToArrayString(dataObj.nodes);
        }
        if (dataObj.relations.length > 0) {
            idStringRelationsArray = convertToArrayString(dataObj.relations);
        }
        if (!!idStringNodesArray && !!idStringRelationsArray) {
            // both are present
            query = `match (nodes) where id(nodes) IN ${idStringNodesArray} set nodes.deleted = false with nodes
            match ()-[relations]-() where id(relations) IN ${idStringRelationsArray} set relations.deleted = false return nodes,relations`;
        } else if (!!idStringNodesArray && !idStringRelationsArray) {
            // only relations are present
            query = `match (nodes) where id(nodes) IN ${idStringNodesArray} set nodes.deleted = false return nodes`;
        } else if (!idStringNodesArray && !!idStringRelationsArray) {
            // only nodes are present
            query = `match ()-[relations]-() where id(relations) IN ${idStringRelationsArray} set relations.deleted = false return relations`;
        } else {
            // both are not present, no restore
            return '';
        }
        return query;
    } else {
        return '';
    }
}

function convertToArrayString(ArrayData) {
    if (ArrayData.length > 0) {
        let arrayStatements = [];
        ArrayData.forEach(item => {
            arrayStatements.push(`${item}`);
        });
        return `[${arrayStatements.join(",")}]`;
    } else return null;
}

module.exports = {
    createUpdateNodeQuery,
    createUpdateRelationQuery,
    createDeleteNodeQuery,
    createDeleteRelationQuery,
    processProperties,
    processFetchedProperties,
    convertToBoolean,
    createQueryForRestore
}