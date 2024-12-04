const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    orderDate: { type: Date, default: Date.now },
    totalAmount: { type: Number, required: true },
    shippingAddress: { type: mongoose.Schema.Types.ObjectId, ref: 'Address', required: true },
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }],
    // ... order status, payment info, etc.
});

module.exports = mongoose.model('Order', orderSchema);