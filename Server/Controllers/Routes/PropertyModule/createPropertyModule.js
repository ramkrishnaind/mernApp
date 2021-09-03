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
    possessionStatus: Joi.string().empty(""),
    availableFromMonth: Joi.number(),
    availableFromYear: Joi.number(),
    ageOfConstruction: Joi.string().empty(""),
    expectedPrice: Joi.number(),
    pricePerSqFt: Joi.number(),
    otherCharges: Joi.number(),
    isStumpDutyRCExcluded: Joi.boolean(),
    bookingAmount: Joi.number(),
    maintenanceCharge: Joi.number(),
    maintenanceFor: Joi.string(),
    brokerageCharge: Joi.number(),
    amenities: Joi.array(),
    latitude: Joi.string(),
    longitude: Joi.string(),
    address: Joi.string(),
    city: Joi.string(),
    State: Joi.string(),
    pinCode: Joi.string(),
    propertTag: Joi.string(),
    propertyDetails: Joi.array(),
    isPostedByAdmin: Joi.boolean(),
    userId: Joi.objectId(),
    totalArea: Joi.number(),
    tag: Joi.string()
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
                "bookingAmount", "maintenanceCharge", "maintenanceFor", "brokerageCharge", "amenities", "latitude",
                "longitude", "address", "city", "State", "pinCode", "propertTag", "isPostedByAdmin", "propertyDetails",
                "userId", "totalArea", "tag"]);
            // searching email or mobile already exists or not
            // let findData = await Models.PropertyDB.findOne({ nameOfProject: bodyData.nameOfProject });
            let propertyCode = "VP001";
            if (bodyData.isPostedByAdmin) {
                bodyData.status = 1;
            } else {
                bodyData.status = 2;
            }
            const moduleFeatureSchema = {
                bedrooms: bodyData.bathrooms,
                balconies: bodyData.balconies,
                floorNo: bodyData.floorNo,
                totalFloors: bodyData.totalFloors,
                furnishedStatus: bodyData.furnishedStatus,
                bathrooms: bodyData.bathrooms,
                totalArea: bodyData.totalArea,
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
                otherCharges: bodyData.otherCharges,
                isStumpDutyRCExcluded: bodyData.isStumpDutyRCExcluded,
                bookingAmount: bodyData.bookingAmount,
                maintenanceCharge: bodyData.maintenanceCharge,
                maintenanceFor: bodyData.maintenanceFor,
                brokerageCharge: bodyData.brokerageCharge,
                amenities: bodyData.amenities,
                propertTag: bodyData.propertTag,
                address: {
                    latitude: bodyData.latitude,
                    longitude: bodyData.longitude,
                    address: bodyData.address,
                    city: bodyData.city,
                    State: bodyData.State,
                    pinCode: bodyData.pinCode
                },
                pCity: bodyData.city,
                locality: bodyData.locality,
                pCity: bodyData.city,
                locality: bodyData.locality,
                status: bodyData.status,
                propertyCode: propertyCode,
                propertyDetails: bodyData.propertyDetails,
                tag: bodyData.tag,
                userId: bodyData.userId
            };

            let saveModule = await new Models.PropertyDB(bodyData).save();
            moduleFeatureSchema.propertyId = saveModule._id;
            let featureSchemaModule = await new Models.PFeaturesDB(moduleFeatureSchema).save();
            console.log('saveModule is', featureSchemaModule)
            res.send({ status: true, propertyId: saveModule._id, message: CONSTANTSMESSAGE.CREATE_SUCCESS_MESSAGE });
        }
        catch (e) {
            console.log('saveModule err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in saveModule" });
        }
    }
    return create;
}
module.exports = createPropertyRequest;