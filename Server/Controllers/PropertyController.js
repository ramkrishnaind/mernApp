
const express = require('express');
const fs = require('fs')
var router = express.Router();
const multer = require("multer");
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let fpathId = 'uploads/' + req.body.imagetype + '/' + req.body.productId;
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
        req.body.imageFileName = (file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
let upload = multer({ storage: storage });
const path = require('path');
let { createPropertyRequest, getPropertyRequest, updatePropertyStatusRequest, exteriorImage,
    getUserIdPropertyList, updatePrice, getSearchPropertyList } = require('./Routes');
const userAuthMiddlewareFunction = require('../Middleware/userAuth');

module.exports = function (conn) {
    // console.log(conn)
    const allCollection = require('../Database/getCollections')(conn.MongoDBConnection);
    const userAuthMiddleware = userAuthMiddlewareFunction.userAuthMiddleware(allCollection);
    const requestAuthMiddleware = userAuthMiddlewareFunction.requestAuthMiddleware(allCollection);

    router.post('/createPropertyRequest', requestAuthMiddleware, createPropertyRequest(allCollection))
    router.post('/createProperty', userAuthMiddleware, createPropertyRequest(allCollection))
    router.post('/getPropertyRequest', requestAuthMiddleware, getPropertyRequest(allCollection))
    router.post('/updatePropertyStatusRequest', userAuthMiddleware, updatePropertyStatusRequest(allCollection))
    router.post('/uploadImage', upload.array("image"), exteriorImage(allCollection))
    router.post('/getUserIdPropertyRequest', getUserIdPropertyList(allCollection))
    router.post('/updatePrice', updatePrice(allCollection))
    router.post('/getSearchPropertyList', getSearchPropertyList(allCollection))


    return router;
};