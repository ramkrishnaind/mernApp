const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let schema = new Schema({
    name: {
        type: String
    },
    shortDesc: {
        type: String
    },
    desc: {
        type: String
    },
    image: {
        type: Array
    },
    isDisable: {
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
    collection: 'services'
});

module.exports = schema;
