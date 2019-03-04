import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "react-app-polyfill/ie11";
import * as serviceWorker from "./serviceWorker";
import store from "./models/store";
import { Admin, Home, Loading } from "./routes/web";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/home" component={() => <Home />} />
          <Route exact path="/" component={() => <Admin />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
