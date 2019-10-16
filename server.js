// load environment variables
require('dotenv').config()

const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.network_visualizer_server_port || 3050;

//setup the neo4J data driver
const neo4j = require('./neo4jDriverUtility');
const logger = require('./services/server-logger-service/server-logger').ServerLogger;

app.use(cors());

logger.log({type: 'info', log: 'This is the general log', data: 'gello'});
const graphRoutes = require('./routes/graphRoutes');
const fileRoutes = require('./routes/fileRoutes');
const configRoutes = require('./routes/configRoutes');
const logRoutes = require('./routes/logRoutes');

app.use('/log', logRoutes);
app.use('/api', graphRoutes);
app.use('/file', fileRoutes);
app.use('/config', configRoutes);

app.use(['/algorithm','/algorithm*', ''],express.static(path.join(__dirname, 'client/dist/')));



app.listen(port, () => {
    neo4j.initiate();
    console.log(`network visualizer server is burining on ${port}!`);
});