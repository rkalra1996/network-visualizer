var processProperties = (objectName, dataProperties, addBrackets = false) => {
    if (Object.keys(dataProperties).length > 0) {
        // has some properties, now convert them
        if (!!objectName) {
            let query = [];
            Object.keys(dataProperties).forEach(key => {
                if (dataProperties[key].constructor === Boolean) {
                    // if a value of property is boolean, set it as boolean and not a string
                    // example : hello : true should convert to ObjectName.hello = true and not ObjectName.hello = "true"
                    query.push(`${objectName}.\`${key}\` = ${dataProperties[key]}`)
                } else {
                    query.push(`${objectName}.\`${key}\` = "${dataProperties[key]}"`)
                }
            });
            // join all the sub queries
            let completeQuery = query.join(',');
            if (addBrackets) {
                return `{ ${completeQuery} }`
            } else {
                return completeQuery;
            }
        }
        else {
            // no reference object name provided, cannot create a new query
            return ''
        }
    }
    else return '';
}

// deprecated , processProperties now has this capability
function quickQuery(objectName,properties,) {
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
        // subquery will store the data of properties to update
        subQuery = processProperties('targetNode',data.properties);
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
        where id(relation) = ${data.id} set`;
        let subQuery = '';
        let returnQuery = 'return relation';
        // subQuery will store the properties of relation
        subQuery = processProperties('relation', data.properties);
        // join all the queries
        let finalQuery = `${query} ${subQuery} ${returnQuery}`;
        console.log('query created is ', finalQuery);
        return finalQuery;
    }
    else {
        // will not create a query unless type and id are specified
        return ''
    }
} 

var createDeleteNodeQuery = (nodeID, relationIDS) => {
    // if there is no relation connected to node, simply delete the node
    if (!!nodeID && relationIDS.length === 0) {
        let query = `match (source) where id(source) = ${nodeID} set source.\`deleted\` = true return source`;
        return query;
    }
    else if (!!nodeID && relationIDS.length > 0) {
        // user did not supply nodeID , cannot delete only relationship on delete node
        let query = `match (source)-[r]-() where id(source) = ${nodeID} and id(r) in [${relationIDS}] 
        set source.\`deleted\` = true , r.\`deleted\` = true return source,r`;
        console.log('delete node query is ', query);
        return query;
    }
    else if (!nodeID && relationIDS.length === 0) {
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
    }
    else {
        return '';
    }
}

module.exports = {
    createUpdateNodeQuery,
    createUpdateRelationQuery,
    createDeleteNodeQuery,
    createDeleteRelationQuery,
    processProperties
}