// import request to  make new API requests
const request = require('request-promise');


var dataExport = (format) => {
    // hit the url which will give you the export data and then simply send it back
    let options = {
        url: 'http://localhost:9393/v1/data/read',
        headers: {
            'content-type': 'text/csv'
        }
    }
    return request.get(options)
        .then(response => {
            return Promise.resolve(response);
        })
        .catch(error => {
            console.log('An error occured while fetching export data from remote API');
            console.log(error);
            return Promise.reject('Error occured while hitting remote API for file export');
        });
}

module.exports = { dataExport }