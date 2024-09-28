import React, { useCallback, useState } from 'react';
import OrderList from './components/OrderList/OrderList';
import TotalPrice from './components/TotalPrice/TotalPrice';
import { Product, products } from './types';
import './App.css';

const App: React.FC = () => {
  const [order, setOrder] = useState<{ [key: number]: { quantity: number; price: number } }>({});

  const addProduct = useCallback((product: Product) => {
    setOrder(prevOrder => {
      const currentQuantity = prevOrder[product.id]?.quantity || 0;
      return {
        ...prevOrder,
        [product.id]: {
          quantity: currentQuantity + 1,
          price: product.price,
        },
      };
    });
  }, []);

  const removeProduct = useCallback((id: number) => {
    setOrder(prevOrder => {
      const currentQuantity = prevOrder[id]?.quantity || 0;
      if (currentQuantity > 1) {
        return {
          ...prevOrder,
          [id]: {
            ...prevOrder[id],
            quantity: currentQuantity - 1,
          },
        };
      } else {
          const { [id]: _, ...rest } = prevOrder;
        return rest;
      }
    });
  }, []);

  const totalPrice = Object.values(order).reduce((total, item) => total + item.quantity * item.price, 0);

  return (
      <div className="app">
        <div className="order-details">
          <h2>Order</h2>
          <hr />
          {Object.entries(order).length === 0 ? (
              <p>Order is empty</p>
          ) : (
              <ul>
                {Object.entries(order).map(([id, { quantity, price }]) => (
                    <li key={id}>
                      {products.find(p => p.id === Number(id))?.name} - x{quantity} - {price * quantity} KGS
                      <button onClick={() => removeProduct(Number(id))} className="remove-button">х</button>
                    </li>
                ))}
              </ul>
          )}
          <hr/>
          <TotalPrice total={totalPrice} />
        </div>
        <OrderList products={products} addProduct={addProduct} />
      </div>
  );
};

export default App;