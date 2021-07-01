const _ = require('lodash');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const errorResponseHelper = require('../../../Helper/errorResponse');
const CONSTANTSMESSAGE = require('../../../Helper/constantsMessage')
const moduleSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    desc: Joi.string().required(),
    URL: Joi.string()
});

function createSlider(Models) {
    async function create(req, res) {
        try {
            // console.log(req.sessionID)
            // validate data using joi
            let validateData = moduleSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: CONSTANTSMESSAGE.INVALID_DATA };
            }

            // pick data from req.body
         
            let bodyData = _.pick(req.body, ["id", "name","desc","URL"]);
            if(req.files.length > 0)
                bodyData.image = req.files;
            let setData = {
                name: bodyData.name,
                desc: bodyData.desc,
                URL: bodyData.URL,
                image: bodyData.image
            }
            let updateModule = await Models.SliderDB.findOneAndUpdate({ _id: bodyData.id }, { $set: setData});
            console.log('updateModule is', updateModule)
            res.send({ status: true, message: CONSTANTSMESSAGE.STATUS_UPDATE_SUCCESS });
        }
        catch (e) {
            console.log('saveModule err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in saveModule" });
        }
    }
    return create;
}
module.exports = createSlider;