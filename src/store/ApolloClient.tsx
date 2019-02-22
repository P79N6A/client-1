import ApolloClient from "apollo-boost";
import defaults from "./defaults";
import typeDefs from "./typeDefs";
import resolvers from "./resovlers";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  clientState: {
    defaults: defaults,
    resolvers: resolvers,
    typeDefs: typeDefs
  }
});

export default client;
