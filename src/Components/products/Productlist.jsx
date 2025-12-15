
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
  return (
   <>
   
    {
        products.map((product)=>(
            <div className=' tex-2xl m-10 mx-6'>
                <ProductCard product={product}/>
            </div>
        ))
    }
   
   </>
  )
}

export default ProductList