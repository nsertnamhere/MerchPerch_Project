import React, { useState } from 'react';

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([
    { name: 'Fishing Rod', quantity: 10 },
    { name: 'Tackle Box', quantity: 5 },
  ]);

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>{item.name}: {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryManagement;