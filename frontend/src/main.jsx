import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";

import store from "./store/store.js"
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
