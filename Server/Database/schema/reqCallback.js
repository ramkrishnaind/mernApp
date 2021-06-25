
const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

var Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    productId: {
        type: String,
        required: true
    },
    isVisit :{
        type: Boolean,
        required: true
    },
    status: {
        type: Boolean,
        default: true
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
    collection: 'reqCallback'
}
);

module.exports = schema;