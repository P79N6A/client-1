import * as React from "react";
import * as ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import client from "./store/ApolloClient";
import AppRoute from "./routes/AppRoute";

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppRoute />
  </ApolloProvider>,
  document.getElementById("root")
);
