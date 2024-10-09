import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Toaster} from 'react-hot-toast'
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
    <Toaster position="bottom-center" toastOptions={{
      style:{ 
        fontSize : '12px',
        direction : "rtl"
      }
    }} />
  </StrictMode>
);
