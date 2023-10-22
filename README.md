# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React Basics - A Quick Brush Up

Basically we create a "div" in the HTML file given the id="root" Which acts as a container

Rendering Syntax :
ReactDOM.createRoot(getElementById("root)).render(<React.StrictMode>Code Here / Component </React.StrictMode>)

- Component must start with 'Capital' letter and preferably 'PascalCase'

- Every Component must have a return type and "only one" parent should be returned with many number of siblings embedded in it

<-- Exercise - 01 -->
- Learnt About using the components, the ::marker property and background with both image and color at same time in CSS
- ::marker property is used to select the bulletins in the unordered list
-  background = url('Image path') no-repeat/repeat color;