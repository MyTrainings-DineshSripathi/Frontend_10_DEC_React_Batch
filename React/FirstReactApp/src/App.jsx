import { useEffect, useState } from 'react'
import './App.css'
import Component1 from './Component1'
import ProductCard from './ProductCard'

function App() {

  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(30)
  const [selectedProduct, setSelectedProduct] = useState({})

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    fetchData()
  }, [limit])


  async function fetchData(){
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}`)
    const data = await response.json()
    console.log(data.products)
    setProducts(data.products)
  }

  async function fetchProductDetails(id){
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await response.json()
    console.log(data)
  }

  /* 
    setTimeout : 
      it will executes the function after finishing the given time
        syntax : 
          setTimeout(callbackFn, time)
    setInterval
      it will keep on executing the function after completing the interval time.
        syntax : 
          setInterval(callbackFn, time)
  */

  // console.log("line 1")
  // console.log("line 2")
  // console.log("line 3")
  // // setInterval(() => {
  // //   console.log("line 4")
  // // }, 3000)
  // console.log(fetch('https://dummyjson.com/products'))
  
  // console.log("line 5")
  // console.log("line 6")
 
  /* 
    API -- promise(resolve, reject)
      fetch(url, headers(optional))

  */

  /* 
    object destructuring : 
      seperate the values from the object as a variable
  */

    // let a = {
    //         name : "dummy", 
    //         age : 27
    //       }
    
    // console.log(a)

    // const {age, name} = a

    // console.log(name)
    // console.log(age)

  return (
    <>
    {/* Popup section */}
      <section>
        {selectedProduct?.title && (
          <div className="modal-overlay">
            <div className="modal-container">
              <button 
                className="modal-close"
                onClick={() => setSelectedProduct({})}
              >
                ✕
              </button>

              <img 
                src={selectedProduct.thumbnail}
                alt={selectedProduct.title}
                className="modal-image"
              />

              <h2>{selectedProduct.title}</h2>
              <p className="modal-category">{selectedProduct.category}</p>
              <p className="modal-description">{selectedProduct.description}</p>

              <div className="modal-footer">
                <span className="modal-price">
                  ${selectedProduct.price}
                </span>
                <button className="modal-btn">
                  Add to Cart
                </button>
                <button className="modal-btn">
                  view product
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

        {/* products */}
      <div>
        {/* <Component1></Component1> */}
        <select onChange={(e) => {
          setLimit(e.target.value)
        }}>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <h2>Products</h2>
        {/* products container */}
        <section className='products-container'>
          {products.map((product) => <ProductCard product={product} setSelectedProduct={setSelectedProduct} />)}
          {/* 
            {
              name : "dummy",
              age : 47
            }
          */}
        </section>
      </div>
    </>
  )
}

// exportin app function
export default App
