
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
    lastLoginTime: {
        type: Date
    }
}, {
    timestamps: {
        createdAt: 'userCreationDate',
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
    collection: 'user'
}
);

module.exports = userSchema;