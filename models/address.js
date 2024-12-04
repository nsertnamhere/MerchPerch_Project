const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    streetAddress: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true }, 
    country: { type: String, required: true },
    // ... other address details
});

module.exports = mongoose.model('Address', addressSchema);