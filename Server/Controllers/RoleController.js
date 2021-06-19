
const express = require('express');
var router = express.Router();
const userAuthMiddlewareFunction = require('../Middleware/userAuth');

let {createUserRoleFunction, updateStatusUserRoleFunction, userRoleListFunction} = require('./Routes')

module.exports = function (conn) {
    const allCollection = require('../Database/getCollections')(conn.MongoDBConnection);
    const userAuthMiddleware = userAuthMiddlewareFunction.userAuthMiddleware(allCollection);
    const requestAuthMiddleware = userAuthMiddlewareFunction.requestAuthMiddleware(allCollection);

    router.post('/createUserRole', requestAuthMiddleware, createUserRoleFunction(allCollection));
    router.post('/updateStatusUserRole', requestAuthMiddleware, updateStatusUserRoleFunction(allCollection));
    router.post('/userRoleList', requestAuthMiddleware, userRoleListFunction(allCollection));
    
    

    return router;
};