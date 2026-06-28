import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>

    <App />

    <Toaster
      position="top-right"
      toastOptions={{
        duration: 2500,
        style: {
          background: "#111827",
          color: "#fff",
          border: "1px solid #334155",
        },
      }}
    />

  </BrowserRouter>
);