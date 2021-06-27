
const express = require('express');
var router = express.Router();
const multer = require("multer");

const path = require('path');
let { createPropertyRequest, getPropertyRequest, updatePropertyStatusRequest } = require('./Routes');
const userAuthMiddlewareFunction = require('../Middleware/userAuth');

module.exports = function (conn) {
    // console.log(conn)
    const allCollection = require('../Database/getCollections')(conn.MongoDBConnection);
    const userAuthMiddleware = userAuthMiddlewareFunction.userAuthMiddleware(allCollection);
    const requestAuthMiddleware = userAuthMiddlewareFunction.requestAuthMiddleware(allCollection);

    router.post('/createPropertyRequest', createPropertyRequest(allCollection))
    router.post('/getPropertyRequest', getPropertyRequest(allCollection))
    router.post('/updatePropertyStatusRequest', requestAuthMiddleware, updatePropertyStatusRequest(allCollection))
    
    return router;
};