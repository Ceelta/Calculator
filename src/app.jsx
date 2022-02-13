import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store"
import MainComponent from "./components/main-component"

ReactDOM.render(
    <Provider store={Store}>
        <MainComponent />
    </Provider>,
    document.getElementById('root'))