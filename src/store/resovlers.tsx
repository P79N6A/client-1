
const resolvers = {
  Mutation: {
    addTodo: (_, { text }, { cache }) => {
      const newTodo = {
        text
      };
      const data = {
        todos: "fdsa"
      };
      cache.writeData({ data });
      return newTodo;
    }
  }
};


export default resolvers;
