import React from 'react';
import { Product } from '../../types';

interface MenuButtonProps {
    product: Product;
    addProduct: (product: Product) => void;
}

const MenuButton: React.FC<MenuButtonProps> = React.memo(({ product, addProduct }) => {
    const handleClick = () => {
        addProduct(product);
    };

    return (
        <button type="button" className="menu-button" onClick={handleClick}>
            <img src={product.image} alt={product.name} className="menu-button-image" />
            <div className="menu-button-text">
                {product.name} - {product.price} KGS
            </div>
        </button>
    );
});

export default MenuButton;