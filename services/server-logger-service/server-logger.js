const winstonLogger = require('./../winston-service/winston-service').winstonLogger;

class ServerLogger {

    _logInfo(logData) {
        if (logData.hasOwnProperty('data')) {
            winstonLogger.log(logData.type, logData.log, {extraData: logData.data});
        } else {
            winstonLogger.log(logData.type, logData.log);
        }
    }

    _logSuccess(logData){
        console.log('log success');
    }

    _logError(logData){
        console.log('log error');
    }

    log(logData) {
        // decide the type of logger to call
        if (logData.hasOwnProperty('type') && logData.hasOwnProperty('log')) {
            switch (logData.type) {
                case 'info' :
                    this._logInfo(logData);
                    break;
                case 'success' :
                    this._logSuccess(logData);
                    break;
                case 'error' :
                    this._logError(logData);
                    break;
                default :
                    console.log('Invalid Option for server-logger provided');
            }
        }
        else {
            console.log('Unable to log data as invalid object provided to the server-logger');
        }
    }

}

var Container = require('typedi').Container;
var serverLoggerObject = Container.get(ServerLogger);


module.exports = { ServerLogger : serverLoggerObject}