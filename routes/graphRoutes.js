const express = require('express');
const router = express.Router();

//setup the neo4J data driver
const neo4j = require('./../neo4jDriverUtility');

router.get('/initialdata', (req, res) => {
    console.log('initial data');
    // get initial data from the data base
    neo4j.getData().then(response => {
        res.send(response);
    }).catch(err => {
        console.log('err occured while sending back ', err);
        res.sendStatus(500);
    });
});

module.exports = router;
