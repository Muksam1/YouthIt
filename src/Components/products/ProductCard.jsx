import React from 'react'
import Button from '../Common/Button'

const ProductCard = ({product}) => {
  return (
    <>
    <div className='border border-black bg-amber-50 px-4 py-4  rounded-lg'>

        <img src={product.img} alt="" className='rounded-lg' />

        <p className='text-black'>${product.price}</p>
       <h2 className='font-extrabold'>{product.name}</h2>
       <p className='text-gray-400'>{product.brand}</p>
     <Button 
     label= 'Buy now'
     color="text-black "/>

    </div>
    
    </>
  )
}

export default ProductCard