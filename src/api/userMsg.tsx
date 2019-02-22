import gql from "graphql-tag";

const userMsgApi = gql`
  {
    allUsers {
      id
      name
      address
    }
  }
`;

export default userMsgApi;
