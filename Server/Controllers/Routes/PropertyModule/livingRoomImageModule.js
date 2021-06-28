const _ = require('lodash');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const errorResponseHelper = require('../../../Helper/errorResponse');
const CONSTANTSMESSAGE = require('../../../Helper/constantsMessage')

function livingRoomImage(Models) {
    async function create(req, res) {
        try {

            const bodyData = {
                'productId':req.body.productId,
                'livingRoom':req.files
            }

            let findDataname = await Models.PImageDB.findOne({ productId:req.body.productId });
            if (findDataname) {
                let updateModule = await Models.PImageDB.findOneAndUpdate({ productId:bodyData.productId }, { $set: bodyData});
                res.send({ status: true, message: CONSTANTSMESSAGE.DATA_UPDATE_SUCCESS });
            }
            else
            {
                let saveModule = await new Models.PImageDB(bodyData).save();
                res.send({ status: true, message: CONSTANTSMESSAGE.CREATE_SUCCESS_MESSAGE });
            }
        }
        catch (e) {
            console.log('saveModule err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in saveModule" });
        }
    }
    return create;
}
module.exports = livingRoomImage;