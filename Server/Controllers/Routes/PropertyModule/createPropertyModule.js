const _ = require('lodash');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)

const errorResponseHelper = require('../../../Helper/errorResponse');
const CONSTANTSMESSAGE = require('../../../Helper/constantsMessage')
const moduleSchema = Joi.object({
    iAm: Joi.string().required(),
    for: Joi.string().empty(""),
    pType: Joi.string().empty(""),
    postingAs: Joi.string().empty(""),
    pCity: Joi.string().empty(""),
    nameOfProject: Joi.string().empty(""),
    bedrooms: Joi.number(),
    balconies: Joi.number(),
    floorNo: Joi.number(),
    totalFloors: Joi.number(),
    furnishedStatus: Joi.string(),
    bathrooms: Joi.number(),
    superArea: Joi.number(),
    builtUpArea: Joi.number(),
    carpetArea: Joi.number(),
    transactionType: Joi.string(),
    possessionStatus: Joi.string().empty(""),
    availableFromMonth: Joi.number(),
    availableFromYear: Joi.number(),
    ageOfConstruction: Joi.string().empty(""),
    expectedPrice: Joi.number(),
    pricePerSqFt: Joi.number(),
    isPLCIncluded: Joi.boolean(),
    isCarParkingIncluded: Joi.boolean(),
    isClubMemberShipIncluded: Joi.boolean(),
    otherCharges: Joi.number(),
    isStumpDutyRCExcluded: Joi.boolean(),
    bookingAmount: Joi.number(),
    maintenanceCharge: Joi.number(),
    maintenanceFor: Joi.boolean(),
    brokerageCharge: Joi.number(),
});



function createPropertyRequest(Models) {
    async function create(req, res) {
        try {
            // validate data using joi
            let validateData = moduleSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: CONSTANTSMESSAGE.INVALID_DATA };
            }

            // pick data from req.body
            let bodyData = _.pick(req.body, ["iAm", "for", "pType", "postingAs", "pCity", "nameOfProject",
                "bedrooms", "balconies", "floorNo", "totalFloors", "furnishedStatus", "bathrooms", "superArea",
                "builtUpArea", "carpetArea", "transactionType", "possessionStatus", "availableFromMonth",
                "availableFromYear", "ageOfConstruction", "expectedPrice", "pricePerSqFt", "isPLCIncluded",
                "isCarParkingIncluded", "isClubMemberShipIncluded", "otherCharges", "isStumpDutyRCExcluded",
                "bookingAmount", "maintenanceCharge", "maintenanceFor", "brokerageCharge"]);
            // searching email or mobile already exists or not
            // let findData = await Models.PropertyDB.findOne({ nameOfProject: bodyData.nameOfProject });
            const moduleFeatureSchema = {
                bedrooms: bodyData.bathrooms,
                balconies: bodyData.balconies,
                floorNo: bodyData.floorNo,
                totalFloors: bodyData.totalFloors,
                furnishedStatus: bodyData.furnishedStatus,
                bathrooms: bodyData.bathrooms,
                superArea: bodyData.superArea,
                builtUpArea: bodyData.builtUpArea,
                carpetArea: bodyData.carpetArea,
                transactionType: bodyData.transactionType,
                possessionStatus: bodyData.possessionStatus,
                availableFromMonth: bodyData.availableFromMonth,
                availableFromYear: bodyData.availableFromYear,
                ageOfConstruction: bodyData.ageOfConstruction,
                expectedPrice: bodyData.expectedPrice,
                pricePerSqFt: bodyData.pricePerSqFt,
                isPLCIncluded: bodyData.isPLCIncluded,
                isCarParkingIncluded: bodyData.isCarParkingIncluded,
                isClubMemberShipIncluded: bodyData.isClubMemberShipIncluded,
                otherCharges: bodyData.otherCharges,
                isStumpDutyRCExcluded: bodyData.isStumpDutyRCExcluded,
                bookingAmount: bodyData.bookingAmount,
                maintenanceCharge: bodyData.maintenanceCharge,
                maintenanceFor: bodyData.maintenanceFor,
                brokerageCharge: bodyData.brokerageCharge
            };

            // if (findData) {
            //     // if data found check 
            //     let findDataname = await Models.PFeaturesDB.findOne({ productId:findData._id });
            //     if (findDataname) {
            //         // if data found check 
            //         throw { status: false, error: true, message: CONSTANTSMESSAGE.ALREADY_EXIST, duplicateModule: true, statusCode: 401 };
            //     }
            //     moduleFeatureSchema.productId = findData._id;
            //     let saveModule = await new Models.PFeaturesDB(moduleFeatureSchema).save();
            //     console.log('saveModule is', saveModule)
            //     res.send({ status: true, message: CONSTANTSMESSAGE.CREATE_SUCCESS_MESSAGE });
            // }
            // else
            // {
            //     let findDataname = await Models.PropertyDB.findOne({ nameOfProject: bodyData.nameOfProject });
            //     if (findDataname) {
            //         moduleFeatureSchema.productId = findDataname._id;
            let saveModule = await new Models.PropertyDB(bodyData).save();
            let featureSchemaModule = await new Models.PFeaturesDB(moduleFeatureSchema).save();
            console.log('saveModule is', featureSchemaModule)
            res.send({ status: true, message: CONSTANTSMESSAGE.CREATE_SUCCESS_MESSAGE });
            //     }
            // }

        }
        catch (e) {
            console.log('saveModule err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in saveModule" });
        }
    }
    return create;
}
module.exports = createPropertyRequest;