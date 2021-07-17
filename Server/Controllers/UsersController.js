
const express = require('express');

var router = express.Router();

const signupFunction = require('./Routes/Authentication/signup');
const userFunction = require('./Routes/UsersModule/UserManagement');
const userAuthMiddlewareFunction = require('../Middleware/userAuth');

let {forgotPasswordFunction, loginFunction, verificationFunction, setNewPasswordFunction,
    getAuthTokenFunction, logoutFunction} = require('./Routes')

module.exports = function (conn) {
    // console.log(conn)
    const db = require('../Database/getCollections')(conn.MongoDBConnection);
    const userAuthMiddleware = userAuthMiddlewareFunction.userAuthMiddleware(db);
    // db.UserDB({name: "12", email: "sad"}).save().then(x => console.log(x))
    // db.UserDB.find().then(x => console.log(x))
    router.post('/signup', signupFunction.signUpFunc(db));
    router.post('/login', loginFunction(db));
    router.post('/forgotPassword', forgotPasswordFunction(db));
    router.post('/verification', verificationFunction(db));
    router.post('/setNewPassword', setNewPasswordFunction(db));
    router.get('/getAuthToken', getAuthTokenFunction(db));
    router.get('/logout', logoutFunction(db));

    router.post('/createUser', userAuthMiddleware, userFunction.createUserFunc(db));
    router.post('/updateUser', userAuthMiddleware, userFunction.createUserFunc(db));
    router.post('/getUser', userAuthMiddleware, userFunction.createUserFunc(db));
    router.post('/getAllUser', userAuthMiddleware, userFunction.createUserFunc(db));
    router.post('/deleteUser', userAuthMiddleware, userFunction.createUserFunc(db));
    router.post('/updateUserStatus', userAuthMiddleware, userFunction.createUserFunc(db));
    return router;
};