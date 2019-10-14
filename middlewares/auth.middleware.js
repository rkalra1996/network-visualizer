
var searchAuth = (req,res,next) => {
    console.log('search auth middleware');
    if(req.headers.hasOwnProperty('database_authorization') && !!req.headers.database_authorization) {
        if (req.headers.database_authorization === process.env.network_visualizer_neo4j_search_token) {
            console.log('database_authorization key is valid : ', req.headers.database_authorization);
            next();
        } else {
            console.log('database_authorization key is invalid : ', req.headers.database_authorization);
        res.status(401).send({'Error': 'Unauthorized request / invalid key database_authorization provided'})
        }
    } else {
        //unauthorised requests are not entertained
        console.log('API : /search/neo4j | request does not contain database_authorization header');
        res.status(401).send({'Error': 'Unauthorized request / key database_authorization not provided'})
    }
}

module.exports = {
    searchAuth
}