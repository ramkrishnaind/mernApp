const _ = require('lodash');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const errorResponseHelper = require('../../../Helper/errorResponse');
const CONSTANTSMESSAGE = require('../../../Helper/constantsMessage')
const moduleSchema = Joi.object({
    name: Joi.string().required(),
    companyName: Joi.string().required(),
    role: Joi.string().required(),
    mobile: Joi.number().required(),
    email: Joi.string(),
    location: Joi.string().required(),
    city: Joi.string().required(),
    supplierOf: Joi.string().required(),
});

function createSupplier(Models) {
    async function create(req, res) {
        try {

            let validateData = moduleSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: CONSTANTSMESSAGE.INVALID_DATA };
            }

            // pick data from req.body
            let bodyData = _.pick(req.body, ["name", "companyName", "role", "mobile", "email", "location", "city", "supplierOf"]);

            let saveModule = await new Models.SupplierDB(bodyData).save();
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
module.exports = createSupplier;