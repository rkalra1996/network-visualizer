const path = require('path');
const BASE_DIR = path.join(__dirname, '../../logs/backend');
const logUtility = require('./../../utility/logUtility');

const winston = require('winston');
// validate if the directory is already present or not
logUtility.validateDirectory(BASE_DIR);

const logger = winston.createLogger({
    transports : [
        new winston.transports.Console(),
        new winston.transports.File(
            {
                filename: path.join(BASE_DIR, '/', logUtility.getFileName()),
                maxsize: 500
            }
            )
    ],
    format: winston.format.combine(
        winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
        winston.format.errors({stack: true}),
        winston.format.printf(info => `[${info.level}] -> [${info.timestamp}] :  message: ${info.message} extraData : ${parseData(info.extraData)}`)
        )
});

function parseData(possibleParsedData) {
    try {
        if(possibleParsedData.constructor === Object) {
            return JSON.stringify(possibleParsedData);
        }
    } catch (e) {
        // it is not an object
        return possibleParsedData;
    }
}

module.exports = {
    winstonLogger: logger
}