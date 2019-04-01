import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./model/store";
import App from "./routes/App";
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(App, null)), document.getElementById("root"));
//# sourceMappingURL=index.js.map