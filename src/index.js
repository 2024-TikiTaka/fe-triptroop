import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import App from "./App";
import store from "./store";

// 부트스트랩 CSS 추가
import 'bootstrap/dist/css/bootstrap.min.css';
// 부트스트랩 아이콘 CSS 추가
import 'bootstrap-icons/font/bootstrap-icons.css';

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
