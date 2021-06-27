
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const schema = new Schema({
    propertyName: {
        type: String,
        required: true,
        trim: true
    },
    propertyAddress: {
        type: String,
        required: true,
        trim: true
    },
    propertyArea: {
        type: Number,
        required: true,
    },
    bedRoom: {
        type: Number,
        required: true,
    },
    kitchen: {
        type: Number,
        required: true,
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