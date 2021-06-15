
const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

var Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    accountno: {
        type: String,
        required: true,
        default: () => nanoid(10)
    },
    countryCode: {
        type: String,
        default: '91'
    },
    userRole: {
        type: String,
        required: true,
        default: '1'
    },
    verified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String
    },
    verificationDate: {
        type: Date
    },
    forgetPasswordToken: {
        type: String
    },
    active: {
        type: Boolean,
        default: true
    },
    userCreationDate: {
        type: Date,
        default: Date.now
    },
    lastLoginTime: {
        type: Date
    }
}, {
    collection: 'user'
}
);

module.exports = userSchema;