import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './DetailedProductsView.css'

function DetailedProductsView() {
    const {productId} = useParams()

    const [product, setProduct] = useState({})

    const [image, setImage] = useState('')

    async function fetchProductDetails(){
        const response = await fetch(`https://dummyjson.com/products/${productId}`)
        const data = await response.json()
        setProduct(data)
    }

    useEffect(() => {
        fetchProductDetails()
    }, [])

    useEffect(() => {
        setImage(product?.thumbnail || '')
    }, [product])
    
    return (
    <div className="product-page">

        {/* TOP SECTION */}
        <div className="product-container">

        {/* LEFT - Images */}
        <div className="product-images">
            <div className="main-image">
                <img src={image} alt={product?.title} />
            </div>

            <div className="thumbnail-list">
                {product?.images?.map((img, index) => (
                    <img 
                        onMouseOver={() => setImage(img)} 
                        key={index} 
                        src={img} 
                        alt="preview" 
                    />
                ))}
            </div>
        </div>

        {/* CENTER - Product Info */}
        <div className="product-info">
            <h1>{product?.title}</h1>
            <p className="brand">{product?.brand}</p>

            <div className="rating">
            <span>{product?.rating} ★</span>
            <span>({product?.reviews?.length} ratings)</span>
            </div>

            <hr />

            <div className="price-section">
            <span className="price">$ {product?.price}</span>
            <span className="discount">{product?.discountPercentage}% off</span>
            </div>

            <p className="description">{product?.description}</p>

            <div className="details">
            <p><strong>Category:</strong> {product?.category}</p>
            <p><strong>Stock:</strong> {product?.stock}</p>
            <p><strong>SKU:</strong> {product?.sku}</p>
            <p><strong>Warranty:</strong> {product?.warrantyInformation}</p>
            <p><strong>Shipping:</strong> {product?.shippingInformation}</p>
            <p><strong>Return Policy:</strong> {product?.returnPolicy}</p>
            </div>
        </div>

        {/* RIGHT - Buy Box */}
        <div className="buy-box">
            <h2>₹{product?.price}</h2>
            <p className="stock">{product?.availabilityStatus}</p>

            <div className="quantity">
            <label>Quantity:</label>
            <select>
                {[...Array(5)].map((_, i) => (
                <option key={i}>{i + 1}</option>
                ))}
            </select>
            </div>

            <button className="add-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
        </div>
        </div>

        {/* REVIEWS SECTION */}
        <div className="reviews-section">
        <h2>Customer Reviews</h2>

        {product?.reviews?.map((review, index) => (
            <div key={index} className="review-card">
            <div className="review-header">
                <strong>{review.reviewerName}</strong>
                <span>{review.rating} ★</span>
            </div>
            <p>{review.comment}</p>
            <small>{new Date(review.date).toLocaleDateString()}</small>
            </div>
        ))}
        </div>

    </div>
    )
}

export default DetailedProductsView