/**
 * Routing File to manage log routes
 * 
 * @author Rishabh Kalra
 * @created_date 04/09/2019
 */

const express = require('express');
const router = express.Router();

const logUtility = require('./../utility/logUtility');

const logEvents = require('./../events/logEvents').logEvents;


router.use(express.json());

/**
 * To handle the POST request to write the logs into the file for a particular day
 * @param request
 * @returns status codes 200, 500, 400
 */
router.post('/write', (request,response) => {
    // capture the body which will contain the log to be written
    let logData = Object.keys(request.body).length ? request.body : null;
    if (logData) {
        const currentFileName = logUtility.getFileName();
        console.log('file name is ', currentFileName);
        // append to the file designated for frontend logs
        const finalData = JSON.stringify(logData) + '\n';
        logEvents.emit('write-log', {file: currentFileName, log: finalData}, response);
    }
});

/**
 * To handle the get request of clearing all the logs from frontend folder
 * @returns status 200, 500
 */
 router.get('/clear/all', (request,response) => {
     // clear the log files present 
     logEvents.emit('clear-logs', 'all', () => {
         console.log('logs have been cleared successfully');
         response.sendStatus(200);
     });
 });

module.exports = router;