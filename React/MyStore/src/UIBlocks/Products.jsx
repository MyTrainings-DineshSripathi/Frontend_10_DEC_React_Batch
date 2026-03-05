import React from 'react'
import Header from './Header/Header'
import { useSelector } from 'react-redux'

function Products() {
    const {products} = useSelector(state => state.products)
  return (
    <>
        <section className='products-section'>
          <h2>Our Products</h2>
          <div className="products-container">
            {(products.length > 0) ? products.map((product) => (
              <div key={product.id} className="card">
                <div className="image-container">
                  <img src={product.image} alt={product.title} />
                  <div className="rating">{product.rating.rate}</div>
                </div>
                <div className="product-info">
                  <div className="title">{product.title}</div>
                  <div className="price">${product.price}</div>
                </div>
                <button>Add to Cart</button>
              </div>
            )) : <p>Loading.....</p>}
          </div>
        </section>
    </>
  )
}

export default Products