const _ = require('lodash');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)
const CONSTANTSMESSAGE = require('../../../Helper/constantsMessage')

const errorResponseHelper = require('../../../Helper/errorResponse');

const moduleSchema = Joi.object({
    type: Joi.string().required(),
    keyword: Joi.string().empty(""),
    pType: Joi.string().empty("")
});

function getSearchPropertyList(Models) {
    async function PropertyList(req, res) {
        try {
            let validateData = moduleSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: CONSTANTSMESSAGE.INVALID_DATA };
            }

            // pick data from req.body

            let bodyData = _.pick(req.body, ["type", "keyword", "pType"]);
            let Obj = [{ for: bodyData.type }]
            if (bodyData.pType != "")
                Obj.push({ pType: bodyData.pType })
            if (bodyData.keyword != "")
                Obj.push({
                    $or: [{ 'nameOfProject': { '$regex': bodyData.keyword, '$options': 'i' } },
                    { 'pCity': { '$regex': bodyData.keyword, '$options': 'i' } },
                    { 'locality': { '$regex': bodyData.keyword, '$options': 'i' } }]
                })

            let findData = await Models.PropertyDB.aggregate([
                {
                    $match: { $and: Obj }
                },
                {
                    $lookup:
                    {
                        from: 'pfeatures',
                        localField: '_id',
                        foreignField: 'productId',
                        as: 'features'
                    }
                },
                {
                    $lookup:
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
                list: findData
            }

            res.send({ status: true, message: "", data: obj });
        }
        catch (e) {
            console.log('Getting list err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in Getting list" });
        }
    }
    return PropertyList;
}

module.exports = getSearchPropertyList;