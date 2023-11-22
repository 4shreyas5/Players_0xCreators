import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { ThemeProvider } from "@material-tailwind/react";
// import '@material-tailwind/react/dist/main.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
