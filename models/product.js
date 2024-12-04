const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    sku: { type: String, required: true, unique: true },
    // ... other product details
});

module.exports = mongoose.model('Product', productSchema);