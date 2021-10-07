const _ = require('lodash');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const errorResponseHelper = require('../../../Helper/errorResponse');
const CONSTANTSMESSAGE = require('../../../Helper/constantsMessage');
const SendMessage = require('../../../Helper/sendSms');
const moduleSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.number().required(),
    time: Joi.string().required()
});

function createSiteVisitRequest(Models) {
    async function create(req, res) {
        try {
            // console.log(req.sessionID)
            // validate data using joi
            let validateData = moduleSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: CONSTANTSMESSAGE.INVALID_DATA };
            }

            // pick data from req.body

            let bodyData = _.pick(req.body, ["name", "email", "phone", "time"]);
            // searching email or mobile already exists or not
            // let findData = await Models.SiteVisitDB.findOne({ email: bodyData.email });
            // if (findData) {
            //     // if data found check 
            //     throw { status: false, error: true, message: CONSTANTSMESSAGE.ALREADY_EXIST, duplicateModule: true, statusCode: 401 };
            // }

            let saveModule = await new Models.SiteVisitDB(bodyData).save();
            console.log('saveModule is', saveModule)
            if (saveModule) {
                let mobile = 7014319191;
                let message = 'Hello, Vishal Properties \n';
                message += 'A New Request For Site Visit \n';
                message += 'Name : ' + bodyData.name + '\n';
                message += 'Mobile : ' + bodyData.phone + '\n';
                message += 'Email : ' + bodyData.email + '\n';
                message += 'Time : ' + bodyData.time + '\n';
                message += 'Thanks\n';
                message += 'Message By:- Dzone india.';
                //let message = 'Hello, Vishal Propertie&nbsp; A New Request For Site Visit&nbsp;Name : ' + bodyData.name + '&nbsp;Mobile : ' + bodyData.phone + '&nbsp;Email : ' + bodyData.email + '&nbsp;Time ' + bodyData.time + 'Message By:- Dzone india.&nbsp;Thanks';
                console.log('message is', message);
                SendMessage({
                    mobile,
                    message
                });
            }
            res.send({ status: true, message: CONSTANTSMESSAGE.CREATE_SUCCESS_MESSAGE });
        }
        catch (e) {
            console.log('saveModule err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in saveModule" });
        }
    }
    return create;
}
module.exports = createSiteVisitRequest;