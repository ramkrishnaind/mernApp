
const express = require('express');
var router = express.Router();

const createMenuModule = require('./Routes/MenuModule/createMenuModule');

const userAuthMiddlewareFunction = require('../Middleware/userAuth');

module.exports = function (conn) {
    // console.log(conn)
    const allCollection = require('../connection/connection1/getCollections')(conn.finvestfxDBConnection);
    const userAuthMiddleware = userAuthMiddlewareFunction(allCollection);

    router.get('/createMenuModule', userAuthMiddleware, createMenuModule(allCollection))

    return router;
};