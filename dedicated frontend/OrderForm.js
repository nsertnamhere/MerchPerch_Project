import React, { useState } from 'react';

const OrderForm = () => {
  const [order, setOrder] = useState({ item: '', quantity: 1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send order data to backend
      console.log(order);
      alert('Order submitted!');
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Item:</label>
      <input type="text" name="item" value={order.item} onChange={handleChange} required />

      <label>Quantity:</label>
      <input type="number" name="quantity" value={order.quantity} onChange={handleChange} min="1" required />

      <button type="submit">Place Order</button>
    </form>
  );
};

export default OrderForm;