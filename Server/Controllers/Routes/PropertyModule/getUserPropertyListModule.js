const _ = require('lodash');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)
const CONSTANTSMESSAGE = require('../../../Helper/constantsMessage')

const errorResponseHelper = require('../../../Helper/errorResponse');

const moduleSchema = Joi.object({
    userId: Joi.string().required()
});

function getUserIdPropertyList(Models)
{
    async function PropertyList(req, res) {
        try {
            let validateData = moduleSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: CONSTANTSMESSAGE.INVALID_DATA };
            }

            // pick data from req.body
         
            let bodyData = _.pick(req.body, ["userId"]);
            let findData = await Models.PropertyDB.aggregate([
                {
                    $match: {
                      userId: bodyData.userId
                    }
                },
                { $lookup:
                   {
                     from: 'pfeatures',
                     localField: '_id',
                     foreignField: 'productId',
                     as: 'features'
                   }
                 },
                  { $lookup:
                   {
                     from: 'pimages',
                     localField: '_id',
                     foreignField: 'productId',
                     as: 'images'
                   }
                 }
                ]).sort({ updated: -1 });            
            let obj = {
                total: findData.length,
                list:findData
            }

            res.send({ status: true, message: "", data:obj });
        }
        catch (e) {
            console.log('Getting list err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in Getting list" });
        }
    }
    return PropertyList;
}

module.exports = getUserIdPropertyList;