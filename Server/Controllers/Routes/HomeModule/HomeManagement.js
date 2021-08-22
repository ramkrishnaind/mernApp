
const _ = require('lodash');
const Joi = require('joi');
const path = require('path');
const bcrypt = require('bcryptjs');
const createTokenFunction = require('../../../Helper/createUniqueToken');
const errorResponseHelper = require('../../../Helper/errorResponse');
const CONSTANTSMESSAGE = require('../../../Helper/constantsMessage')
const { nanoid } = require('nanoid');
/////////// Create Schema ////////////////

const createHomeAboutSchema = Joi.object({
    title: Joi.string().trim().required(),
    header: Joi.string().trim().required(),
    description: Joi.string().required(),
    metaTitle: Joi.string(),
    metaKeywords: Joi.string(),
    metaDescription: Joi.string()
});

const createHomeMovingBannerSchema = Joi.object({
    years: Joi.number().required(),
    projects: Joi.number().required(),
    clients: Joi.number().required(),
    shortDescription: Joi.string()
});

/////////// Update Schema ////////////////

const updateHomeAboutSchema = Joi.object({
    _id: Joi.objectId().trim().required(),
    title: Joi.string().trim().required(),
    header: Joi.string().trim().required(),
    description: Joi.string().required(),
    metaTitle: Joi.string(),
    metaKeywords: Joi.string(),
    metaDescription: Joi.string()
});
const updateHomeMovingBannerSchema = Joi.object({
    _id: Joi.objectId().trim().required(),
    years: Joi.number().required(),
    projects: Joi.number().required(),
    clients: Joi.number().required(),
    shortDescription: Joi.string()
});
const getHomeSchema = Joi.object({
    _id: Joi.string().trim().required()
});
const updateHomeStatusSchema = Joi.object({
    _id: Joi.string().trim().required(),
    active: Joi.boolean().required(),
});

function createAboutSection(Models) {
    async function aboutSection(req, res) {
        try {

            let validateData = createHomeAboutSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }

            // pick data from req.body
            let homeFormData = _.pick(req.body, ['title', 'header', 'description', 'metaTitle', 'metaKeywords', 'metaDescription']);

            // if (req.files.length > 0)
            //     homeFormData.aboutImages = req.files;
            let isAboutHomeExist = await Models.HomeAboutDB.find();
            console.log('about Section', isAboutHomeExist)
            if (isAboutHomeExist.length) {
                res.send({ status: false, message: CONSTANTSMESSAGE.ALREADY_EXIST_MESSAGE });
            } else {
                let saveHome = await new Models.HomeAboutDB(homeFormData).save();
                console.log('saveHome is ', saveHome)
                saveHome = saveHome.toObject();
                res.send({ status: true, message: "New Home About Data created successfully." });
            }
        }
        catch (e) {
            console.log('createHomeHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in Creating Home About Data" });
        }
    }
    return aboutSection;
}
function updateAboutSection(Models) {
    async function update(req, res) {
        try {

            let validateData = updateHomeAboutSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }

            // pick data from req.body
            let bodyData = _.pick(req.body, ['_id', 'title', 'header', 'description', 'metaTitle', 'metaKeywords', 'metaDescription']);

            let setData = {
                title: bodyData.title,
                header: bodyData.header,
                description: bodyData.description,
                metaTitle: bodyData.metaTitle,
                metaKeywords: bodyData.metaKeywords,
                metaDescription: bodyData.metaDescription
            }
            // if (req.files.length > 0) {
            //     bodyData.backgroundImage = req.files;
            //     setData['backgroundImage'] = bodyData.backgroundImage
            // }

            let updateModule = await Models.HomeAboutDB.findOneAndUpdate({ _id: bodyData._id }, { $set: setData });
            console.log('updateModule is', updateModule)
            res.send({ status: true, message: 'Home About Data updated successfully.' });
        }
        catch (e) {
            console.log('createHomeHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in Creating Home About Data" });
        }
    }
    return update;
}
function getHomeAboutHelper(Models) {
    async function getAbout(req, res) {
        try {
            // Getting Home from Database
            let findData = await Models.HomeAboutDB.find();
            console.log('findData is', findData)
            if (findData) {
                // if data found check verified or not
                res.send({ status: true, message: "Home about Data", data: findData[0] });
            } else {
                res.send({ status: true, message: "Home about Data not found" });
            }


        }
        catch (e) {
            console.log('getAbout err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in getAbout" });
        }
    }
    return getAbout;
}
function createMovingBanner(Models) {
    async function create(req, res) {
        try {

            let validateData = createHomeMovingBannerSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }

            // pick data from req.body
            let homeFormData = _.pick(req.body, ['years', 'clients', 'projects', 'shortDescription']);

            if (req.files.length > 0)
                homeFormData.backgroundImage = req.files;
            let isHomeBannerExist = await Models.HomeMovingBannerDB.find();
            if (isHomeBannerExist.length) {
                res.send({ status: false, message: CONSTANTSMESSAGE.ALREADY_EXIST_MESSAGE });
            } else {
                let saveHome = await new Models.HomeMovingBannerDB(homeFormData).save();
                console.log('saveHome is ', saveHome)

                res.send({ status: true, message: "New Moving Banner created successfully" });
            }
        }
        catch (e) {
            console.log('createHomeHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in Creating Home" });
        }
    }
    return create;
}
function updateMovingBanner(Models) {
    async function update(req, res) {
        try {

            let validateData = updateHomeMovingBannerSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }

            // pick data from req.body
            let bodyData = _.pick(req.body, ['_id', 'years', 'clients', 'projects', 'shortDescription']);

            let setData = {
                years: bodyData.years,
                clients: bodyData.clients,
                projects: bodyData.projects,
                shortDescription: bodyData.shortDescription
            }
            // if (req.files.length > 0) {
            //     bodyData.backgroundImage = req.files;
            //     setData['backgroundImage'] = bodyData.backgroundImage
            // }

            let updateModule = await Models.HomeMovingBannerDB.findOneAndUpdate({ _id: bodyData._id }, { $set: setData });
            console.log('updateModule is', updateModule)
            res.send({ status: true, message: 'Moving Banner updated successfully' });
        }
        catch (e) {
            console.log('createHomeHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in Creating Home" });
        }
    }
    return update;
}
function getHomeMovingBannerHelper(Models) {
    async function MovingBanner(req, res) {
        try {
            // Getting Home from Database
            let findData = await Models.HomeMovingBannerDB.find();
            console.log('findData is', findData)
            if (findData) {
                // if data found check verified or not
                res.send({ status: true, message: "Home MovingBanner Data", data: findData[0] });
            } else {
                res.send({ status: true, message: "Home MovingBanner Data not found" });
            }


        }
        catch (e) {
            console.log('MovingBanner err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in MovingBanner" });
        }
    }
    return MovingBanner;
}
function updateHomeStatusHelper(Models) {
    async function updateHomeStatus(req, res) {
        try {
            let validateData = updateHomeStatusSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }


            let bodyData = _.pick(req.body, ["active", "_id"]);
            let setData = {
                active: bodyData.active,
            }
            let updateModule = await Models.HomeDB.findOneAndUpdate({ _id: bodyData._id }, { $set: setData });
            console.log('updateModule is', updateModule)
            res.send({ status: true, message: CONSTANTSMESSAGE.STATUS_UPDATE_SUCCESS });


        }
        catch (e) {
            console.log('createHomeHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in SignUp" });
        }
    }
    return updateHomeStatus;
}
function deleteHomeHelper(Models) {
    async function deleteHome(req, res) {
        try {
            let validateData = getHomeSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: "Invalid data" };
            }


            // Getting Home from Database
            let deleteData = await Models.HomeDB.remove({ _id: req.body._id });
            console.log('deleteData is', deleteData)
            if (deleteData) {
                // if data found check verified or not
                res.send({ status: true, message: "Home Deleted Successfully" });
            } else {
                res.send({ status: true, message: "Home not found" });
            }


        }
        catch (e) {
            console.log('createHomeHelper err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in SignUp" });
        }
    }
    return deleteHome;
}

module.exports = {
    createAboutSection,
    updateAboutSection,
    getHomeAboutHelper: getHomeAboutHelper,
    getMovingBanner: getHomeMovingBannerHelper,
    updateHomeStatusFun: updateHomeStatusHelper,
    deleteHomeFunc: deleteHomeHelper,
    //getHomeDetailFunc: getHomeHelper,
    createMovingBanner,
    updateMovingBanner
};