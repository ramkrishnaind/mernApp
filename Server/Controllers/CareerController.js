
const express = require('express');

var router = express.Router();

const careerFunction = require('./Routes/CareersModule/CareerManagement');
const userAuthMiddlewareFunction = require('../Middleware/userAuth');


module.exports = function (conn) {
    // console.log(conn)
    const db = require('../Database/getCollections')(conn.MongoDBConnection);
    const userAuthMiddleware = userAuthMiddlewareFunction.userAuthMiddleware(db);
    const requestAuthMiddleware = userAuthMiddlewareFunction.requestAuthMiddleware(db);

    router.post('/createCareer', userAuthMiddleware, careerFunction.createCareerFunc(db));
    router.post('/updateCareer', userAuthMiddleware, careerFunction.updateCareerFunc(db));
    router.post('/getCareer', requestAuthMiddleware, careerFunction.getCareerFunc(db));
    router.post('/getAllCareer', requestAuthMiddleware, careerFunction.getAllCareerFunc(db));
    router.post('/deleteCareer', userAuthMiddleware, careerFunction.deleteCareerFunc(db));
    router.post('/updateCareerStatus', userAuthMiddleware, careerFunction.updateCareerStatusFun(db));
    return router;
};        