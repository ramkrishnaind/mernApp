
const express = require('express');
const fs = require('fs');
var router = express.Router();

const path = require('path');
const multer = require("multer");
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let fpathId = 'uploads/home';
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
let bannerUpload = multer({ storage: storage });


const homeFunction = require('./Routes/HomeModule/HomeManagement');
const userAuthMiddlewareFunction = require('../Middleware/userAuth');


module.exports = function (conn) {
    // console.log(conn)
    const db = require('../Database/getCollections')(conn.MongoDBConnection);
    const userAuthMiddleware = userAuthMiddlewareFunction.userAuthMiddleware(db);
    const requestAuthMiddleware = userAuthMiddlewareFunction.requestAuthMiddleware(db);
    const pageMedia = [{
        name: 'image', maxCount: 2
    }, {
        name: 'banner', maxCount: 3
    }, {
        name: 'video', maxCount: 1
    }];
    router.post('/createAboutSection', userAuthMiddleware, upload.array("aboutImages"), homeFunction.createAboutSection(db));
    router.post('/updateAboutSection', userAuthMiddleware, upload.array("aboutImages"), homeFunction.updateAboutSection(db));
    router.post('/homeAbout', userAuthMiddleware, homeFunction.getHomeAboutHelper(db));

    router.post('/createMovingBanner', userAuthMiddleware, upload.array("backgroundImage"), homeFunction.createMovingBanner(db));
    router.post('/updateMovingBanner', userAuthMiddleware, upload.array("backgroundImage"), homeFunction.updateMovingBanner(db));
    router.post('/movingBanner', userAuthMiddleware, homeFunction.getMovingBanner(db));

    router.post('/createDealingIn', userAuthMiddleware, upload.array("media"), homeFunction.createDealingIn(db));
    router.post('/updateDealingIn', userAuthMiddleware, upload.array("media"), homeFunction.updateMovingBanner(db));
    router.post('/getDealingInList', userAuthMiddleware, homeFunction.getMovingBanner(db));
    router.post('/getDealingInDetails', userAuthMiddleware, homeFunction.getMovingBanner(db));
    router.post('/deleteDealingIn', userAuthMiddleware, homeFunction.getMovingBanner(db));
    router.post('/updateDealingInStatus', userAuthMiddleware, homeFunction.getMovingBanner(db));

    //
    router.post('/createDealingInItem', userAuthMiddleware, upload.fields(pageMedia), homeFunction.createDealingInItem(db));


    // 
    router.post('/createService', userAuthMiddleware, homeFunction.createService(db));
    router.post('/createServiceItem', userAuthMiddleware, upload.fields(pageMedia), homeFunction.createServiceItem(db));


    //Api For Client Side
    router.post('/getHomeAbout', requestAuthMiddleware, homeFunction.getHomeAboutHelper(db));
    router.post('/getMovingBanner', requestAuthMiddleware, homeFunction.getMovingBanner(db));
    router.post('/getDealingIn', requestAuthMiddleware, homeFunction.getDealingInForHome(db));
    router.post('/getDealingInItem', requestAuthMiddleware, homeFunction.getDealingInItemDetails(db));
    router.post('/getService', requestAuthMiddleware, homeFunction.getServiceForHome(db));
    router.post('/getServiceDetails', requestAuthMiddleware, homeFunction.getServiceItemDetails(db));
    //router.post('/applyForJob', userAuthMiddleware, homeFunction.createHomeFunc(db));
    return router;
};