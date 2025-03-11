import React from "react";
import ReactDOM from "react-dom/client";
import MainApp from "./App.jsx";
import "./index.css"; // Assurez-vous que ce fichier existe aussi !

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
