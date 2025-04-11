// ** Components
// import { Button, Input } from "@headlessui/react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/UI/Modal";
import Input from "./components/UI/Input";
import Button from "./components/UI/Button";
// ** Data
import { formInputsList, ProductList } from "./data";
// ** Hooks
import { ChangeEvent, FormEvent, useState } from "react";
import { IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";





export default function App(){
  const defaultProductObj = {
    title: '',
      description: '',
      imageURL: '',
      price: '',
      colors: [],
      category: {
        name: '',
        imageURL: ''
      }
  }
    // ** State
    const [product, setProduct] = useState<IProduct>(defaultProductObj)
    const [errors, setErrors] = useState({title: '', description: '', imageURL: '', price: ''})
    const [isOpen, setIsOpen] = useState(false)

    // ** Handler
    const openModel = () => {setIsOpen(true)}
    const closeModel = () => {setIsOpen(false)}
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target
      // ** Set Product
      setProduct({
        ...product,
        [name]: value,
      })
      // ** Clear Error for UX 
      setErrors({
        ...errors,
        [name]: ''
      })
    }
    const onCancel = () => {
      // ** Clear
      console.log('cancel')
      setProduct(defaultProductObj)
      closeModel()
    }
    const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
      e.preventDefault()
      const {title, description, imageURL ,price} = product
      const errors = productValidation(
        {
          title, 
          description, 
          imageURL, 
          price
        })
      // ** check if any property has a value of "" && check if all properties have a value of ""
      const hasErrorMsg = Object.values(errors).some((value => value === '')) && Object.values(errors).every((value => value === ''))
      if(!hasErrorMsg){
        setErrors(errors)
        return
      }
      console.log('Send Success')
    }






    // ** Renders
    const renderProductList = ProductList.map((product)=>{
      return <ProductCard key={product.id} product= {product}/>
    })

    const renderFormInputList = formInputsList.map((input => {
      return <div className="flex flex-col" key={input.id}>
        <label htmlFor= {input.id} className="mb-[2px] text-sm font-medium text-gray-700">{input.lable}</label>
        <Input 
        type= 'text' 
        id= {input.id} 
        name= {input.name}
        value= {product[input.name]}
        onChange= {onChangeHandler}
        />
        <ErrorMessage msg={errors[input.name]} />
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
          <form className="space-y-3" onSubmit={submitHandler}>
            {renderFormInputList}
            <div className="flex items-center space-x-3">
              <Button className="bg-indigo-400 hover:bg-indigo-500 p-4 w-full rounded-md text-white">Submit</Button>
              <Button className="bg-red-400 hover:bg-red-500 p-4 w-full rounded-md text-white" onClick={onCancel}>Cancel</Button>
            </div>
          </form>
        </Modal>
      </main>
    );
}
