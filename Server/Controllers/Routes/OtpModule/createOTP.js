const _ = require('lodash');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const otpGenerator = require('otp-generator');
const SendMessage = require('../../../Helper/sendSms');
const errorResponseHelper = require('../../../Helper/errorResponse');
const CONSTANTSMESSAGE = require('../../../Helper/constantsMessage')
const moduleSchema = Joi.object({
    mobile: Joi.number().required()
});

function createOTP(Models) {
    async function create(req, res) {
        try {

            let validateData = moduleSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: CONSTANTSMESSAGE.INVALID_DATA };
            }

            // pick data from req.body
            let bodyData = _.pick(req.body, ['mobile']);
            let OTP = otpGenerator.generate(6, { alphabets: false, upperCase: false, specialChars: false });
            let ExpireAllOTP = await Models.OtpDB.updateMany({ mobile: bodyData.mobile },
                { $set: { "isExpired": true } });
            let dataToSave = {
                mobile: bodyData.mobile,
                otp: OTP
            }
            let saveModule = await new Models.OtpDB(dataToSave).save();
            if (saveModule) {
                let message = 'Hello, \n';
                message += 'OTP for Vishal Construction Company is : ' + OTP;
                message += 'Thanks\n';
                console.log('message is', message);
                SendMessage({
                    mobile: bodyData.mobile,
                    message
                });
            }
            console.log('saveModule is', saveModule)
            res.send({ status: true, message: CONSTANTSMESSAGE.CREATE_SUCCESS_MESSAGE });
        }
        catch (e) {
            console.log('OTP err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in Sending OTP" });
        }
    }
    return create;
}
module.exports = createOTP;