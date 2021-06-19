const _ = require('lodash');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const errorResponseHelper = require('../../../Helper/errorResponse');


function getMenuList(Models)
{
    async function menuList(req, res) {
        try {
            let findData = await Models.MenuModuleDB.find({});            
            res.send({ status: true, message: "", data:findData });
        }
        catch (e) {
            console.log('Getting menu list err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in Getting Menu list" });
        }
    }
    return menuList;
}

module.exports = getMenuList;