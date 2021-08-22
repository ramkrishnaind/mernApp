
const express = require('express');
const fs = require('fs');
var router = express.Router();

const path = require('path');
const multer = require("multer");
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let fpathId = 'uploads/home/about';
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


const homeFunction = require('./Routes/HomeModule/HomeManagement');
const userAuthMiddlewareFunction = require('../Middleware/userAuth');


module.exports = function (conn) {
    // console.log(conn)
    const db = require('../Database/getCollections')(conn.MongoDBConnection);
    const userAuthMiddleware = userAuthMiddlewareFunction.userAuthMiddleware(db);
    const requestAuthMiddleware = userAuthMiddlewareFunction.requestAuthMiddleware(db);

    router.post('/createAboutSection', userAuthMiddleware, upload.array("aboutImages"), homeFunction.createAboutSection(db));
    router.post('/updateAboutSection', userAuthMiddleware, upload.array("aboutImages"), homeFunction.updateAboutSection(db));
    router.post('/homeAbout', userAuthMiddleware, homeFunction.getHomeAboutHelper(db));

    router.post('/createMovingBanner', userAuthMiddleware, homeFunction.createMovingBanner(db));
    router.post('/updateMovingBanner', userAuthMiddleware, upload.array("backgroundImage"), homeFunction.updateMovingBanner(db));
    router.post('/movingBanner', userAuthMiddleware, homeFunction.getMovingBanner(db));

    //Api For Client Side
    router.post('/getHomeAbout', requestAuthMiddleware, homeFunction.getHomeAboutHelper(db));
    router.post('/getMovingBanner', requestAuthMiddleware, homeFunction.getMovingBanner(db));

    //router.post('/applyForJob', userAuthMiddleware, homeFunction.createHomeFunc(db));
    return router;
};