// use lodash as a helper
const _ = require('lodash');

var Neo4JtoJsonFormat = (data) => {
    // clean the data containers before processing
    let allLabelData = [];
    let name = [];


    if (!data.length) {
        console.error('Data provided to serialilze is not good enough, review you data', data);
    } else {
        // data is okay now time to serialize it.
        try {
            data = JSON.parse(data);
            data[0].keys.forEach(key => {
                if (key.includes(".")) {
                    //check for dot
                    key = key.split(".");
                    if (key[1].includes("`")) {
                        // check for tild
                        key[1] = key[1].split("`")
                        allLabelData.push({
                            [key[1][1]]: []
                        });
                    } else {
                        allLabelData.push({
                            [key[1]]: []
                        });
                    }
                } else {
                    if (key.includes("(")) {
                        key = key.split("(");
                        allLabelData.push({
                            [key[0]]: []
                        });
                    }
                }

            });
            data.forEach((properties, index) => {
                // Extract keys 
                let propertiesArray = properties._fields;
                propertiesArray.forEach((property, i) => {
                    // store property with respective keys
                    if (property) {
                        let keyName = Object.keys(allLabelData[i])[0];
                        allLabelData[i][keyName].push(property);
                    }
                });
            });
            allLabelData = getUnique(allLabelData);
        } catch (e) {
            console.error('An error occured while processing the data in the labelserializer', e);
        }
        return allLabelData;
    }
}

function getUnique(allLabelData) {
    allLabelData.forEach((data, i) => {
        let keyName = Object.keys(allLabelData[i])[0];
        allLabelData[i][keyName] = _.uniq(allLabelData[i][keyName]);

    })
    return allLabelData;
}

module.exports = {
    Neo4JtoJsonFormat
}