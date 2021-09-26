
const express = require('express');
var router = express.Router();
const multer = require("multer");
const fs = require("fs");
const path = require('path');
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let fpathId = 'uploads/feadback';
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
let { createFeedbackRequest, getFeedbackRequest, getFeedbackForHome, updateFeedbackStatusRequest } = require('./Routes');
const userAuthMiddlewareFunction = require('../Middleware/userAuth');

module.exports = function (conn) {
    // console.log(conn)
    const allCollection = require('../Database/getCollections')(conn.MongoDBConnection);
    const userAuthMiddleware = userAuthMiddlewareFunction.userAuthMiddleware(allCollection);
    const requestAuthMiddleware = userAuthMiddlewareFunction.requestAuthMiddleware(allCollection);

    router.post('/createFeedback', userAuthMiddleware, upload.array("image"), createFeedbackRequest(allCollection))
    router.post('/getFeedbackRequest', requestAuthMiddleware, getFeedbackRequest(allCollection))
    router.post('/getFeedbackForHome', requestAuthMiddleware, getFeedbackForHome(allCollection))
    router.post('/updateFeedbackStatusRequest', userAuthMiddleware, updateFeedbackStatusRequest(allCollection))

    return router;
};