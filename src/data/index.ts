// ** Import `uuid` to generate unique IDs for each product.
import { v4 as uuid } from 'uuid';
import { ICateogry, IFormInput, IProduct } from "../interfaces";


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
        colors: ["#000000", "#4B4B4B", "#C0392B", "#2C3E50", "#145A32", "#E67E22", "#D4AC0D", "#2980B9", "#BDC3C7"],
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
        colors: ["#000000", "#4B4B4B", "#C0392B", "#2C3E50", "#145A32", "#E67E22", "#D4AC0D", "#2980B9", "#BDC3C7"],
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
        colors: ["#000000", "#4B4B4B", "#C0392B", "#2C3E50", "#145A32", "#E67E22", "#D4AC0D", "#2980B9", "#BDC3C7"],
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
        colors: ["#000000", "#4B4B4B", "#C0392B", "#2C3E50", "#145A32", "#E67E22", "#D4AC0D", "#2980B9", "#BDC3C7"],
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
        colors: ["#000000", "#4B4B4B", "#C0392B", "#2C3E50", "#145A32", "#E67E22", "#D4AC0D", "#2980B9", "#BDC3C7"],
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
      type: "text",
      input: undefined
    },
    {
      id: "description",
      name: "description",
      lable: "product description",
      type: "text",
      input: undefined
    },
    {
      id: "image",
      name: "imageURL",
      lable: "product Image URL",
      type: "text",
      input: undefined
    },
    {
      id: "price",
      name: "price",
      lable: "product price",
      type: "text",
      input: undefined
    }
]


export const colors: string[] = [
    "#000000",
    "#4B4B4B",
    "#C0392B",
    "#2C3E50",
    "#145A32",
    "#E67E22",
    "#D4AC0D",
    "#2980B9",
    "#BDC3C7",
]


export const categories: ICateogry[]  = [
    {
      id: uuid(),
      name: 'SUV',
      imageURL: 'https://images.unsplash.com/photo-1601758123927-4c8f2a0b3d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: uuid(),
      name: 'Toyota',
      imageURL: 'https://images.unsplash.com/photo-1593642632859-2e0a3b8c4f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: uuid(),
      name: 'Sedan',
      imageURL: 'https://images.unsplash.com/photo-1603787081182-1e199b047f49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: uuid(),
      name: 'BMW',
      imageURL: 'https://images.unsplash.com/photo-1605283657703-03b3f6a9b46d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: uuid(),
      name: 'Mercedes',
      imageURL: 'https://images.unsplash.com/photo-1617208044149-6c40879e92b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: uuid(),
      name: 'Coupe',
      imageURL: 'https://images.unsplash.com/photo-1616596879325-bd9a4e73ec04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: uuid(),
      name: 'Tesla',
      imageURL: 'https://images.unsplash.com/photo-1593941707874-d6b1dbcc9fa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: uuid(),
      name: 'Honda',
      imageURL: 'https://images.unsplash.com/photo-1615361201693-8b4aa39db8d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: uuid(),
      name: 'Ford',
      imageURL: 'https://images.unsplash.com/photo-1563729784474-d77dbb933f5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: uuid(),
      name: 'Chevrolet',
      imageURL: 'https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    }
  ];
  
