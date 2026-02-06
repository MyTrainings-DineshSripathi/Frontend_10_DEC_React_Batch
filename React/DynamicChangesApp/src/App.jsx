import React, { useReducer, useRef, useState } from 'react'
import Counter from './Counter'

function App() {
  // js -- Design
  // HTML -- Wall

  // let a = [1,2,3,4]

  // let [b,c,d,e] = a

  // console.log(b)

  let name = "Dennis"

  let number = useRef(0)

  console.log(useReducer(10))


  // console.log(useState(0))
  console.log(useRef(0))

  const [value, functionName] = useState("")

  // This function handles the change event for the input field and uses useState to update
  const handleChange = (e) => {
    name = e.target.value
    console.log(name)
    functionName(e.target.value)
  }

  // this function handles onclick event for the button
  const handleClick = () => {
    console.log("click handled")
    number.current += 1
  }

  return (
    <div>
      <input type="text" placeholder='Enter name' onChange={handleChange}/>
      <button onClick={handleClick}>click me</button>
      <h1>App {name}</h1>
      <h2>Value : {value}</h2>
      <h2>Number : {number.current}</h2>
      <Counter></Counter>
    </div>
  )
}

export default App