import React, { useReducer, useRef } from "react";

const backUpStore = []

const reduce = (state, action) => {

  const Val = action.type
  switch (Val) {
    case 'UptName': console.log("Hello I'm Updating the Name")
      console.log(state)
      return {
        ...state,
        names : action.NameValue
      }
    case 'UptClass': console.log("Hello I'm Updating the Class")
       console.log(state);
       return {
         ...state,
         claz: action.ClassValue
       };
    case 'UptUsn': console.log("Hello I'm Updating the USN")
       console.log(state);
       return {
         ...state,
         usn: action.UsnValue,
      };
    case 'UpdtWhole': console.log("Updating The whole state")
      backUpStore.push({
        ...state,
        names: action.NameValue,
        claz: action.ClassValue,
        usn : action.UsnValue
      })
      return console.log(backUpStore)
    default : console.log("Error in Resolving the action type")
  }
}

export const AddTask = (props) => {

  const {handleData} = props

  const [state, dispatch] = useReducer(reduce, {})
    const InNaval = useRef("name");
    const InClval = useRef("class");
    const InRoval = useRef("USN");

    const UpdateName = () => {
      dispatch({
        type: "UptName",
        NameValue: InNaval.current.value,
      });
    };

    const UpdateClass = () => {
      dispatch({
        type: "UptClass",
        ClassValue: InClval.current.value,
      });
    };

    const UpdateUsn = () => {
      dispatch({
        type: "UptUsn",
        UsnValue: InRoval.current.value,
      });
    };

  const Passer = (event) => {
    event.preventDefault()
    handleData(backUpStore)
    dispatch({
      type: 'UpdtWhole',
      NameValue: InNaval.current.value,
      ClassValue: InClval.current.value,
      UsnValue : InRoval.current.value
    })
    InNaval.current.value = ''
    InClval.current.value = ''
    InRoval.current.value = ''
    {() => {
      handleData(backUpStore);
    };}
  }

    return (
      <form onSubmit={(event) => Passer(event)}>
        <p>Adding Task</p>
        <input onChange={UpdateName} placeholder="Name" ref={InNaval} type="text"></input><br></br>
        <input onChange={UpdateClass} placeholder="Class Studing" ref={InClval} type="text"></input><br></br>
        <input onChange={UpdateUsn} placeholder="USN" ref={InRoval} type="text"></input><br></br><br></br>
        <button type="Submit" >Add</button>
      </form>
    );
}