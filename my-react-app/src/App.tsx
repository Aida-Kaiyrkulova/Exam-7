import React, { useState } from 'react';
import MenuButton from './components/MenuButton/MenuButton';
import { products } from './types';
import './App.css';

const App: React.FC = () => {
  const [order, setOrder] = useState<{ [key: string]: { quantity: number; price: number } }>({});

  const addProduct = (product: { name: string; price: number }) => {
    setOrder(prev => {
      const newOrder = { ...prev };
      if (newOrder[product.name]) {
        newOrder[product.name].quantity += 1;
      } else {
        newOrder[product.name] = { quantity: 1, price: product.price };
      }
      return newOrder;
    });
  };

  return (
      <div className="app">
        {products.map(product => (
            <MenuButton key={product.id} product={product} addProduct={addProduct} />
        ))}
      </div>
  );
};

export default App;