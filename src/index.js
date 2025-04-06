import React from "react";
import ReactDOM from "react-dom"; // تغيير الاستيراد هنا
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";

const helmetContext = {};

// استخدام ReactDOM.hydrate بدلًا من createRoot
ReactDOM.hydrate(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
