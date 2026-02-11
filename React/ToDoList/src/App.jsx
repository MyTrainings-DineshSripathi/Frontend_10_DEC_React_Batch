import React, { useState } from 'react'


/* 
  Algo : To Do list
    1. read a task
      req : 
        a. variable to store the task
          const [task,  setTask] = useState("")

    2. create a structure (HTML)
      a. input field --> we give task in it.
      b. button -- add feature
    
    3. Read the input field value (step2) and store it inside the task variable which created in step1. To help us with reading the input value we use onChange event handler.
      3.1 : When we are changing any text inside the input field we will trigger the onChnage handler. onChange handler will alwways calls the callback function.

      req : 
        a. create a callback fn which accepts/stores the event object --> create a param with any name: 
            const handleTask = (e) => {
              
            } 

            <input type='text' onChange={handleTask} />

        b. To read the changed value from the input field we have to select the input field using "e.target"
        c. After selecting the input field we have to use teh input field attribnute of value to select the task.
            "e.target.value"
        d. store the value inside the task which create in step1. As it is a a useState value we have to use the setFunction.
                      setTask(e.target.value)

      4. create array to store all the tasks at a single location.
          const [tasks, setTasks] = useState([])

      5. After reading the task from the input field we have to click on the add button to store it in the tasks (step4).
        5.1  : To add the task into tasks we have to apply event listener to the button -- > onClick 
                <button onClick = {} > add </button>
        5.2 : For the onClick event we have to pass the function which will update the tasks.
              const addTask = () => {
                setTasks([...tasks, task])  
              }
        5.3  : the 5.2 step will update the tasks with the latest tasks
      
      6. Now after updating the tasks array we have to display. To display we are create a duplicate array of elements with each task with the help of map()
        {tasks.map((task, index) => <element>{task}</element>)}
        

          
*/



function App() {
  // to store the task value we are using task variable
  let [task, setTask] = useState("")
  // to store the tasks we are using tasks array
  const [tasks, setTasks] = useState([])

  console.log(["something", ...tasks])

  const handleTask = (e) => {
    setTask(e.target.value)
  }

  const addTask = () =>{
    setTasks([...tasks, task])
    setTask("")
  }

  return (  
    <>
      <div>
        {/* to store the task value we are using task variable */}
        <input type="text" value={task} onChange={handleTask} />
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        {tasks.length > 0 ? <div>
          {console.log(tasks)}
          {tasks.map((item, index) => <p key={index}>{item}</p>)}
        </div> : <div>no tasks to display. Enter a task</div>}
      </div>
    </>
  )
}

export default App