
const express = require('express');

var router = express.Router();

const signupFunction = require('./Routes/Authentication/signup');
const loginFunction = require('./routes/authentication/login');
const forgotPasswordFunction = require('./routes/authentication/forgotPassword');
const verificationFunction = require('./routes/authentication/verification');
const setNewPasswordFunction = require('./routes/authentication/setNewPassword');
const getAuthTokenFunction = require('./routes/authentication/getAuthToken');
const logoutFunction = require('./routes/authentication/logout');


module.exports = function (conn) {
    // console.log(conn)
    const db = require('../Database/getCollections')(conn.MongoDBConnection);
    // db.UserDB({name: "12", email: "sad"}).save().then(x => console.log(x))
    // db.UserDB.find().then(x => console.log(x))
    router.post('/signup', signupFunction.signUpFunc(db));
    router.post('/login', loginFunction(db));
    router.post('/forgotPassword', forgotPasswordFunction(db));
    router.post('/verification', verificationFunction(db));
    router.post('/setNewPassword', setNewPasswordFunction(db));
    router.get('/getAuthToken', getAuthTokenFunction(db));
    router.get('/logout', logoutFunction(db));
    return router;
};