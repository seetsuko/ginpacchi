import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    user {
      id
      staffName
      shift{
        date
        startTime
        endTime
      }
    }
  }
`

export const EDIT_USER = gql`
   mutation EditUser($staffName: String!, $shiftStartTime: String!, $shiftDate: String!, $shiftEndTime: String!) {
    editUser(staffName: $staffName, shift: { date: $shiftDate, startTime: $shiftStartTime, endTime: $shiftEndTime }) {
      id
      staffName
      shift{
        date
        startTime
        endTime
      }
    }
}
`

export const DELETE_USER = gql`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id)
  }
`
