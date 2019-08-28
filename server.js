const express = require('express')
const path = require('path')
const cors = require('cors');
const app = express()
const port = 3050

//setup the neo4J data driver
const neo4j = require('./neo4jDriverUtility');

app.use(cors());

const graphRoutes = require('./routes/graphRoutes');
const fileRoutes = require('./routes/fileRoutes');
const configRoutes = require('./routes/configRoutes');

app.use('/api', graphRoutes);
app.use('/file', fileRoutes);
app.use('/v2', express.static(path.join(__dirname, 'client/dist/')));
app.use('/config', configRoutes);

app.use(express.static(path.join(__dirname, 'client/dist/')));



app.listen(port, () => {
    neo4j.initiate();
    console.log(`network visualizer server is burining on ${port}!`);
});