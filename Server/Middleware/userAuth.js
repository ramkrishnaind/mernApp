
// auth middleware, checks token, expire token if token is created before 00:00 UTC,
// sets user's data in req.locals.user
const moment = require('moment');
var jwt = require('jsonwebtoken');

function userAuthMiddleware(Models) {
    async function userAuthMiddlewareFunction(req, res, next) {
        try {
            let token = req.query.token;

            if (!token) {
                throw { status: false, error: true, auth: false, message: "Token is required" };
            }
            let userToken = await Models.AuthTokenDB.findOne({ token }).populate('userId').lean();
            if (!userToken) {
                throw { status: false, error: true, auth: false, message: "Invalid token" };
            }

            if (userToken.created_at && new Date(userToken.created_at) < new Date(moment.utc().startOf('day'))) {
                // token is old delete it
                let deleteToken = await Models.AuthTokenDB.deleteOne({ token });
                throw { status: false, error: true, auth: false, message: "Token exipred", exipred: true };
            }

            req.locals = {
                user: userToken
            };
            // console.log('locals', req.locals);
            next();
        }
        catch (e) {
            console.log('userAuthMiddleware err', e);
            let err = { status: false, error: true, message: "Error in Auth", auth: false };
            if (e.error) err = e;

            return res.send(err);
        }
    }
    return userAuthMiddlewareFunction;
}
function requestAuthMiddleware() {
    async function requestAuth(req, res, next) {
        try {
            let tokenArr = req.headers.authorization.split(' ');
            let token = tokenArr[1];

            var decoded = jwt.verify(token, process.env.SESSION_SECRET);

            if (decoded == process.env.NODE_ENV) {
                next();
            } else {
                throw { status: false, error: true, auth: false, message: "Invalid token" };
            }
        } catch (error) {
            console.log('Error is', error)
        }
    }
    return requestAuth;
}

module.exports = { userAuthMiddleware, requestAuthMiddleware };