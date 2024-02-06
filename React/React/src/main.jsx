import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Hola from "./Hola.jsx";

//const myElement = <h1>I Love JSX!</h1>;

ReactDOM.createRoot(document.getElementById("root")).render(<Hola />);

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(myElement);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
