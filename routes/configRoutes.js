const express = require('express');
const router = express.Router();

const configUtility = require('./../utility/configUtility');

router.get('/get', (req,res) => {
    console.log('file/get hit');
    configUtility.getConfig(req)
    .then(response => {
        res.send(response);
    })
    .catch(err => {
        console.log('\nrecieved error while fetching file ', err);
        if (err !== null && err.constructor === Object) {
            res.status(500).send(err);
        } else {
        res.status(500).send({error : `An error occured while reading the configuration file ${req.query.fileName}`});
        }
    });
});

module.exports = router;