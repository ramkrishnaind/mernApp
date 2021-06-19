
const express = require('express');
var router = express.Router();

let {createMenu, getMenuList} = require('./Routes');
const userAuthMiddlewareFunction = require('../Middleware/userAuth');

module.exports = function (conn) {
    // console.log(conn)
    const allCollection = require('../Database/getCollections')(conn.MongoDBConnection);
    const userAuthMiddleware = userAuthMiddlewareFunction.userAuthMiddleware(allCollection);
    const requestAuthMiddleware = userAuthMiddlewareFunction.requestAuthMiddleware(allCollection);

    router.post('/createMenu', requestAuthMiddleware, createMenu(allCollection))
    router.post('/getMenuList', requestAuthMiddleware, getMenuList(allCollection))

    return router;
};