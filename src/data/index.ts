// ** Import `uuid` to generate unique IDs for each product.
import { v4 as uuid } from 'uuid';
import { IFormInput, IProduct } from "../interfaces";


import TeslaImage from '../assets/cars/TeslaModelS.jpg';
import FordImage from '../assets/cars/FordMustangMach-E.jpg';
import BmwImage from '../assets/cars/BMWM3.jpg';
import MercedesImage from '../assets/cars/Mercedes-Benz G-Class.jpg';
import PorscheImage from '../assets/cars/Porsche 911 Turbo S.jpg';


export const ProductList: IProduct[] = [
    {
        id: uuid(),
        title: 'Tesla Model S',
        description: 'A high-performance electric sedan with a long range and cutting-edge technology.',
        imageURL: TeslaImage,
        price: '$79999',
        colors: ['#000', '#fff', '#ccc', '#ff0000'],
        category: {
            name: 'Electric Cars',
            imageURL: TeslaImage,
        },
    },
    {
        id: uuid(),
        title: 'Ford Mustang Mach-E',
        description: 'An electric SUV inspired by the classic Mustang, offering great performance and range.',
        imageURL: FordImage,
        price: '$56995',
        colors: ['#000', '#ff0000', '#fff', '#0057b8'],
        category: {
            name: 'SUV',
            imageURL: FordImage,
        },
    },
    {
        id: uuid(),
        title: 'BMW M3',
        description: 'A powerful sports sedan with a turbocharged inline-six engine and sharp handling.',
        imageURL: BmwImage,
        price: '$74995',
        colors: ['#000', '#ffffff', '#00ff00', '#0000ff'],
        category: {
            name: 'Sports Cars',
            imageURL: BmwImage,
        },
    },
    {
        id: uuid(),
        title: 'Mercedes-Benz G-Class',
        description: 'A luxury off-road SUV with a boxy design and a powerful V8 engine.',
        imageURL: MercedesImage,
        price: '$139900',
        colors: ['#000', '#ffffff', '#808080', '#006400'],
        category: {
            name: 'Luxury SUV',
            imageURL: MercedesImage,
        },
    },
    {
        id: uuid(),
        title: 'Porsche 911 Turbo S',
        description: 'An iconic sports car with a twin-turbo flat-six engine, delivering extreme speed and handling.',
        imageURL: PorscheImage,
        price: '$216300',
        colors: ['#000', '#ff0000', '#ffffff', '#cccccc'],
        category: {
            name: 'Supercars',
            imageURL: PorscheImage,
        },
    }
];


export const formInputsList: IFormInput[] = [
    {
        id: "title",
        name: "title",
        lable: "product Title",
        type: "text"
    },
    {
        id: "description",
        name: "description",
        lable: "product description",
        type: "text"
    },
    {
        id: "image",
        name: "imageURL",
        lable: "product Image URL",
        type: "text"
    },
    {
        id: "price",
        name: "price",
        lable: "product price",
        type: "text"
    }
]