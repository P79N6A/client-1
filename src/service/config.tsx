import ApolloClient from "apollo-boost";

export const ApolloClientConfig = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});
