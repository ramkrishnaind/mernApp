const _ = require('lodash');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const CONSTANTSMESSAGE = require('../../../Helper/constantsMessage')
const errorResponseHelper = require('../../../Helper/errorResponse');


function userRoleList(Models) {
    async function updateRole(req, res) {
        try {
            let userRoleModule = await Models.UserRoleDB.aggregate([{
                $lookup: {
                    from: "users",
                    let: { order_item: "$_id", order_qty: "$createdBy" },
                    pipeline: [
                        { $project: { firstName: 1, _id: 1, lastName:1 } }
                    ],
                    as: "createdByDetail"
                }
            },
            {
                $lookup: {
                    from: "menumodules",
                    let: { menu_id: "$_id", rights: "$rights" },
                    pipeline: [
                        { $project: { _id: 1, name:1 } }
                    ],
                    as: "rightsName"
                }
            }])
            res.send({ status: true, message: "", data: userRoleModule });
        }
        catch (e) {
            console.log('Getting list err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in Getting list" });
        }
    }
    return updateRole;
}

module.exports = userRoleList;