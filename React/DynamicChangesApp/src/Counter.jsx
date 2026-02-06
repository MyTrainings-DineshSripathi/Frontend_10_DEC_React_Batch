import React, { useReducer, useState } from 'react'

// custom function to perform operation on the state
function reducer(state, action){
    switch(action.type){
        case "increase":
            return {value : state.value + 1}
        case "decrease":
            return {value : state.value - 1}
    }
}

function Counter() {

    

    // const [value, setValue] = useState(0)
    const initValue = {
        value : 0
    }
    const [state, dispatch] = useReducer(reducer, initValue)

    console.log(state)
    console.log(dispatch)

    const increaseButtonHandler = () => {
        setValue(value + 1)
    }

    const decreaseButtonHandler = () => {
        setValue(value - 1)
    }
  return (
    <div>
        <h1>Counter Component</h1>
        <div>{state.value}</div>
        <div>
            <button onClick={() => dispatch({type : "increase"})}>increase</button>
            <button onClick={() => dispatch({type : "decrease"})}>decrease</button>
        </div>
    </div>
  )
}

export default Counter