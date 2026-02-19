import React from 'react'

function ProductCard({product, setSelectedProduct}) {
  return (
    <div key={product.id} onClick={() => setSelectedProduct(product)} className="product-card">
        <div className="product-image-wrapper">
            <img
            src={product.thumbnail}
            alt={product.title}
            className="product-image"
            />
        </div>

        <div className="product-content">
            <span className="product-category">
            {product.category}
            </span>

            <h3 className="product-title">
            {product.title}
            </h3>

            <p className="product-description">
            {product.description}
            </p>

            <div className="product-footer">
            <span className="product-price">
                ${product.price}
            </span>

            <button className="product-btn">
                Add to Cart
            </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard