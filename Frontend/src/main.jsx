import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { SelectConversationProvider } from "./context/SelectConversationContext.jsx";
import { SocketContextProvider } from "./context/SocketContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <SelectConversationProvider>
          <SocketContextProvider>
            <App />
          </SocketContextProvider>
        </SelectConversationProvider>
      </AuthContextProvider>
    </BrowserRouter>
    <Toaster
      position="bottom-center"
      toastOptions={{
        style: {
          fontSize: "12px",
          direction: "rtl",
        },
      }}
    />
  </StrictMode>
);
