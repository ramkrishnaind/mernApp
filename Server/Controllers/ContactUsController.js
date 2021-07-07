
const express = require('express');

const fs = require('fs')
var router = express.Router();
const path = require('path');
let { createContactUs, getContactUsList, updateContactUsStatus,updateContactUs } = require('./Routes');
const userAuthMiddlewareFunction = require('../Middleware/userAuth');

module.exports = function (conn) {
    // console.log(conn)
    const allCollection = require('../Database/getCollections')(conn.MongoDBConnection);
    const userAuthMiddleware = userAuthMiddlewareFunction.userAuthMiddleware(allCollection);
    const requestAuthMiddleware = userAuthMiddlewareFunction.requestAuthMiddleware(allCollection);

    router.post('/createContactUs', createContactUs(allCollection))
    router.post('/getContactUsList', getContactUsList(allCollection))
    router.post('/updateContactUs', updateContactUs(allCollection))
    router.post('/updateContactUsStatus', updateContactUsStatus(allCollection))
    
    return router;
};