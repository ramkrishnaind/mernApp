
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const schema = new Schema({
    header: {
        type: String,
        trim: true
    },
    shortDescription: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        trim: true
    },
    media: {
        type: Array
    },
    description: {
        type: String,
        trim: true
    },
    howToInvest: {
        type: Array
    },
    date: {
        type: Date,
        default: () => Date.now()
    },
    metaTitle: {
        type: String
    },
    metaKeywords: {
        type: String
    },
    metaDescription: {
        type: String
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
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
    collection: 'investWithUs'
}
);

module.exports = schema;