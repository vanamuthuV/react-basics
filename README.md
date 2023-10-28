# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Importing Files in React

Basically the media that is the images, audio, videos and many other media files are stored in the "public" folder, which is a common method in accessing the media

- Rules For Import :

    * public/folder/img.png -> Normal path from public to the image file (image in our case)

    * The number of "../" depends upon the folder like for Example :
        You have a image 'A' in "public/images/A.png" and you have to import the image from public folder to "src/Project A/data.jsx" :

        - Therefore the Path can be written as :
            * "../../public/images/A.png"

            - The First "../" is for "src"
            - The Second "../" is for "Project A"   

## React Basics - A Quick Brush Up

Basically we create a "div" in the HTML file given the id="root" Which acts as a container

Rendering Syntax :
ReactDOM.createRoot(getElementById("root)).render(<React.StrictMode>Code Here / Component </React.StrictMode>)

- Component must start with 'Capital' letter and preferably 'PascalCase'

- Every Component must have a return type and "only one" parent should be returned with many number of siblings embedded in it

# <-- Exercise - 01 -->

- Learnt About using the components, the ::marker property and background with both image and color at same time in CSS
- ::marker property is used to select the bulletins in the unordered list
-  background = url('Image path') no-repeat/repeat color;

# About Props 

- Props are nothing but properties used to pass the parameter the function 
- Props's values can be changed while passing but not after passed 
- Example : 1) <Hello Value = "Hell Hello" /> (Can Be Changed)
            2) const Hello = (props) => {
                    props.Value = "Hello" (Can't be done because "props are immutable")
              }

# <-- Exercise - 02 -->

- Here We are about to make a small part of a Hotel webpage
- Learnings :
    - About the conditional rendering 
    - About the && conditional operator 
    - (condition) && statement --> if the condition is true (for Integer 0 is false and for String undefined or null is false) then the statement will execute
    - Don't Directly pass the value from the destructed props because (i don't the reason) but creating a local variable inside the component and manipulate the truth about the condition and update to the local variable and the render it.

# Hooks In React 

- States :
    States are the variables declared inside a function, when the value of the of the variable are changed then the changed value will be displayed/saved

# <-- useState -->

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

        -> onclick = {props.APP(id)} // This is Wrong
        -> onclick = {() => props.APP(id)} // This is Right, We use a function which returns and calls the function 

    3) Updating the object in react :

        -> setData(prev => {...prev, on : !prev.on}) // Where on is a key in the object
