import React, { createContext, useContext, useState } from "react";
import "./drill.css"


const Data = [{ id: 1, Name: 'Vanamuthu V' },
    { id: 2, Name: "Vanaselvi V" },
    {id : 3, Name : "Uma Maheshwari V"},
    { id: 4, Name: "Veludurai M" }
]

// Prop Drilling Method

/*export const Render = () => {
    const [Array, setArray] = useState(Data)
    
    const RemoveItem = (index) => {
        console.log(index)
        const NewArray = Array.filter(item => item.id !== index)
        setArray(NewArray)
    }

    return (
        <div>
            {console.log(Array)}
            <RenderingAgent Array={Array} RemoveItem = {RemoveItem} />
        </div>
    )
}

const RenderingAgent = (props) => {

    const {Array, RemoveItem} = props

    return (
         <div>
            {Array.map(item => {
                return (
                     <Rendering Name = {item.Name} id = {item.id} key={item.id} RemoveItem={RemoveItem} />
                 )
             })}
        </div>
    )
}

const Rendering = (props) => {

    const {Name, RemoveItem, id} = props

    return (
         <div>
             <p>{Name}</p>
            <button onClick={() => { RemoveItem(id) }} >Delete</button>
        </div>
    )
}*/

// useContext Method

const RemoveProvider = createContext()

export const Render = () => {
  const [Array, setArray] = useState(Data);

  const RemoveItem = (index) => {
    console.log(index);
    const NewArray = Array.filter((item) => item.id !== index);
    setArray(NewArray);
  };

  return (
      <RemoveProvider.Provider value={{ RemoveItem, Array}}>
      {console.log(Array)}
      <RenderingAgent />
    </RemoveProvider.Provider>
  );
};

const RenderingAgent = () => {
  const {Array} = useContext(RemoveProvider)

  return (
    <div>
      {Array.map((item) => {
        return (
          <Rendering
            Name={item.Name}
            id={item.id}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

const Rendering = (props) => {

    const Remove = useContext(RemoveProvider)
    const {RemoveItem} = Remove
  const { Name, id } = props;

  return (
    <div>
      <p>{Name}</p>
      <button
        onClick={() => {
          RemoveItem(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};