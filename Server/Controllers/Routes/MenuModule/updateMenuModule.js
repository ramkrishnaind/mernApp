const _ = require('lodash');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const errorResponseHelper = require('../../../Helper/errorResponse');
const CONSTANTSMESSAGE = require('../../../Helper/constantsMessage')
const menuModuleSchema = Joi.object({
    _id: Joi.objectId(),
    parentID: Joi.objectId().allow(null),
    topParentID: Joi.objectId().allow(null),
    name: Joi.string().required(),
    icon: Joi.string().required(),
    endPoint: Joi.string().trim(),
    status: Joi.boolean().required(),
    description: Joi.string().required(),
    updatedBy: Joi.objectId().required()
});

function updateMenu(Models) {
    async function update(req, res) {
        try {
            // console.log(req.sessionID)
            // validate data using joi
            let validateData = menuModuleSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: CONSTANTSMESSAGE.INVALID_DATA };
            }

            // pick data from req.body
            let topMenuCount = await Models.MenuModuleDB.countDocuments({ topParentID: null }).lean();
            let setData = {
                password: hash
            }

            let bodyData = _.pick(req.body, ['_id', 'parentID', 'topParentID', 'name', 'icon', 'order', 'endPoint', 'description', 'status', 'updatedBy']);
            let checkOrderExist = await Models.MenuModuleDB.findOneAndUpdate({ $and: [{ _id: !bodyData._id }, { order: bodyData.order }] }, { $set: { order: topMenuCount + 1 } }).lean;
            if (bodyData.topParentID && bodyData.parentID) {
                bodyData.level = 2;
                bodyData.order = 0;
            } else if (bodyData.topParentID == null && bodyData.parentID) {
                bodyData.level = 1;
                bodyData.order = 0;
            } else {
                bodyData.level = 0;
                bodyData.order = topMenuCount + 1;
            }

            // searching email or mobile already exists or not
            let findData = await Models.MenuModuleDB.findOne({ name: bodyData.name });
            if (findData) {
                // if data found check 
                throw { status: false, error: true, message: CONSTANTSMESSAGE.ALREADY_EXIST, duplicateMenuModule: true, statusCode: 401 };
            }

            let updateMenuModule = await new Models.findOneAndUpdate({ _id: bodyData._id }, { $set: bodyData });
            console.log('updateMenuModule is', updateMenuModule)
            res.send({ status: true, message: CONSTANTSMESSAGE.UPDATE_SUCCESS_MESSAGE });
        }
        catch (e) {
            console.log('updateMenuModule err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in updateMenuModule" });
        }
    }
    return update;
}
module.exports = updateMenu;