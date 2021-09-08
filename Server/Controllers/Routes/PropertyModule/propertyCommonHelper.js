const _ = require('lodash');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)
const CONSTANTSMESSAGE = require('../../../Helper/constantsMessage')

const errorResponseHelper = require('../../../Helper/errorResponse');

const singlePropertyModuleSchema = Joi.object({
    propertyId: Joi.string().required()
});
const propertyLatLongSchema = Joi.object({
    city: Joi.string().required(),
    state: Joi.string().required()
});

function getUserIdPropertyList(Models) {
    async function PropertyList(req, res) {
        try {
            let validateData = moduleSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: CONSTANTSMESSAGE.INVALID_DATA };
            }

            // pick data from req.body

            let bodyData = _.pick(req.body, ["userId"]);
            let findData = await Models.PropertyDB.aggregate([
                {
                    $match: {
                        userId: bodyData.userId
                    }
                },
                {
                    $lookup:
                    {
                        from: 'pfeatures',
                        localField: '_id',
                        foreignField: 'propertyId',
                        as: 'features'
                    }
                },
                {
                    $lookup:
                    {
                        from: 'pimages',
                        localField: '_id',
                        foreignField: 'propertyId',
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
function getAllProperty(Models) {
    async function PropertyList(req, res) {
        try {
            let findData = await Models.PropertyDB.aggregate([
                {
                    $lookup:
                    {
                        from: 'pfeatures',
                        localField: '_id',
                        foreignField: 'propertyId',
                        as: 'features'
                    }
                },
                {
                    $lookup:
                    {
                        from: 'pimages',
                        localField: '_id',
                        foreignField: 'propertyId',
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
function getHomeAllProperty(Models) {
    async function PropertyList(req, res) {
        try {
            let findData = await Models.PropertyDB.aggregate([{
                $lookup: {
                    from: "pfeatures",
                    localField: "_id",
                    foreignField: "propertyId",
                    as: "features"
                }
            }])
            console.log('findData is', findData)
            let rentData = findData.filter(function (item) {
                return item.for === "Rent";
            });
            let totalForRent = rentData.length;

            let sellData = findData.filter(function (item) {
                return item.for === "Sale";
            });
            let totalForSell = sellData.length;

            let constructionData = findData.filter(function (item) {
                return item.for === "Construction";
            });
            let totalForConstruction = constructionData.length;

            let interiorData = findData.filter(function (item) {
                return item.for === "Interior";
            });
            let totalForInterior = interiorData.length;
            let obj = {
                sell: {
                    total: totalForSell,
                    data: sellData
                },
                rent: {
                    total: totalForRent,
                    data: rentData
                },
                construction: {
                    total: totalForConstruction,
                    data: constructionData
                },
                interior: {
                    total: totalForInterior,
                    data: interiorData
                }
            }

            res.send({ status: true, message: "Properties Data for Home Page", data: obj });
        }
        catch (e) {
            console.log('Getting list err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in Getting list" });
        }
    }
    return PropertyList;
}
function propertyDetail(Models) {
    async function PropertyList(req, res) {
        try {
            let validateData = singlePropertyModuleSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: CONSTANTSMESSAGE.INVALID_DATA };
            }

            // pick data from req.body

            let bodyData = _.pick(req.body, ["propertyId"]);
            let _id = bodyData.propertyId;
            let result = {};
            // let findData = await Models.PropertyDB.aggregate([
            //     {
            //         $match: {
            //             _id
            //         }
            //     },
            //     {
            //         $lookup:
            //         {
            //             from: 'pfeatures',
            //             localField: '_id',
            //             foreignField: 'propertyId',
            //             as: 'features'
            //         }
            //     },
            //     {
            //         $lookup:
            //         {
            //             from: 'pimages',
            //             localField: '_id',
            //             foreignField: 'propertyId',
            //             as: 'images'
            //         }
            //     }
            // ]);
            let findData = await Models.PropertyDB.findOne({ _id }).lean();
            if (findData) {
                let propertyFeatures = await Models.PFeaturesDB.findOne({ propertyId: findData._id }).lean();
                //let propertyAmenities = await Models.PFeaturesDB.findOne({ propertyId: findData._id }).lean();

                result._id = findData._id;
                result.iAm = findData.iAm;
                result.userName = '';
                result.for = findData.for;
                result.pType = findData.pType;
                result.pCity = findData.pCity;
                result.nameOfProject = findData.nameOfProject;
                result.projectDescription = '';
                result.postingAs = findData.postingAs;
                result.created = findData.created;
                result.bedrooms = propertyFeatures.bedrooms;
                result.bathrooms = propertyFeatures.bathrooms;
                result.gaurdRoom = true;
                result.floorNo = propertyFeatures.floorNo;
                result.totalFloors = propertyFeatures.totalFloors;
                result.furnishedStatus = propertyFeatures.furnishedStatus;
                result.superArea = propertyFeatures.superArea;
                result.builtUpArea = propertyFeatures.builtUpArea;
                result.carpetArea = propertyFeatures.carpetArea;
                result.transactionType = propertyFeatures.transactionType;
                result.possessionStatus = propertyFeatures.possessionStatus;
                result.availableFromMonth = propertyFeatures.availableFromMonth;
                result.availableFromYear = propertyFeatures.availableFromYear;
                result.ageOfConstruction = propertyFeatures.ageOfConstruction;
                result.amenities = {
                    basketballcourt: true,
                    airConditioned: true,
                    swimmingPool: true,
                    noSmokingZone: true,
                    gym: true,
                    petFriendly: true,
                    freeParkingOnPremises: true,
                    wheelchairFriendly: true,
                    homeTheater: true,
                }
                result.images = {
                    main: {},
                    bedroom: [],
                }
                result.rating = 4.5;
                result.review = [];
                result.address = {
                    latitude: '',
                    longitude: '',
                    address: '',
                    city: '',
                    State: '',
                    pinCode: '',
                }
                result.price = {
                    priceFor: 'Sell',
                    price: 3000000,
                    bookingAmount: '',
                    maintenanceCharge: '',
                    brokerageCharge: '',
                    maintenanceFor: '',
                }
                res.send({ status: true, message: "Property Details", data: result });
            }
            res.send({ status: true, message: "Property Note available.", data: result });

        }
        catch (e) {
            console.log('Getting Property Details err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in Getting Property Details" });
        }
    }
    return PropertyList;
}
function deleteProperty(Models) {
    return function deleteProperty(Models) {
        async function deletePropertyFun(req, res) {
            try {
                let validateData = singlePropertyModuleSchema.validate(req.body);
                if (validateData.error) {
                    throw { status: false, error: validateData, message: "Invalid data" };
                }


                // Getting User from Database
                let deleteData = await Models.PropertyDB.remove({ _id: req.body.propertyId });
                let deleteFeaturesData = await Models.PFeaturesDB.remove({ _id: req.body.propertyId });
                let deletePriceData = await Models.PPriceDB.remove({ _id: req.body.propertyId });
                let deleteImageData = await Models.PImageDB.remove({ _id: req.body.propertyId });
                console.log('deleteData is', deleteData)
                if (deleteData) {
                    // if data found check verified or not
                    res.send({ status: true, message: "Property Deleted Successfully" });
                } else {
                    res.send({ status: true, message: "User not found" });
                }


            }
            catch (e) {
                console.log('createUserHelper err', e);
                await errorResponseHelper({ res, error: e, defaultMessage: "Error in SignUp" });
            }
        }
        return deletePropertyFun;
    };
}
function getPropertyLatLong(Models) {
    async function PropertyList(req, res) {
        try {
            let validateData = propertyLatLongSchema.validate(req.body);
            if (validateData.error) {
                throw { status: false, error: validateData, message: CONSTANTSMESSAGE.INVALID_DATA };
            }

            // pick data from req.body

            let bodyData = _.pick(req.body, ["city", "state"]);
            let queryCity = bodyData.city.toLowerCase();
            let queryState = bodyData.state.toLowerCase();
            //let query = { "address.city": queryCity, "address.state": queryState };
            let query = {
                $or: [
                    { "address.city": queryCity },
                    { "address.state": queryState }
                ]
            };
            let data = await Models.PFeaturesDB.find(query).lean();
            console.log('data is', data)
            let resultData = [];
            if (data.length) {
                for (let x = 0; x < data.length; x++) {
                    let obj = {
                        latitude: data[x].address.latitude,
                        longitude: data[x].address.longitude
                    }
                    resultData.push(obj)
                }
            }
            let resultObj = { length: resultData.length, data: resultData }
            res.send({ status: true, message: "Properties Data for Home Page", data: resultObj });
        }
        catch (e) {
            console.log('Getting list err', e);
            await errorResponseHelper({ res, error: e, defaultMessage: "Error in Getting list" });
        }
    }
    return PropertyList;
}

module.exports = {
    getAllProperty,
    propertyDetail,
    deleteProperty,
    getHomeAllProperty,
    getPropertyLatLong
    // createUserFunc: createUserHelper,
    // getAllUserFunc: getAllUserHelper,
    // getUserFunc: getUserHelper,
    // updateUserStatusFun: updateUserStatusHelper,
    // deleteUserFunc: deleteUserHelper
};