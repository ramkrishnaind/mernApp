
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const menuModuleSchema = new Schema({
    parentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'menuModule',
        default: null
    },
    topParentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'menuModule',
        default: null
    },
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    icon: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    endPoint: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    description: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default: null
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        default: null
    },
    updationDate: {
        type: Date,
        default: null
    }
}, {
    collection: 'menuModule'
}
);

module.exports = menuModuleSchema;