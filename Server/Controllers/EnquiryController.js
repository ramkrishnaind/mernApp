
const express = require('express');
var router = express.Router();
const multer = require("multer");

const path = require('path');
let { createEnquiryRequest, getEnquiryRequest, updateEnquiryStatusRequest } = require('./Routes');
const userAuthMiddlewareFunction = require('../Middleware/userAuth');

module.exports = function (conn) {
    // console.log(conn)
    const allCollection = require('../Database/getCollections')(conn.MongoDBConnection);
    const userAuthMiddleware = userAuthMiddlewareFunction.userAuthMiddleware(allCollection);
    const requestAuthMiddleware = userAuthMiddlewareFunction.requestAuthMiddleware(allCollection);

    router.post('/createEnquiryRequest', createEnquiryRequest(allCollection))
    router.post('/getEnquiryRequest', requestAuthMiddleware, getEnquiryRequest(allCollection))
    router.post('/updateEnquiryStatusRequest', requestAuthMiddleware, updateEnquiryStatusRequest(allCollection))
    
    return router;
};