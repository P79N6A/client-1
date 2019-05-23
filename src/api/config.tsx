import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "http://localhost:7000/graphql"
});
