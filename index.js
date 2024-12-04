const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // Or your preferred port

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your-database-name', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

app.use(bodyParser.json());

// Import your models
const Customer = require('./models/customer');
const Product = require('./models/product');
const Order = require('./models/order');
const Address = require('./models/address');

// API endpoint to create a new order
app.post('/orders', async (req, res) => {
    try {
        const { customerId, items, shippingAddress } = req.body;

        // 1. Validate the data (e.g., check if customer and products exist)
        const customer = await Customer.findById(customerId);
        if (!customer) {
            return res.status(404).json({ error: 'Customer not found' });
        }
        // ... (validate products, quantities, etc.)

        // 2. Create a new address
        const address = new Address({
            customer: customerId,
            ...shippingAddress
        });
        await address.save();

        // 3. Create a new order
        const order = new Order({
            customer: customerId,
            totalAmount: calculateTotalAmount(items), // Helper function (see below)
            shippingAddress: address._id, 
            items: items.map(item => ({
                product: item.productId,
                quantity: item.quantity,
                price: item.price
            }))
        });
        await order.save();

        res.status(201).json({ orderId: order._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create order' });
    }
});

// ... other API endpoints (GET, PUT, DELETE)

// Helper function to calculate the total amount
function calculateTotalAmount(items) {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});