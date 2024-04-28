import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider >
      <App />
      <Analytics/>
    </HelmetProvider>
  </React.StrictMode>
);
