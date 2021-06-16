const _ = require('lodash');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const menuModuleSchema = Joi.object({
    parentID: Joi.objectId().allow(null),
    topParentID: Joi.objectId().allow(null),
    name: Joi.string().required(),
    icon: Joi.string().required(),
    order: Joi.Number().required(),
    level: Joi.Number().required(),
    endPoint: Joi.string().trim().required(),
    status: Joi.boolean().required(),
    description: Joi.string(),
    createdBy: Joi.objectId().required()
});

function createMenu(Models) {
    async function create(req, res) {
        try {
            // console.log(req.sessionID)
            // validate data using joi
            let validateData = menuModuleSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }

            // pick data from req.body
            let bodyData = _.pick(req.body, ['parentID', 'topParentID', 'name', 'icon', 'order', 'level', 'endPoint', 'status', 'createdBy']);

            // searching email or mobile already exists or not
            let findData = await Models.MenuModuleDB.findOne({ name: bodyData.name });
            if (findData) {
                // if data found check 
                throw { status: false, error: true, message: "Menu already exists", duplicateMenuModule: true, statusCode: 401 };
            }

            let saveMenuModule = await new Models.MenuModuleDB(bodyData).save();

            res.send({ status: true, message: "Menu Module Created.", mailSent: true });
        }
        catch (e) {
            console.log('saveMenuModule err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in saveMenuModule" });
        }
    }
    return create;
}

module.exports = {
    createMenuModule: createMenu
};