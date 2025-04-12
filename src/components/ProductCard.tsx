import { IProduct } from "../interfaces";
import { txtSlicer } from "../utils/function";
import Image from "./Image";
import Button from "./UI/Button";
import CircleColor from "./UI/CircleColor";





interface IProps {
    product: IProduct;
}
const ProductCard = ({product}: IProps) => {
    const {title, description, imageURL, price, colors, category} = product

    // ** Render
    const renderProductColors = colors.map(color => (
        <CircleColor key={color} color= {color} /> ))


    return (
        <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col">
            <Image 
            imageURL = {imageURL}
            alt = {product.title}
            className= "rounded-md mb-2 h-full"
            />
            
            <h3 className="mb-4 font-semibold">{title}</h3>
            <p className="text-gray-400">{txtSlicer(description)}</p>


            <div 
                className="flex items-center my-5 flex-wrap space-x-1"
            >
              {renderProductColors}
            </div>

            <div className="flex items-center justify-between">
                <span>{price}</span>
                <Image 
                imageURL = {category.imageURL}
                alt = {category.name}
                className= "w-10 h-10 rounded-full object-center"
                />
            </div>

            <div className="flex items-center justify-evenly space-x-2 mt-5">
                <Button 
                    className="bg-indigo-400"
                    onClick= {()=>{
                        return console.log('clicked');
                    }}
                >
                    Edit
                </Button>
                <Button className="bg-red-400">Delete</Button>
            </div>  
        </div>
    );
}

export default ProductCard;