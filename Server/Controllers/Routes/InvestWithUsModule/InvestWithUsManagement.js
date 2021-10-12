
const _ = require('lodash');
const Joi = require('joi');
const path = require('path');
const bcrypt = require('bcryptjs');
const createTokenFunction = require('../../../Helper/createUniqueToken');
const errorResponseHelper = require('../../../Helper/errorResponse');
const CONSTANTSMESSAGE = require('../../../Helper/constantsMessage')
const { nanoid } = require('nanoid');

const createInvestWithUsSchema = Joi.object({
    header: Joi.string().trim().required(),
    title: Joi.string().trim().required(),
    shortDescription: Joi.string().required(),
    description: Joi.string().required(),
    howToInvest: Joi.string().required(),
    metaTitle: Joi.string(),
    metaKeywords: Joi.string(),
    metaDescription: Joi.string()
});
const updateInvestWithUsSchema = Joi.object({
    _id: Joi.objectId().trim().required(),
    header: Joi.string().trim().required(),
    title: Joi.string().trim().required(),
    shortDescription: Joi.string().required(),
    description: Joi.string().required(),
    howToInvest: Joi.string().required(),
    metaTitle: Joi.string(),
    metaKeywords: Joi.string(),
    metaDescription: Joi.string()
});
const getInvestWithUsSchema = Joi.object({
    _id: Joi.string().trim().required()
});
const updateInvestWithUsStatusSchema = Joi.object({
    _id: Joi.string().trim().required(),
    active: Joi.boolean().required(),
});

function createInvestWithUsHelper(Models) {
    async function createInvestWithUs(req, res) {
        try {

            let validateData = createInvestWithUsSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }

            // pick data from req.body
            let InvestWithUsFormData = _.pick(req.body, ['header', 'title', 'shortDescription', 'description', 'howToInvest', 'metaTitle', 'metaKeywords', 'metaDescription']);
            let dataExist = await Models.InvestWithUsDB.findOne({ active: true });
            if (dataExist) {
                // if data found check verified or not
                res.send({ status: false, message: "Invest With Us Data Already Exist. Please Edit Existing.", data: dataExist });
            } else {
                console.log('InvestWithUsFormData.howToInvest is', InvestWithUsFormData.howToInvest)
                console.log('req.files is', req.files)
                InvestWithUsFormData.howToInvest = JSON.parse(InvestWithUsFormData.howToInvest);
                InvestWithUsFormData.media = req.files;
                console.log('InvestWithUsFormData is', InvestWithUsFormData)
                let saveInvestWithUs = await new Models.InvestWithUsDB(InvestWithUsFormData).save();
                console.log('saveInvestWithUs is ', saveInvestWithUs)
                saveInvestWithUs = saveInvestWithUs.toObject();

                res.send({ status: true, message: "New InvestWithUs created successfully" });
            }
        }
        catch (e) {
            console.log('createInvestWithUsHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in Creating InvestWithUs" });
        }
    }
    return createInvestWithUs;
}
/////////////update InvestWithUs post/////////////
function updateInvestWithUsHelper(Models) {
    async function update(req, res) {
        try {

            let validateData = updateInvestWithUsSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: CONSTANTSMESSAGE.INVALID_DATA };
            }

            // pick data from req.body

            let bodyData = _.pick(req.body, ['header', 'title', 'shortDescription', 'description', 'howToInvest', 'metaTitle', 'metaKeywords', 'metaDescription']);


            let setData = {
                title: bodyData.title,
                description: bodyData.description,
                metaTitle: bodyData.metaTitle,
                metaKeywords: bodyData.metaKeywords,
                metaDescription: bodyData.metaDescription
            }
            if (req.files) {
                let InvestWithUsImages = req.files;
                setData.image = InvestWithUsImages.image;
                setData.bannerImage = InvestWithUsImages.bannerImage;
            }

            let updateModule = await Models.InvestWithUsDB.findOneAndUpdate({ _id: bodyData._id }, { $set: setData });
            console.log('updateModule is', updateModule)
            res.send({ status: true, message: 'InvestWithUs updated Successfully' });
        }
        catch (e) {
            console.log('saveModule err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in updating InvestWithUs post" });
        }
    }
    return update;
}

function getAllInvestWithUsHelper(Models) {
    async function getAllInvestWithUs(req, res) {
        try {
            // Getting all InvestWithUss from Database
            let findData = await Models.InvestWithUsDB.find();
            if (findData.length) {
                // if data found check verified or not
                res.send({ status: true, message: "InvestWithUss List", data: findData });
            } else {
                res.send({ status: true, message: "No Data found for InvestWithUss" });
            }


        }
        catch (e) {
            console.log('createInvestWithUsHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in SignUp" });
        }
    }
    return getAllInvestWithUs;
}
function getActiveInvestWithUsFunc(Models) {
    async function getActiveInvestWithUs(req, res) {
        try {
            // Getting all InvestWithUss from Database
            let findData = await Models.InvestWithUsDB.findOne({ active: true });
            console.log('No Data found for InvestWithUss for client', findData)
            if (findData) {
                // if data found check verified or not
                res.send({ status: true, message: "InvestWithUss For Client", data: findData });
            } else {
                res.send({ status: true, message: "No Data found for InvestWithUss for client" });
            }


        }
        catch (e) {
            console.log('createInvestWithUsHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in SignUp" });
        }
    }
    return getActiveInvestWithUs;
}
function getInvestWithUsHelper(Models) {
    async function getInvestWithUs(req, res) {
        try {
            let validateData = getInvestWithUsSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }


            // Getting InvestWithUs from Database
            let findData = await Models.InvestWithUsDB.findOne({ _id: req.body._id });
            console.log('findData is', findData)
            if (findData) {
                // if data found check verified or not
                res.send({ status: true, message: "InvestWithUs Data", data: findData });
            } else {
                res.send({ status: true, message: "InvestWithUs Data not found" });
            }


        }
        catch (e) {
            console.log('createInvestWithUsHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in SignUp" });
        }
    }
    return getInvestWithUs;
}
function updateInvestWithUsStatusHelper(Models) {
    async function updateInvestWithUsStatus(req, res) {
        try {
            let validateData = updateInvestWithUsStatusSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }


            let bodyData = _.pick(req.body, ["active", "_id"]);
            let setData = {
                active: bodyData.active,
            }
            let updateModule = await Models.InvestWithUsDB.findOneAndUpdate({ _id: bodyData._id }, { $set: setData });
            console.log('updateModule is', updateModule)
            res.send({ status: true, message: CONSTANTSMESSAGE.STATUS_UPDATE_SUCCESS });


        }
        catch (e) {
            console.log('createInvestWithUsHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in SignUp" });
        }
    }
    return updateInvestWithUsStatus;
}
function deleteInvestWithUsHelper(Models) {
    async function deleteInvestWithUs(req, res) {
        try {
            let validateData = getInvestWithUsSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }


            // Getting InvestWithUs from Database
            let deleteData = await Models.InvestWithUsDB.remove({ _id: req.body._id });
            console.log('deleteData is', deleteData)
            if (deleteData) {
                // if data found check verified or not
                res.send({ status: true, message: "InvestWithUs Deleted Successfully" });
            } else {
                res.send({ status: true, message: "InvestWithUs not found" });
            }


        }
        catch (e) {
            console.log('createInvestWithUsHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in SignUp" });
        }
    }
    return deleteInvestWithUs;
}

module.exports = {
    createInvestWithUsFunc: createInvestWithUsHelper,
    updateInvestWithUsFunc: updateInvestWithUsHelper,
    getAllInvestWithUsFunc: getAllInvestWithUsHelper,
    updateInvestWithUsStatusFun: updateInvestWithUsStatusHelper,
    deleteInvestWithUsFunc: deleteInvestWithUsHelper,
    getInvestWithUsDetailFunc: getInvestWithUsHelper,
    getActiveInvestWithUsFunc
};