const _ = require('lodash');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const CONSTANTSMESSAGE = require('../../../Helper/constantsMessage')
const errorResponseHelper = require('../../../Helper/errorResponse');


function userRoleList(Models) {
    async function updateRole(req, res) {
        try {
            
            let userRoleModule = await Models.UserRoleDB.find({}).sort({ updated: -1 }).populate("MenuModule").lean();
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