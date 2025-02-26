// ** Components
import ProductCard from "./components/ProductCard";
// ** Data
import { ProductList } from "./data";





export default function App(){
    // ** Renders
    const renderProductList = ProductList.map((product)=>{
      return <ProductCard key={product.id} product= {product}/>
    })
    return (
      <main className="container mx-auto sm:p-8 lg:p-16 xl:p-24 2xl:p-28">
        <div className=" m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2 rounded-md ">
          {renderProductList}
        </div>
      </main>
    );
}
