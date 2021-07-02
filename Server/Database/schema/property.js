
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const schema = new Schema({
    iAm:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        trim: true
    },
    mobileNo:{
        type:Number
    },
    email:{
        type:String
    },
    for:{
        type:String
    },
    pType:{
        type:String
    },
    postingAs:{
        type:String
    },
    pCity:{
        type:String
    },
    nameOfProject:{
        type:String
    },
    status: {
        type: Boolean,
        default: false
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
    collection: 'property'
}
);

module.exports = schema;