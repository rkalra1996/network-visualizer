var processProperties = (objectName, dataProperties, addBrackets = false) => {
    if (Object.keys(dataProperties).length > 0) {
        // has some properties, now convert them
        if (!!objectName) {
            let query = [];
            Object.keys(dataProperties).forEach(key => {
                query.push(`${objectName}.\`${key}\` = "${dataProperties[key]}"`)
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
        let query = `match (targetNode : \`${data.type[0]}\` ) where id(targetNode) = ${data.id} set`;
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

module.exports = {
    createUpdateNodeQuery,
    createUpdateRelationQuery,
    processProperties
}