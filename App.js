 // This is for the useState
// import React,{useState} from "react";
// function App(){
//   let [counter,updateCounter] = useState(0)
//   return(
//     <>
//     <h1>Counter Value : {counter}</h1>
//     <button onClick={()=> {
//       updateCounter(++counter)
//     }}>Change</button>
//     </>
//   )
// }
// ====================
// import React from "react";
// class App extends React.Component {
//   state = {
//     counter: 0,
//   };
//   counter;
//   render() {
//     return (
//       <>
//         <h1>Counter Value: {this.state.counter}</h1>
//         <button
//           onClick={() => {
//             this.setState(
//               {counter: 7}
//             )
//           }}
//         >
       
//           Change
//         </button>
//       </>
//     );
//   }
// }
// export default App;
// import React from "react";

// class App extends React.Component{
//     state = {
//         product : "Real me 8 Pro",
//         price: 20000
//     }

//     constructor(){
//       super()
//       this.updatePrice  = this.updatePrice.bind(this)
//     }

//     render(){
//       return (
//         <>
//             <h1> product: {this.state.product}</h1>
//             <h1> product: {this.state.price}</h1>

//             <input id="price" type="number"/>
            
//             <button onClick={() =>{
//               let p = document.getElementById('price').value;

//               console.log(p)
//               // this.state.price = p
//               // console.log(this.state)

//               this.setState({
//                 price:p
//               })
//               console.log(this.state)
//             }}>Update</button>
//         </>
//       )
//     }
//     updatePrice(){
//       let p = document.getElementById('price').value
//       console.learn(p)
//       this.setState({
//         price : p 
//       },() => {
//         console.log(this.state)
//       })
//     } 
//   }

// export default App

// ===========================================
// What is State, useState hook, How to update State --> In the Functional Components

// import React,{useState} from "react";

// function App(){

//   let product = "Real me 8 Pro"
//   // let price = 160000

//   let{productname,updateName} = useState("Real me 8 pro")
//   let{price,updatePrice} = useState(17777)

//   return(
//     <>
//     <img src="" alt="This is the image "></img>
//       <h1>product : {productname}</h1>
//       <h1>price: {price}</h1>
//       <input id="pname"/>
//       <button onClick={() => {
//         let pname = document.getElementById('pname').value;
        
//         updateName((prev) => {
//           return prev + pname
//         })
//         updatePrice((prev) => {
//           return prev + pname
//         })
//         productname = pname
//         console.log(productname)
//       }}>Update</button>
//     </>
//   )
// }

// export default App
// =========================================
// TODO LIST 
// import { useState } from 'react'
// import './App.css'
// function App() {
//       let [todoInput, updateInput] = useState()

//       let [todoList, updateTodos] = useState(
//             [
//                   {
//                         id: 1,
//                         task: 'Learn React'

//                   },
//                   {
//                         id: 2,
//                         task: 'Learn Angulr'

//                   }
//             ]
//       )

//       let nextId = 3

//       function addNewTodo() {

//             if (todoInput == "") {
//                   alert("Add some task")
//             }
//             else {

//                   let newTodos = [
//                         ...todoList,
//                         {
//                               id: nextId++,
//                               task: todoInput

//                         }
//                   ]
//                   updateTodos(newTodos);
//                   updateInput("")
//             }

//       }

//       function deleteTodo(id) {
//             let filteredTodos = todoList.filter(
//                   (todo) => {
//                         return todo.id != id

//                   }
//             )
//             updateTodos(filteredTodos)



//       }


//       return (
//             <div className="container mt-5 w-50">
//                   <h3 className='text-center'>Todo App using React</h3>
//                   <div className="input-group">
//                         <input className="form-control" onChange={(e) => {
//                               let task = e.target.value;
//                               updateInput(task)

//                         }} type='text' value={todoInput} />
//                         <button onClick={() => {
//                               addNewTodo()
//                         }} className="btn btn-primary">Add</button>
//                   </div>
//                   <ul className="list-group mt-4">
//                         {
//                               todoList.map(
//                                     (todo) => {
//                                           return (
//                                                 <li key={todo.id} className="list-group-item">
//                                                       <p>{todo.task}</p>
//                                                       <button onClick={() => {
//                                                             deleteTodo(todo.id)
//                                                       }} className="btn"> ❌</button>
//                                                 </li>
//                                           )
//                                     }
//                               )
//                         }


//                   </ul>
//             </div>
//       )




// }

// export default App
// ======================================
// Maximilian Schwarzmüller Account interface
import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;