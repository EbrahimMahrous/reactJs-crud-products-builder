// ** Import `uuid` to generate unique IDs for each product.
import { v4 as uuid } from 'uuid';
import { IProduct } from "../interfaces";





export const ProductList: IProduct[] = [
    {
        id: uuid(),
        title: 'Tesla Model S',
        description: 'A high-performance electric sedan with a long range and cutting-edge technology.',
        imageURL: '../src/assets/cars/TeslaModelS.jpg',
        price: '$79999',
        colors: ['#000', '#fff', '#ccc', '#ff0000'],
        category: {
            name: 'Electric Cars',
            imageURL: '../src/assets/cars/TeslaModelS.jpg',
        },
    },
    {
        id: uuid(),
        title: 'Ford Mustang Mach-E',
        description: 'An electric SUV inspired by the classic Mustang, offering great performance and range.',
        imageURL: '../src/assets/cars/FordMustangMach-E.jpg',
        price: '$56995',
        colors: ['#000', '#ff0000', '#fff', '#0057b8'],
        category: {
            name: 'SUV',
            imageURL: '../src/assets/cars/FordMustangMach-E.jpg',
        },
    },
    {
        id: uuid(),
        title: 'BMW M3',
        description: 'A powerful sports sedan with a turbocharged inline-six engine and sharp handling.',
        imageURL: '../src/assets/cars/BMWM3.jpg',
        price: '$74995',
        colors: ['#000', '#ffffff', '#00ff00', '#0000ff'],
        category: {
            name: 'Sports Cars',
            imageURL: '../src/assets/cars/BMWM3.jpg',
        },
    },
    {
        id: uuid(),
        title: 'Mercedes-Benz G-Class',
        description: 'A luxury off-road SUV with a boxy design and a powerful V8 engine.',
        imageURL: '../src/assets/cars/Mercedes-Benz G-Class.jpg',
        price: '$139900',
        colors: ['#000', '#ffffff', '#808080', '#006400'],
        category: {
            name: 'Luxury SUV',
            imageURL: '../src/assets/cars/Mercedes-Benz G-Class.jpg',
        },
    },
    {
        id: uuid(),
        title: 'Porsche 911 Turbo S',
        description: 'An iconic sports car with a twin-turbo flat-six engine, delivering extreme speed and handling.',
        imageURL: '../src/assets/cars/Porsche 911 Turbo S.jpg',
        price: '$216300',
        colors: ['#000', '#ff0000', '#ffffff', '#cccccc'],
        category: {
            name: 'Supercars',
            imageURL: '../src/assets/cars/Porsche 911 Turbo S.jpg',
        },
    }
];
