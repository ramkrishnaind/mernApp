
const _ = require('lodash');
const Joi = require('joi');
const path = require('path');
const bcrypt = require('bcryptjs');
const createTokenFunction = require('../../../Helper/createUniqueToken');
const prepareTemplateAndMailHelper = require('../../../Helper/prepareTemplateAndMail');
const errorResponseHelper = require('../../../Helper/errorResponse');
const CONSTANTSMESSAGE = require('../../../Helper/constantsMessage')
const { nanoid } = require('nanoid');

const createUserSchema = Joi.object({
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim(),
    email: Joi.string().email().trim().required(),
    mobile: Joi.number().required(),
    countryCode: Joi.number(),
    userRole: Joi.string().required()
});
const getUserSchema = Joi.object({
    _id: Joi.string().trim().required()
});
const updateUserStatusSchema = Joi.object({
    _id: Joi.string().trim().required(),
    status: Joi.boolean().required(),
});

async function prepareTemplateSendMail(data) {
    try {
        let filePath = path.join(__dirname, '/../../../Template/userAuthenticationWithPassword.html');
        let replacements = {
            name: `${_.capitalize(data.firstName)} ${data.lastName}`,
            username: data.email,
            password: data.passwordText,
            authenticationLink: `${process.env.SERVER_URL || process.env.APP_URL}/verification?token=${data.verificationToken}`
        }
        let info = await prepareTemplateAndMailHelper({ filePath, replacements, to: data.email, subject: "Authentication" });
        return info;
    }
    catch (e) {
        console.log('error', e);
    }
}
// prepareTemplateSendMail({ firstName: "tek", lastName: "thapa", email: "tekbahadur1996@gmail.com", verificationToken: "THIS_IS_TOKEN"}).then(x => {
//     console.log('then',x);
// });

function createUserHelper(Models) {
    async function createUser(req, res) {
        try {
            // console.log(req.sessionID)
            // validate data using joi
            let validateData = createUserSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }

            // pick data from req.body
            let userData = _.pick(req.body, ['firstName', 'lastName', 'email', 'mobile', 'countryCode', 'userRole']);

            // setting email to lowercase
            userData.email = String(userData.email).trim().toLowerCase();

            // searching email or mobile already exists or not
            let findData = await Models.UserDB.findOne({ $or: [{ email: userData.email }, { mobile: userData.mobile }] });
            if (findData) {
                // if data found check verified or not
                if (!findData.verified) {
                    // user is not verified then send verification email again
                    prepareTemplateSendMail(findData);
                    throw { status: false, error: true, message: "Please verify your account", notVerified: true, mailSent: true, statusCode: 401 };
                }
                // if not active, ie disabled by admin
                if (!findData.active) {
                    throw { status: false, error: true, message: "Your account has been disabled. Please contact admin", adminDisable: true, statusCode: 401 };
                }

                throw { status: false, error: true, message: "Account already exists", duplicateAccount: true, statusCode: 401 };
            }

            // creating unique token
            let hash = await createTokenFunction(userData.email);
            userData.verificationToken = hash;
            let passwordText = nanoid(8);
            userData.password = bcrypt.hashSync(passwordText, 10);
            if (req.files.length > 0)
                userData.image = req.files;

            let saveUser = await new Models.UserDB(userData).save();
            saveUser = saveUser.toObject();
            saveUser.passwordText = passwordText;
            // now send mail 
            prepareTemplateSendMail(saveUser);

            res.send({ status: true, message: "Verification mail has been sent to your registered email", mailSent: true });
        }
        catch (e) {
            console.log('createUserHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in SignUp" });
        }
    }
    return createUser;
}
function getAllUserHelper(Models) {
    async function getAllUser(req, res) {
        try {
            // Getting all Users from Database
            let findData = await Models.UserDB.find();
            if (findData.length) {
                // if data found check verified or not
                res.send({ status: true, message: "Users List", data: findData });
            } else {
                res.send({ status: true, message: "No Data found for Users" });
            }


        }
        catch (e) {
            console.log('createUserHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in SignUp" });
        }
    }
    return getAllUser;
}
function getUserHelper(Models) {
    async function getUser(req, res) {
        try {
            let validateData = getUserSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }


            // Getting User from Database
            let findData = await Models.UserDB.findOne({ _id: req.body._id });
            console.log('findData is', findData)
            if (findData) {
                // if data found check verified or not
                res.send({ status: true, message: "User Data", data: findData });
            } else {
                res.send({ status: true, message: "User Data not found" });
            }


        }
        catch (e) {
            console.log('createUserHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in SignUp" });
        }
    }
    return getUser;
}
function updateUserStatusHelper(Models) {
    async function updateUserStatus(req, res) {
        try {
            let validateData = updateUserStatusSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }


            let bodyData = _.pick(req.body, ["status", "_id"]);
            let setData = {
                status: bodyData.status,
            }
            let updateModule = await Models.UserDB.findOneAndUpdate({ _id: bodyData._id }, { $set: setData });
            console.log('updateModule is', updateModule)
            res.send({ status: true, message: CONSTANTSMESSAGE.STATUS_UPDATE_SUCCESS });


        }
        catch (e) {
            console.log('createUserHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in SignUp" });
        }
    }
    return updateUserStatus;
}
function deleteUserHelper(Models) {
    async function deleteUser(req, res) {
        try {
            let validateData = getUserSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }


            // Getting User from Database
            let deleteData = await Models.UserDB.remove({ _id: req.body._id });
            console.log('deleteData is', deleteData)
            if (deleteData) {
                // if data found check verified or not
                res.send({ status: true, message: "User Deleted Successfully" });
            } else {
                res.send({ status: true, message: "User not found" });
            }


        }
        catch (e) {
            console.log('createUserHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in SignUp" });
        }
    }
    return deleteUser;
}
module.exports = {
    prepareTemplateSendMail,
    createUserFunc: createUserHelper,
    getAllUserFunc: getAllUserHelper,
    getUserFunc: getUserHelper,
    updateUserStatusFun: updateUserStatusHelper,
    deleteUserFunc: deleteUserHelper
};