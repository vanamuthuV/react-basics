import React, { useState } from "react";
import "./Todo.css"

let localStore = []

export const Render = () => {

    const [todo, setTodo] = useState(localStore)

    const Add = () => {
        const Val = prompt("Enter a Task")
        setTodo(prev => [...prev, Val])
        console.log(todo)
    }

    const Delete = (val) => {
        const newArray = todo.filter((item) => item !== val)
        console.log(newArray)
        setTodo(newArray)
    }

    return (
        <div>
            <p style={{ fontSize: '30px', color: 'gray', textAlign: "center", marginBottom: '50px'}}>ToDo App By Vanamuthu V</p>
            <div className="Outer">
                <button id="Add" onClick={Add}>Add</button>
                <button id="DlAll" onClick={() => setTodo([])}>Delete All</button>
            </div>
            {todo.map((item) => {
                return (
                    <div className="Item">
                        <p>{item}</p>
                        <button onClick={() => Delete(item)}>Delete</button>
                     </div>
                )
            })}
        </div>
    )
}