import './App.css'
import Logo from '/logo.png'
import Shop from './assets/shop.jpg'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    // https://dummyjson.com/products
    // also add category as a badge in-place of rating
    const response = await axios.get('https://fakestoreapi.com/products')
    setProducts(response.data)
  }

  // [] -- dependency array, if empty, the effect will run only once after the initial render
  // if we have some state variables that we want to watch for changes, we can add them to the dependency array, and the effect will run whenever those variables change
  useEffect(() =>{
    fetchProducts()
  }, [])
  
  return (
    <>
      <header>
        <div className="logo-container">
          <img src={Logo} alt="MyStore logo" />
        </div>
        <nav>
          <a href="">home</a>
          <a href="">products</a>
          <a href="">about us</a>
          <a href="">contact</a>
          <a href="">sign in</a>
        </nav>
      </header>
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
      <footer></footer>
    </>
  )
}

export default App
