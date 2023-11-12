# Importing Files in React
```
Basically the media that is the images, audio, videos and many other media files are stored in the "public" folder, which is a common method in accessing the media

- Rules For Import :

   ```
    * public/folder/img.png -> Normal path from public to the image file (image in our case)

    * The number of "../" depends upon the folder like for Example :
        You have a image 'A' in "public/images/A.png" and you have to import the image from public folder to "src/Project A/data.jsx" :

        - Therefore the Path can be written as :
            * "../../public/images/A.png"

            - The First "../" is for "src"
            - The Second "../" is for "Project A"   
   ```
```

# React Basics - A Quick Brush Up
```
Basically we create a "div" in the HTML file given the id="root" Which acts as a container

Rendering Syntax :
ReactDOM.createRoot(getElementById("root)).render(<React.StrictMode>Code Here / Component </React.StrictMode>)

- Component must start with 'Capital' letter and preferably 'PascalCase'

- Every Component must have a return type and "only one" parent should be returned with many number of siblings embedded in it
```

## <-- Exercise - 01 -->
```
- Learnt About using the components, the ::marker property and background with both image and color at same time in CSS
- ::marker property is used to select the bulletins in the unordered list
-  background = url('Image path') no-repeat/repeat color;
```

## About Props 
```
- Props are nothing but properties used to pass the parameter the function 
- Props's values can be changed while passing but not after passed 
- Example : 1) <Hello Value = "Hell Hello" /> (Can Be Changed)
            2) const Hello = (props) => {
                    props.Value = "Hello" (Can't be done because "props are immutable")
              }
```

## Exercise - 02
```
- Here We are about to make a small part of a Hotel webpage
- Learnings :
    - About the conditional rendering 
    - About the && conditional operator 
    - (condition) && statement --> if the condition is true (for Integer 0 is false and for String undefined or null is false) then the statement will execute
    - Don't Directly pass the value from the destructed props because (i don't the reason) but creating a local variable inside the component and manipulate the truth about the condition and update to the local variable and the render it.
```

## Hooks In React 
```
- States :
    States are the variables declared inside a function, when the value of the of the variable are changed then the changed value will be displayed/saved
```

### useState
```
- React.useState("") return a array
- Basically useState has two entity one is a variable and another one is function
- The variable here is used to store the value 
- The function is used to update the state means whenever the function is called then the variable value      get updated automatically

- When you are in need of the old value then just pass a callback function in the useState function like :
    setValue ((prev) => prev + 1)

- When a callback function is used the useStates function passes the previous value in "default"

- "useState will be on affect only when changes are made means when u are changing the previous value then the useState will work when you assign a new value "It won't respond means it won't do it's job""

- When state changed the useState will rerender the 
    i) Parent Component
    ii) The Child Component relying on the state variable (means wherever the state variable is used, the used child components (child component may be embedded in the component or may be imported) will be rerendered)

- Note : 

  1)  The onclick attribute can only used in DOM Elements like (<p>,<img>,<div>...)
    Ex : There May be a case that you are import a component and you have to set a onclick attribute, id you do like : <Star onclick={ADD} /> --> This doesn't work because Star is not a DOM element

    Solution : just pass the function like <Star handle={ADD} />
                In Star Component write :

     const Star = (props) => {
        return (
            <div onclick={props.ADD}>
                // Code goes here..
            </div>
        )
    } // This Works Better

    2) Passing parameter to a onclick :

        -> onclick = {props.APP(id)}  ~~This is Wrong~~
        -> onclick = {() => props.APP(id)} // This is Right, We use a function which returns and calls the function 

    3) Updating the object in react :

        -> setData(prev => {...prev, on : !prev.on}) // Where on is a key in the object

    4) Updating a Object Key inside a array

        setfirstTime((prev) =>
            prev.map((item) => {
                return item.id === id
                    ? { ...item, isSelected : !item.isSelected}
              : item;
          })
        );
```

### Forms In React

```
- We Have the Input tag and to obtain the value of the input tag we normally use "event.target.value". Here the problem is the value od the input is controlled by the input box but in react it is a good practice to have every thing controlled by the react. for that lets take a example :

    const forms = () => {
        const[formdata, setFormdata] = useState({fn : ""})

        const Handler = (event) => {
        setFormdata(prev => {
            event.target.name
            return {
                ...prev,
                [event.target.name] : event.target.value // Value changing based on the input box to prevent add a value in input
            }
        })
    }

        return (
            <input
            type="text"
            placeholder="First Name"
            name="fn"
            value = {formdata.fn} // Corrected : now value updated based on react state
            onChange={(event) => {
              Handler(event);
            }}
          />
        )
    }

    * For More Information Check Out "Forms" folder
```


### useEffect
```
- Itz a react hooks which we can determine that how much time does the function or the component must be rendered

- The useEffect will be executed at the beginning of the page loads and the it loads after the return statement is executed means after setting the UI

- It consists of two components one is the function and the other one is the dependency array 

- The function consists of the logic what to do and the dependency array consists of the number of times the function must executed

- useEffect will strictly follows the dependency array

- useEffect will run atleast once

- useEffect runs twice when the strictmode is on in react even though you have a empty dependency array

- Hooks can't placed in conditional but inside the Hooks You can place a conditional for the statement

- [] - Only renders initial and also acts as a Cleaning function

- useEffect will be used when you have to change a data from the outside the component 

- It can mainly used in calling a function which a particular thing changes means the you have a state and a useeffect you need to call a function whnever the state chages therefor you use useEffect

    useEffecr(() => {
        //function statement
    } , [state variable])
```

#### Memory Leak In UseEffect
```
- A memory leak in React. js can occur when you have objects or resources that are no longer needed but are still being referenced by the application, preventing them from being garbage collected.

- Actually When Have a Problem called Memory Leak in useEffect

- To Resolve that use a cleaning function // Refer : src\Exercise - 03\Simple Exercise\Display.jsx

- In Simple clearing the useEffect
```

### useRef 
```
- // Refer : src\useRef\ref.jsx

- If we look back in our course we used a controlled input in the form practise sessions like for input we gave value and for checkbox we gave checked to over come that thing we are using useRef

- useRef are used to replace the controlled inputs and it won't rerender the stuff when changed

- Generally we use the event.target to get value and other stuff but it is ease to know using useRef

- It targets DOM
```

###  useReducer
```

- Always return a object 

- the reduce function must should have a return type 

- Personal : In my opinion that the useReduecer can be used in many ways but my opinion is 
    1. It can be used to update a single state
    2. It can be used to update a specific key in a object with the help of a switch or a ifelse statement

- useReducer is not a function and it is a value itself like it may of any kind like array or an object, so we can't do like state() that's wrong instead we can do like returning the whole state indead like return {...state}

- Passing the data to the reduce function
```

### useContext

#### PropDrilling [a relative link](src\PropDrilling\drill.jsx)
```
- prop drilling means we need a particular function or something at a particular time. so that let's consider that we have five function out of that a parent function. The functions are called in such a way that the one inside another means frist calls the second and second one calls the third and so on.

- Assume that you created a function in the parent component and you need to call the function in the 5th function. You can' t pass the function directly as i mentioned the functions are called one after one. And the only possible thing is to pass the function through the way to the last function and then calling it

This kind of stuff may become confuse in larger projects, Therefore we Use *useContext*

** useContext **


```