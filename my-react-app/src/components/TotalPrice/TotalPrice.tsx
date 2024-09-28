import React from 'react';

interface TotalPriceProps {
    total: number;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ total }) => {
    return (
        <div className="total-price">
            <h3>Total price: {total} KGS</h3>
        </div>
    );
};

export default TotalPrice;