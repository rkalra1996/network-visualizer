const E3 = require('eventemitter3');

const fs = require('fs');
const path = require('path');
const BASE_DIR = path.join(__dirname, '../logs/frontend');

const logUtility = require('./../utility/logUtility');

var event = new E3.EventEmitter();

event.on('write-log', (logData, response) => {

    logUtility.validateDirectory(BASE_DIR);
    
    fs.appendFile(BASE_DIR + '/' + logData.file, logData.log, (err) => {
        if (err) {
            console.log('An error occured while writing the log on '+ logData.currentFileName + '\n');
            response.status(500).send({error: 'Unable to log the request, try again later'});
        } else {
            // logged successfully
            console.log('logged');
            response.sendStatus(200);
        }
    });
});

event.on('clear-logs', (type,callback) => {

    logUtility.validateDirectory(BASE_DIR);
    
    if (!type.hasOwnProperty('constructor') && type.length > 0 && type === 'all') {
        fs.readdir(BASE_DIR, (err, fileNames) => {
            if (err) {
                console.log('An error occured while reading the frontend log directory');
            }
            else if (fileNames && fileNames.length > 0) {
                fileNames.forEach(fileName => {
                    fs.unlink(BASE_DIR + '/' + fileName, err => {
                        if (err) {
                            console.log('error occured while clearing log file -> ', fileName + '\n');
                            console.log(err);
                        }
                    });
                });
            }
            callback();
        });
    }
});


module.exports.logEvents = event;