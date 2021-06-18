
const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

var Schema = mongoose.Schema;

const userRoleSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    rights: {
        type: Array,
        required: true
    },
    status: {
        type: Boolean,
        default: true
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
    collection: 'userRole'
}
);

module.exports = userRoleSchema;