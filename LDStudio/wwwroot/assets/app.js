import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
var app = document.getElementById("app");
ReactDOM.render(
    <List />,
    app
);
module.hot.accept();