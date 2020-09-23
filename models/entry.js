const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true
    },

    code: {
        type: String,
        required: true,
        unique: true,
        index: true
    },

    age: {
        type: Number,
        required: true
    },

    used: {
        type: Boolean,
        default: false
    },

    campaign_Interest: Boolean

}, {
    timestamps: true
})

module.exports = mongoose.model('entry', customerSchema);