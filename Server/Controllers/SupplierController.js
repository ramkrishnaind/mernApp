
const express = require('express');

const fs = require('fs')
var router = express.Router();
const multer = require("multer");
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let fpathId = 'uploads/builder';
        try {
            if (!fs.existsSync(fpathId)) {
                fs.mkdirSync(fpathId, { recursive: true }, (err) => {
                    if (err) {
                        throw err;
                    }
                });
            }
        } catch (err) {
            console.error(err)
        }
        cb(null, fpathId)
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
let upload = multer({ storage: storage });
const path = require('path');
let { createSupplier, getSupplierList, getSupplierDetail, updateSupplierStatus, updateSupplier, deleteSupplier } = require('./Routes');
const userAuthMiddlewareFunction = require('../Middleware/userAuth');

module.exports = function (conn) {
    // console.log(conn)
    const allCollection = require('../Database/getCollections')(conn.MongoDBConnection);
    const userAuthMiddleware = userAuthMiddlewareFunction.userAuthMiddleware(allCollection);
    const requestAuthMiddleware = userAuthMiddlewareFunction.requestAuthMiddleware(allCollection);

    router.post('/createSupplier', requestAuthMiddleware, createSupplier(allCollection))
    router.post('/getSupplierList', userAuthMiddleware, getSupplierList(allCollection))
    router.post('/getSupplierDetail', userAuthMiddleware, getSupplierDetail(allCollection))
    router.post('/updateSupplier', requestAuthMiddleware, updateSupplier(allCollection))
    router.post('/updateSupplierStatus', userAuthMiddleware, updateSupplierStatus(allCollection))
    router.post('/deleteSupplier', userAuthMiddleware, deleteSupplier(allCollection))

    return router;
};