import ProductList from "../Components/products/Productlist"
import { productData } from "../constants/productData"


const Products = () => {
    const products = productData
    console.log(products[0])
  return (
    <>
   
   <div className="grid grid-cols-4 pt-2 px-26"><ProductList products={products}/></div>
    </>
  )
}

export default Products