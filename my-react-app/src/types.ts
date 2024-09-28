import hamburgerImage from './assets/hamburger.png';
import friesImage from './assets/fries.png';
import coffeeImage from './assets/coffee.png';
import pizzaImage from './assets/pizza.png';
import saladImage from './assets/salad.png';
import icecreamImage from './assets/iceCream.png';
import lemonadeImage from './assets/lemonade.png';
import milkshakeImage from './assets/milkshake.png';

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

export const products: Product[] = [
    { id: 1, name: 'Hamburger', price: 80, image: hamburgerImage},
    { id: 2, name: 'Fries', price: 50, image: friesImage},
    { id: 3, name: 'Coffee', price: 30, image: coffeeImage},
    { id: 4, name: 'Pizza', price: 100, image: pizzaImage},
    { id: 5, name: 'Salad', price: 70, image: saladImage},
    { id: 6, name: 'IceCream', price: 60, image: icecreamImage},
    { id: 7, name: 'Lemonade', price: 20, image: lemonadeImage},
    { id: 8, name: 'Milkshake', price: 40, image: milkshakeImage},
];