// ** Components
// import { Button, Input } from "@headlessui/react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/UI/Modal";
import Input from "./components/UI/Input";
import Button from "./components/UI/Button";
// ** Data
import { formInputsList, ProductList } from "./data";
// ** Hooks
import { ChangeEvent, useState } from "react";
import { IProduct } from "./interfaces";





export default function App(){
    // ** State
    const [product, setProduct] = useState<IProduct>({
      title: '',
      description: '',
      imageURL: '',
      price: '',
      colors: [],
      category: {
        name: '',
        imageURL: ''
      }
    })

    const [isOpen, setIsOpen] = useState(false)

    // ** Handler
    const openModel = () => {setIsOpen(true)}
    const closeModel = () => {setIsOpen(false)}
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      const {value, name} = e.target
      setProduct({
        ...product,
        [name]: value,
      })
    }
    console.log(product)

    // ** Renders
    const renderProductList = ProductList.map((product)=>{
      return <ProductCard key={product.id} product= {product}/>
    })

    const renderFormInputList = formInputsList.map((input => {
      return <div className="flex flex-col">
        <label htmlFor= {input.id} className="mb-[2px] text-sm font-medium text-gray-700">{input.lable}</label>
        <Input 
        type= 'text' 
        id= {input.id} 
        name= {input.name}
        value= {product[input.name]}
        onChange= {onChangeHandler}
        />
      </div>
    }))
    return (
      <main className="container mx-auto sm:p-8 lg:p-16 xl:p-24 2xl:p-28">
        <Button 
        className="bg-indigo-400 hover:bg-indigo-500 p-4 w-full rounded-md text-white"
        onClick={openModel}
        >
          ADD</Button>
        
        <div className=" m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md ">
          {renderProductList}
        </div>
  
        <Modal isOpen= {isOpen} closeModal={closeModel} title="ADD A NEW PRODUCT">
          <form className="space-y-3">
            {renderFormInputList}
            <div className="flex items-center space-x-3">
              <Button className="bg-indigo-400 hover:bg-indigo-500 p-4 w-full rounded-md text-white">Submit</Button>
              <Button className="bg-red-400 hover:bg-red-500 p-4 w-full rounded-md text-white">Cancel</Button>
            </div>
          </form>
        </Modal>
      </main>
    );
}
