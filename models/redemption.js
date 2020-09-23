const mongoose = require('mongoose');

const redemptionSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true
    },

    code: {
        type: String,
        required: true
    }
    
}, {
    timestamps: true
})

module.exports = mongoose.model('redemption', redemptionSchema);