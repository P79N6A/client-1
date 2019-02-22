// const typeDefs = `
//   type DataDefault {
//     id: ID;
//     avatar: String;
//     name: String;
//     phone: String;
//     wechat: String;
//     address: [String!];
//   }
//
//
//   type Query {
//     id: ID;
//     avatar: String;
//     name: String;
//     phone: String;
//     wechat: String;
//     address: [String!];
//   },
//
//  type Mutation  {
//     changeName($name: String!):DataDefault
//
//   }
// `;


const typeDefs = `
  type Todo {
    id: Int!
    text: String!
    completed: Boolean!
  }

  type Mutation {
    addTodo(text: String!): Todo
  }

  type Query {
    visibilityFilter: String
    todos: [Todo]
  }
`;


export default typeDefs;
