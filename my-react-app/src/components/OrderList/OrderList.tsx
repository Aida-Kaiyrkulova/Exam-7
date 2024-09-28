import React from 'react';
import { Product } from '../../types';
import MenuButton from '../MenuButton/MenuButton';

interface OrderListProps {
    products: Product[];
    addProduct: (product: Product) => void;
}

const OrderList: React.FC<OrderListProps> = ({ products, addProduct }) => {
    return (
        <div className="product-list">
            <h2>Menu</h2>
            {products.length === 0 ? (
                <p>Not available</p>
            ) : (
                products.map(product => (
                    <MenuButton key={product.id} product={product} addProduct={addProduct} />
                ))
            )}
        </div>
    );
};

export default OrderList;