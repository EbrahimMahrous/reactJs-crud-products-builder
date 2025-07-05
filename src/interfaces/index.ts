import { ProductName } from "../types"





export interface IProduct{
    id?: string | undefined,
    title: string,
    description: string,
    imageURL: string,
    price: string,
    colors: string[],
    category: {
        name: string,
        imageURL: string
    }
}

export interface IFormInput{
    input: any
    id:  string,
    name: ProductName,
    lable: string,
    type: string,
}


export interface ICateogry{
    id: string,
    name: string,
    imageURL: string
}