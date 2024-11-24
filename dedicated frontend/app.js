import React from 'react';
import OrderForm from './components/OrderForm';
import InventoryManagement from './components/InventoryManagement';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to MerchPerch</h1>
      </header>
      <main>
        <OrderForm />
        <InventoryManagement />
      </main>
    </div>
  );
}

export default App;