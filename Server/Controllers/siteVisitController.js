
const express = require('express');
var router = express.Router();
const multer = require("multer");

const path = require('path');
let { createSiteVisitRequest, getSiteVisitRequest, updateSiteVisitStatusRequest } = require('./Routes');
const userAuthMiddlewareFunction = require('../Middleware/userAuth');

module.exports = function (conn) {
    // console.log(conn)
    const allCollection = require('../Database/getCollections')(conn.MongoDBConnection);
    const userAuthMiddleware = userAuthMiddlewareFunction.userAuthMiddleware(allCollection);
    const requestAuthMiddleware = userAuthMiddlewareFunction.requestAuthMiddleware(allCollection);

    router.post('/createSiteVisitRequest', createSiteVisitRequest(allCollection))
    router.post('/getSiteVisitRequest', getSiteVisitRequest(allCollection))
    router.post('/updateSiteVisitStatusRequest', updateSiteVisitStatusRequest(allCollection))
    
    return router;
};