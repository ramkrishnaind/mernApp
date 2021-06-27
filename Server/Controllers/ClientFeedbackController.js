
const express = require('express');
var router = express.Router();
const multer = require("multer");

const path = require('path');
let { createFeedbackRequest, getFeedbackRequest, updateFeedbackStatusRequest } = require('./Routes');
const userAuthMiddlewareFunction = require('../Middleware/userAuth');

module.exports = function (conn) {
    // console.log(conn)
    const allCollection = require('../Database/getCollections')(conn.MongoDBConnection);
    const userAuthMiddleware = userAuthMiddlewareFunction.userAuthMiddleware(allCollection);
    const requestAuthMiddleware = userAuthMiddlewareFunction.requestAuthMiddleware(allCollection);

    router.post('/createFeedbackRequest', createFeedbackRequest(allCollection))
    router.post('/getFeedbackRequest', getFeedbackRequest(allCollection))
    router.post('/updateFeedbackStatusRequest', requestAuthMiddleware, updateFeedbackStatusRequest(allCollection))
    
    return router;
};