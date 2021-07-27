
const _ = require('lodash');
const Joi = require('joi');
const path = require('path');
const bcrypt = require('bcryptjs');
const createTokenFunction = require('../../../Helper/createUniqueToken');
const errorResponseHelper = require('../../../Helper/errorResponse');
const CONSTANTSMESSAGE = require('../../../Helper/constantsMessage')
const { nanoid } = require('nanoid');

const createCareerSchema = Joi.object({
    degination: Joi.string().trim().required(),
    department: Joi.string().trim(),
    vacancy: Joi.number().required(),
    experiance: Joi.string().required(),
    location: Joi.string().required(),
    desctiption: Joi.string().required(),
    metaTitle: Joi.string(),
    metaKeywords: Joi.string(),
    metaDescription: Joi.string()
});
const updateCareerSchema = Joi.object({
    _id: Joi.objectId().trim().required(),
    degination: Joi.string().trim().required(),
    department: Joi.string().trim(),
    vacancy: Joi.number().required(),
    experiance: Joi.string().required(),
    location: Joi.string().required(),
    desctiption: Joi.string().required(),
    metaTitle: Joi.string(),
    metaKeywords: Joi.string(),
    metaDescription: Joi.string()
});
const getCareerSchema = Joi.object({
    _id: Joi.string().trim().required()
});
const updateCareerStatusSchema = Joi.object({
    _id: Joi.string().trim().required(),
    active: Joi.boolean().required(),
});

function createCareerHelper(Models) {
    async function createCareer(req, res) {
        try {
            
            let validateData = createCareerSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }

            // pick data from req.body
            let careerFormData = _.pick(req.body, ['degination', 'department', 'vacancy', 'experiance', 'location', 'desctiption', 'metaTitle', 'metaKeywords', 'metaDescription']);

            let saveCareer = await new Models.CareerDB(careerFormData).save();
            saveCareer = saveCareer.toObject();
            
            res.send({ status: true, message: "New Job post created successfully"});
        }
        catch (e) {
            console.log('createCareerHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in Creating job post" });
        }
    }
    return createCareer;
}
/////////////update Career post/////////////
function updateCareerHelper(Models) {
    async function update(req, res) {
        try {
            
            let validateData = updateCareerSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: CONSTANTSMESSAGE.INVALID_DATA };
            }

            // pick data from req.body
         
            let bodyData = _.pick(req.body, ["_id",'degination', 'department', 'vacancy', 'experiance', 'location', 'desctiption', 'metaTitle', 'metaKeywords', 'metaDescription']);
            console.log('bodyData is', bodyData)
            let setData = {
                degination: bodyData.degination,
                department: bodyData.department,
                vacancy: bodyData.vacancy,
                experiance: bodyData.experiance,
                location: bodyData.location,
                desctiption: bodyData.desctiption,
                metaTitle: bodyData.metaTitle,
                metaKeywords: bodyData.metaKeywords,
                metaDescription: bodyData.metaDescription
            }
            
            let updateModule = await Models.CareerDB.findOneAndUpdate({ _id: bodyData._id }, { $set: setData});
            console.log('updateModule is', updateModule)
            res.send({ status: true, message: 'Job Post updated Successfully' });
        }
        catch (e) {
            console.log('saveModule err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in updating Career post" });
        }
    }
    return update;
}

function getAllCareerHelper(Models) {
    async function getAllCareer(req, res) {
        try {
            // Getting all Careers from Database
            let findData = await Models.CareerDB.find();
            if (findData.length) {
                // if data found check verified or not
                res.send({ status: true, message: "Careers List", data: findData });
            }else{
                res.send({ status: true, message: "No Data found for Careers"});
            }

            
        }
        catch (e) {
            console.log('createCareerHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in SignUp" });
        }
    }
    return getAllCareer;
}
function getCareerHelper(Models) {
    async function getCareer(req, res) {
        try {
            let validateData = getCareerSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }

            
            // Getting Career from Database
            let findData = await Models.CareerDB.findOne({_id:req.body._id});
            console.log('findData is',findData)
            if (findData) {
                // if data found check verified or not
                res.send({ status: true, message: "Career Data", data: findData });
            }else{
                res.send({ status: true, message: "Career Data not found"});
            }

            
        }
        catch (e) {
            console.log('createCareerHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in SignUp" });
        }
    }
    return getCareer;
}
function updateCareerStatusHelper(Models) {
    async function updateCareerStatus(req, res) {
        try {
            let validateData = updateCareerStatusSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }

            
            let bodyData = _.pick(req.body, ["active","_id"]);
            let setData = {
                active: bodyData.active,
            }
            let updateModule = await Models.CareerDB.findOneAndUpdate({ _id: bodyData._id }, { $set: setData});
            console.log('updateModule is', updateModule)
            res.send({ status: true, message: CONSTANTSMESSAGE.STATUS_UPDATE_SUCCESS });

            
        }
        catch (e) {
            console.log('createCareerHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in SignUp" });
        }
    }
    return updateCareerStatus;
}
function deleteCareerHelper(Models) {
    async function deleteCareer(req, res) {
        try {
            let validateData = getCareerSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }

            
            // Getting Career from Database
            let deleteData = await Models.CareerDB.remove({_id:req.body._id});
            console.log('deleteData is',deleteData)
            if (deleteData) {
                // if data found check verified or not
                res.send({ status: true, message: "Career Deleted Successfully"});
            }else{
                res.send({ status: true, message: "Career not found"});
            }

            
        }
        catch (e) {
            console.log('createCareerHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in SignUp" });
        }
    }
    return deleteCareer;
}

module.exports = {
    createCareerFunc: createCareerHelper,
    updateCareerFunc: updateCareerHelper,
    getAllCareerFunc: getAllCareerHelper,
    getCareerFunc: getCareerHelper,
    updateCareerStatusFun: updateCareerStatusHelper,
    deleteCareerFunc: deleteCareerHelper,
    getCareerDetailFunc: getCareerHelper
};