import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
        <ToastContainer
            autoClose={1200}
            closeOnClick={true}
            pauseOnFocusLoss={false}
        />
    </Provider>
);
