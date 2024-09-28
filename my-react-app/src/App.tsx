import React, { useState } from 'react';
import OrderList from './components/OrderList/OrderList';
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

  const totalPrice = Object.values(order).reduce((total, item) => total + item.quantity * item.price, 0);

  return (
      <div className="app">
        <div className="order-details">
          <h2>Заказ</h2>
          {Object.entries(order).length === 0 ? (
              <p>В заказе ничего нет</p>
          ) : (
              <ul>
                {Object.entries(order).map(([name, { quantity, price }]) => (
                    <li key={name}>
                      {name} - {quantity} шт. - {price * quantity} KGS
                    </li>
                ))}
              </ul>
          )}
          <h3>Общая сумма: {totalPrice} KGS</h3>
        </div>
        <OrderList products={products} addProduct={addProduct} /> {/* Используем OrderList */}
      </div>
  );
};

export default App;