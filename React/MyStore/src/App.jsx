import './App.css'
import Shop from './assets/shop.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './UIBlocks/Header/Header'
import { useSelector } from 'react-redux'
import { setProducts } from './data/dataSlices/ProductsSlice'
import { useDispatch } from 'react-redux'
import { fetchProducts } from './data/dataSlices/ProductsAsyncThunk'

function App() {

  const {products} = useSelector(state => state.products)
  const dispatch = useDispatch()

  // const fetchProducts = async () => {
    // https://dummyjson.com/products
    // also add category as a badge in-place of rating
    // dispatch(fetchProducts())
    // dispatch(setProducts(response.data))
  // }

  // [] -- dependency array, if empty, the effect will run only once after the initial render
  // if we have some state variables that we want to watch for changes, we can add them to the dependency array, and the effect will run whenever those variables change
  
  useEffect(() =>{
    dispatch(fetchProducts())
    // fetchProducts()
  }, [])
  
  return (
    <>
      <main>
        <section className='hero-section'>
          <div className="image-container">
            <img src={Shop} alt="shop-image" />
          </div>
          <div className="description">
            <h1>Welcome to MyStore</h1>
            <p>Discover the best products at unbeatable prices. Shop now and experience the difference!</p>
            <button className='shop-now-btn'>Shop Now</button>
          </div>
        </section>
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
      </main>
    </>
  )
}

export default App
