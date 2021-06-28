
const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const schema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'property',
        default: null
    },
    expectedPrice:{
        type:Number
    },
    tokenAmount:{
        type:Number
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
    collection: 'pPrice'
}
);

module.exports = schema;