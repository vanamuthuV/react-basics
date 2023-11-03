import React, { useEffect, useState } from "react";

export const Render = () => {

    const [count, setCount] = useState(0)


    useEffect(() => {
        console.log("Hello I Ran")
    }, [count])
    
    const Incre = () => {
        setCount(prev => prev + 1)
    }

    return (
      <>
            <h1> Count : {count}</h1>
            <button onClick={Incre}>Click Me</button>
      </>
    );
}