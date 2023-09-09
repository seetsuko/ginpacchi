import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    user {
      id
      staffName
    }
  }
`

export const EDIT_USER = gql`
  mutation EditUser($staffName: String!) {
    editUser(staffName: $staffName) {
      id
      staffName
    }
  }
`

export const DELETE_USER = gql`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id)
  }
`
