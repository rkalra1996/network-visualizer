const express = require('express');
const parser = require('body-parser');
const router = express.Router();

//setup the neo4J data driver
const neo4j = require('./../neo4jDriverUtility');

router.use(express.json());

router.get('/initialdata', (req, res) => {
    console.log('initial data');
    // get initial data from the data base
    neo4j.getData()
    .then(response => {
        res.send(response);
    })
    .catch(err => {
        console.log('err occured while sending back ', err);
        res.sendStatus(500);
    });
});

router.get('/graph/metadata', (req,res) => {
    console.log('get metadata');
    neo4j.getMetaData()
    .then(response => {
        res.send(response);
    })
    .catch(err => {
        console.log('err occured while sending back meta data', err);
        res.sendStatus(500);
    });
    // get the meta data for the selected graph
    // Meta data will give the following :
    // 1. Total Organisations and there names
    // 2. Total Relationships and there names
});

router.post('/graph/data', (req,res) => {
    console.log('get graph data');
    // get the body, else return the error that no body is provided
    if (!!Object.keys(req.body).length) {
        neo4j.getGraphData(req)
        .then( response => {
            res.send(response);
        })
        .catch( err => {
            console.log('err occured while sending back graph data', err);
            res.sendStatus(500);
        });
    } else {
        // empty object is not allowed
        console.log('empty body recieved in the req');
        res.status(400).send({'error': 'Request Body is required to access the API'});
    }
});

module.exports = router;
