import React from 'react';
import { Product } from '../../types';

interface MenuButtonProps {
    product: Product;
    addProduct: (product: { name: string; price: number }) => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ product, addProduct }) => {
    return (
        <button className="menu-button" onClick={() => addProduct({ name: product.name, price: product.price })}>
            <img
                src={(`../../assets/${product.name}.jpeg`)}
                alt={product.name}
                className="menu-button-image"
            />
            <div className="menu-button-text">
                {product.name} - {product.price} KGS
            </div>
        </button>
    );
};

export default MenuButton;