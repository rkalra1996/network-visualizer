const fs = require('fs');
const path = require('path');
// default directory to look for config files
const BASE_CONFIG_DIR = path.join(__dirname,'/../resource_config');
const QUERY_KEY_TO_LOCATE = 'fileName';


// utility function to read the file from the system
function read(fileName) {
    return new Promise((resolve,reject) => {
        if (!!fileName) {
            let configUrl = path.join(BASE_CONFIG_DIR, fileName);
            fs.readFile(configUrl,'utf-8', (err, data) => {
                if (err) {
                    if (err.errno === -4058 && err.code === 'ENOENT') {
                        // means file does not exist
                        console.log(`${fileName} does not exist`);
                        reject({error : `${fileName} does not exist`});
                    }
                    reject(null);
                } else {
                    // return the file read
                    resolve(data);
                }
            });
        }
        else {
            console.log('FileName is either null or invalid');
            reject(null);
        }
    });
}


var getConfig = async (request) => {
    if (request.hasOwnProperty('query') && request.query.hasOwnProperty(QUERY_KEY_TO_LOCATE)) {
        let fileNameToFetch = request.query.fileName;
        if (!!fileNameToFetch) {
        // fetch the file and return it back
        let fileContents = await read(fileNameToFetch);
        if (!!fileContents) {
            let parsedFile = {};
            try {
                // check if the file is parsable
                parsedFile = JSON.parse(fileContents);
                return Promise.resolve(parsedFile);
            } catch (e) {
                console.log('Error occured while parsing the file, maybe its not json', e);
                return Promise.resolve({});
            }
        } else if (fileContents === '') {
            // file is empty
            console.log(`file ${fileNameToFetch} is fetched but empty`);
            return Promise.resolve({});
        }
        else {
            console.log('Error occured while reading the file, maybe it does not exist');
            return Promise.reject(null);
        }
        }
        else {
            console.log(`Failed Request to fetch configuration file ${fileNameToFetch}, fileName is empty or invalid`);
        }
    } else {
        console.log('did not recieve params in the api /config/get');
        return Promise.reject(null);
    }
}
module.exports = {
    getConfig
}