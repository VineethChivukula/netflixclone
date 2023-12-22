// Importing necessary modules
import React from "react";
import ReactDOM from "react-dom/client";

// Importing CSS files
import "./index.css";
import "../node_modules/bootstrap-scss/bootstrap.scss";

// Importing components
import App from "./App";

// Importing utility function
import reportWebVitals from "./reportWebVitals";

// Creating a root element for rendering the React app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the app component inside the root element
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Reporting web vitals
reportWebVitals();
