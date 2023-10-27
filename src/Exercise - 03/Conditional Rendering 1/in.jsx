import React, { useState } from "react";
import { MainBody } from "./s";
import { Data } from "./d";
import "./in.css"

const List = ["Things 1", "Things 2"]
let i = 2

// export const Render = () => {

//     const [val , setVal] = useState(List)

//     const AddItem = () => {
//         const newItem = `Things ${i += 1}`
//         return setVal((prev) => [...prev, newItem]);
//     }

//     return (
//       <div>
//         <button
//           onClick={AddItem}
//         >
//           Add Item
//         </button>
//         <div id="di">
//         { val.map((item) => {
//             return <p>{item} </p>;
//           })}
//         </div>
//       </div>
//     );
// }

// export const Render = () => {


//     const date = new Date()
//     let status
//     const hours = 5

//         if (hours >= 4 && hours <= 12 && hours <= 12) {
//             status = `Good Morning ${hours%12} AM`
//         } else if (hours > 12 && hours <= 17) {
//             status = `Good Afternoon ${hours%12} PM`
//         } else if (hours > 17 && hours <= 20) {
//             status = `Good Evening ${hours%12} PM`
//         } if (hours >= 0 && hours <= 4) status = `Good Night ${hours % 12} AM`
//         else if (hours > 20 && hours <= 23) status = `Good Night ${hours % 12} PM`
    
//     return <Framer hour = {hours} stat = {status} Name = {"Vanamuthu V"} />
// }

// const Framer = (props) => {

//     const { hour, stat, Name } = props

//     return (
//         <div>
//             <p>Status : {stat}  {Name}</p>
//             <p>Hours : { hour}</p>
//         </div>
//     )
// }

// export const Render = () => {

//     const [val, setVal] = useState("True")

//     return (
//         <div>
//             <button onClick={() => {setVal("False")}}>Click To the State Value</button>
//         <p>Hello</p>
//         <p>{val}</p>
//       </div>
//     );
// }

// export const Render = () => {

//     let [value, setValue] = useState(0)
  
//     return (
//         <div>
//             <button onClick={() => { setValue(prev => prev + 1) }}>+</button>
//             <p>{value}</p>
//             <button onClick={() => { setValue(prev => prev - 1) }}>-</button>
//         </div>
//     )
// }

// export const Render = () => {
//   const [contact, setContact] = useState({
//     FirstName: 'Vanamuthu',
//     LastName: 'V',
//     PhoneNumber: 9741817837,
//     Email: 'HeyBoy@gmail.com',
//     isLiked : true
//   })

//   const Change = () => {
//     console.log("Clicked")
//     setContact(prev => {

//       const { Email, ...rest } = prev
//       return rest
//     })
//   }

//   return (
//     <div onClick={Change}>
//       <p>Tester</p>
//       <p>Name : {contact.FirstName + contact.LastName}</p>
//       <p>Phone Number : {contact.PhoneNumber}</p>
//       <p>{contact.Email}</p>
//       <p> Liked : {contact.isLiked ? "You Liked" : "You Unliked"}</p>
//     </div>
//   );

// }

export const Render = () => {

  const [data, setData] = useState(Data)

  const Toggle = (id) => {
    setData(prev => {
      const newArray = []
      for (i = 0; i < data.length; i++) {
        const Current = prev[i].id

        if (Current === id) {
          const newObj = {
            ...prev,
            id : id,
            on : !prev[i].on
          }
          newArray.push(newObj)
        } else {
          newArray.push(prev[i])
        }
      }
      return newArray
    })}

  return (
    <div className="Hi">
      {data.map((items) => {
        return <MainBody {...items} key = {items.id} func = {Toggle} />
      })}
    </div>
  )
}