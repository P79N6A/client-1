import gql from "graphql-tag";

const changeUserMsgApi = gql`
  mutation addTodo($text: String!) {
    addTodo(text: $text) @client {
      id
    }
  }
`;

export default changeUserMsgApi;
