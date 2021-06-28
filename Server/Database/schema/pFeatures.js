
const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

var Schema = mongoose.Schema;

const schema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'property',
        default: null
    },
    bedrooms:{
        type:Number
    },
    balconies:{
        type:Number
    },
    floorNo:{
        type:Number
    },
    totalFloors:{
        type:Number
    },
    furnishedStatus:{
        type:String
    },
    bathrooms:{
        type:Number
    },
    superArea:{
        type:Number
    },
    builtUpArea:{
        type:Number
    },
    carpetArea:{
        type:Number
    },
    transactionType:{
        type:String
    },
    possessionStatus:{
        type:String
    },
    availableFromMonth:{
        type:Number
    },
    availableFromYear:{
        type:Number
    },
    ageOfConstruction:{
        type:String
    }
}, {
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    },
    id: false,
    toJSON: {
        getters: true,
        virtuals: true
    },
    toObject: {
        getters: true,
        virtuals: true
    }
}, {
    collection: 'pFeatures'
}
);

module.exports = schema;