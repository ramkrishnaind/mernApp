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
    buildYear: Joi.number(),
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
    propertyTag: Joi.string(),
    transactionType: Joi.string(),
    propertyDetails: Joi.array(),
    isPostedByAdmin: Joi.boolean(),
    userId: Joi.objectId(),
    totalArea: Joi.number(),
    propertyTag: Joi.string(),
    gaurdRoom: Joi.boolean(),
    description: Joi.string(),


    conferenceRoom: Joi.number(),
    vistorRoom: Joi.number(),
    personalWashroom: Joi.boolean(),
    description: Joi.string(),
    noOfSeats: Joi.number(),
    meetingRooms: Joi.number(),
    Pantry: Joi.boolean(),
    Noofopensides: Joi.boolean(),
    Widthofroad: Joi.number(),
    IsCornerPlot: Joi.boolean(),
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
                "userId", "totalArea", "propertyTag", "gaurdRoom", "description", "buildYear"]);
            // searching email or mobile already exists or not
            let propertiesLength = await Models.PropertyDB.count();
            let code = propertiesLength + 1;
            bodyData.propertyCode = "VP" + code;
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
                buildYear: bodyData.buildYear,
                ageOfConstruction: bodyData.ageOfConstruction,
                amenities: bodyData.amenities,
                propertTag: bodyData.propertTag,
                description: bodyData.description,
                address: {
                    latitude: bodyData.latitude,
                    longitude: bodyData.longitude,
                    address: bodyData.address.toLowerCase(),
                    city: bodyData.city.toLowerCase(),
                    State: bodyData.State.toLowerCase(),
                    pinCode: bodyData.pinCode
                },
                pCity: bodyData.city,
                locality: bodyData.locality,
                status: bodyData.status,
                propertyDetails: bodyData.propertyDetails,
                propertyTag: bodyData.propertyTag,
                userId: bodyData.userId,
                gaurdRoom: bodyData.gaurdRoom
            };
            const priceSchema = {
                expectedPrice: bodyData.expectedPrice,
                pricePerSqft: bodyData.pricePerSqFt,
                otherCharges: bodyData.otherCharges,
                isStumpDutyRCExcluded: bodyData.isStumpDutyRCExcluded,
                bookingAmount: bodyData.bookingAmount,
                maintenanceCharge: bodyData.maintenanceCharge,
                maintenanceFor: bodyData.maintenanceFor,
                brokerage: bodyData.brokerageCharge,
            };
            let saveModule = await new Models.PropertyDB(bodyData).save();
            moduleFeatureSchema.propertyId = saveModule._id;
            priceSchema.propertyId = saveModule._id;
            console.log("priceSchema before saving", priceSchema);
            let featureSchemaModule = await new Models.PFeaturesDB(moduleFeatureSchema).save();
            console.log('saveModule is', featureSchemaModule)
            let priceSchemaModule = await new Models.PPriceDB(priceSchema).save();

            console.log('priceSchemaModule at saving time', priceSchemaModule)
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