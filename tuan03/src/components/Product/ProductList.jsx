import React from 'react'
import ProducCard from './ProductCard'

const ProductList = ({products}) => {
  return (
    <div className='product-list'>
        {products.map((p) => (
            <ProducCard key = {p.id} product = {p}/>
        ))}
    </div>
  )
}

export default ProductList