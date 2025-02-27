// ** Components
import { Button } from "@headlessui/react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/UI/Modal";
// ** Data
import { ProductList } from "./data";
// ** Hooks
import { useState } from "react";




export default function App(){
    // ** State
    const [isOpen, setIsOpen] = useState(false)

    // ** Handler
    function openModel() {
      setIsOpen(true)
    }

    function closeModel() {
      setIsOpen(false)
    }

    // ** Renders
    const renderProductList = ProductList.map((product)=>{
      return <ProductCard key={product.id} product= {product}/>
    })
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
          <div className="flex items-center space-x-3">
            <Button className="bg-indigo-400 hover:bg-indigo-500 p-4 w-full rounded-md text-white">Submit</Button>
            <Button className="bg-red-400 hover:bg-red-500 p-4 w-full rounded-md text-white">Cancel</Button>
          </div>
        </Modal>
      </main>
    );
}
