import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Layout from "./layout/Layout";

ReactDOM.render(<Layout />, document.getElementById("root"));

serviceWorker.register();
