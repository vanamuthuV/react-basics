import React, { useState, useRef, useReducer } from "react";
import "./Reduce.css"

/*

This is using useState

const Store = [];

export const Render = () => {

    const InVal = useRef(null)
    const InAge = useRef(null)

    const [Array, setArray] = useState([])
    const [modals, setModals] = useState(false)
    const [data, setData] = useState({
        names: null,
        age : null
    })
    const[modal, setModal] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Entered")
        if (InVal.current.value && InAge.current.value) {
            console.log("Value Found And Submitted")
            setData({ names: InVal.current.value, age: InAge.current.value })
            Store.push(data)
            console.log(Store)
            setArray(Store)
            setModals(false)
        }
        else {
            console.log(modal)
            setModals(true);
            console.log(modal)
        }
    }

    return (
      <form onChange={handleSubmit} onSubmit={handleSubmit}>
            {modals && <h9>Input Or Age feild is empty please fill it up</h9>}
        <br></br>
        <input placeholder="Enter Name" ref={InVal} type="text"></input>
            <input placeholder="Enter Age" ref={InAge} type="text"></input>
           
        <button style={{paddingLeft : '5px'}} disabled = {modals}>Submit</button>
        <h5> Data</h5>
        {Array.map((item) => {
          return (
            <div>
              <p>{item.names}</p>
              <p>{item.age}</p>
            </div>
          );
        })}
      </form>
    );
} */

// This is using useReducer

/*
const Store = []
let Name,Age

const reducer = (state,action) => {
    if (action.type === 'Collect-it') { 
      console.log('Ran Succesfull')
      console.log(state)
      const N = Name.current.value
      const A = Age.current.value
      return [...state,{names : N,age : A}]
    } else console.log('Ran unSuccessfull')
}

export const Render = () => {

  const [state, dispatch] = useReducer(reducer, [{
      names: 'Tony Stark',
      age : 59
  }])
  
  const [Array,setArray] = useState([state])

  const ParallelUpdate = () => {
       Name = useRef();
       Age = useRef();
    }

    const Submited = (event) => {
      event.preventDefault()
      console.log("You Invoked Through onsubmit")
      setArray(state);
      dispatch({ type: "Collect-it" })
      console.log(Array)
    }

    return (
      <div>
        <form onSubmit={Submited} onChange={ParallelUpdate}>
          <input ref={Name} placeholder="Enter Name "></input>
          <br></br>
          <input ref={Age} placeholder="Enter Age"></input>
          <br></br>
          <button type="submit">Submit</button>
        </form>
            <div>
                <h5>Data</h5>
                {Array.map((items) => {
                    return (
                      <>
                        <p>{items.names}</p>
                        <p>{items.age}</p>
                      </>
                    );
                })}
        </div>
      </div>
    );
} */


/*
const reduce = (state,action) => {
  if (action.type === 'Incre') {
    console.log(state)
    return state = state + 1
  }
}

export const Render = () => {
  const [state, dispatch] = useReducer(reduce, 0)

  const Incre = () => {
    return dispatch({type : 'Incre'})
  }

  return (
    <div>
      <h1>useReducer</h1>
      <p>{state}</p>
      <button onClick={Incre}>Click Me</button>
    </div>
  );
}*/

import { AddTask } from "./Addtask";

export const Render = () => {

  const [showadd, setShowadd] = useState(false);
  const [data, setData] = useState([])

  const ShowAdd = () => {
    setShowadd(prev => !prev)
    console.log(showadd)
  }

  const EmployeDisplayer = (Array) => {
    console.log(Array)
    setData(Array)
  }

  return (
    <div>
      <h1>Employee List Manager</h1>
      <button onClick={ShowAdd}>Add Employee</button>
      {showadd && <AddTask handleData={() => { EmployeDisplayer }} />}
      <h4>Emplyee Detials</h4>
      {data.map((item) => {
        <div>
          <h5>{item.names}</h5>
        </div>
      })}
    </div>
  );
}