import React from 'react';
import { Product } from '../../types.ts';

interface MenuButtonProps {
    product: Product; // Используем Product вместо Menu
    addProduct: (product: { name: string; price: number }) => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ product, addProduct }) => {
    return (
        <button onClick={() => addProduct({ name: product.name, price: product.price })}>
            {product.name} - {product.price} KGS
        </button>
    );
};

export default MenuButton;