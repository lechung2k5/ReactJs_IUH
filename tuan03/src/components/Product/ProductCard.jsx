import React from 'react'

const ProducCard = React.memo(({product}) => {
  
  return (
    <div className="product-list">
        <div className="product-card">
            <img src={product.thumbnail} alt="{product.title}" />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
        </div>
    </div>
  )
})

export default ProducCard