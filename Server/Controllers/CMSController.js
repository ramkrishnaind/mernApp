
const express = require('express');

const fs = require('fs')
var router = express.Router();
const multer = require("multer");
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let fpathId = 'uploads/cms';
        try {z
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
        // req.body.imageFileName = (file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
let upload = multer({ storage: storage });
const path = require('path');
let { createCMS, getCMSList, updateCMSStatus,updateCMS } = require('./Routes');
const userAuthMiddlewareFunction = require('../Middleware/userAuth');

module.exports = function (conn) {
    // console.log(conn)
    const allCollection = require('../Database/getCollections')(conn.MongoDBConnection);
    const userAuthMiddleware = userAuthMiddlewareFunction.userAuthMiddleware(allCollection);
    const requestAuthMiddleware = userAuthMiddlewareFunction.requestAuthMiddleware(allCollection);

    router.post('/createCMS', upload.array("cms"), createCMS(allCollection))
    router.post('/getCMSList', getCMSList(allCollection))
    router.post('/updateCMS', upload.array("cms"), updateCMS(allCollection))
    router.post('/updateCMSStatus', updateCMSStatus(allCollection))
    
    return router;
};