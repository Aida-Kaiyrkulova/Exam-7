import React from 'react';
import { Product } from '../../types';
import MenuButton from '../MenuButton/MenuButton';

interface ProductListProps {
    products: Product[];
    addProduct: (product: { name: string; price: number }) => void;
}

const OrderList: React.FC<ProductListProps> = ({ products, addProduct }) => {
    return (
        <div className="product-list">
            <h2>Меню</h2>
            <div className="menu-buttons">
                {products.map(product => (
                    <MenuButton key={product.id} product={product} addProduct={addProduct} />
                ))}
            </div>
        </div>
    );
};

export default OrderList;