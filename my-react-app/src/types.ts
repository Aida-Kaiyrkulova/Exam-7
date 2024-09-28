export interface Product {
    id: number;
    name: string;
    price: number;
}

export const products: Product[] = [
    { id: 1, name: 'Hamburger', price: 80 },
    { id: 2, name: 'Fries', price: 50 },
    { id: 3, name: 'Coffee', price: 30 },
    { id: 4, name: 'Chicken Nuggets', price: 100 },
    { id: 5, name: 'Salad', price: 70 },
    { id: 6, name: 'Ice Cream', price: 60 },
];