const _ = require('lodash');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const errorResponseHelper = require('../../../Helper/errorResponse');
const CONSTANTSMESSAGE = require('../../../Helper/constantsMessage')
const moduleSchema = Joi.object({
    productId: Joi.string().required(),
    name: Joi.string().required(),
    email:Joi.string().required(),
    phone: Joi.number().required(),
    message: Joi.string().required(),
    isVisit: Joi.boolean().required()
});

function createCallbackRequest(Models) {
    async function create(req, res) {
        try {
            // console.log(req.sessionID)
            // validate data using joi
            let validateData = moduleSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: CONSTANTSMESSAGE.INVALID_DATA };
            }

            // pick data from req.body
         
            let bodyData = _.pick(req.body, ["productId","name","email","phone","message","isVisit"]);
            // searching email or mobile already exists or not
            let findData = await Models.ReqCallbackDB.findOne({ email: bodyData.email });
            if (findData) {
                // if data found check 
                throw { status: false, error: true, message: CONSTANTSMESSAGE.ALREADY_EXIST, duplicateMenuModule: true, statusCode: 401 };
            }

            let saveModule = await new Models.ReqCallbackDB(bodyData).save();
            console.log('saveModule is', saveModule)
            res.send({ status: true, message: CONSTANTSMESSAGE.CREATE_SUCCESS_MESSAGE });
        }
        catch (e) {
            console.log('saveModule err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in saveModule" });
        }
    }
    return create;
}
module.exports = createCallbackRequest;