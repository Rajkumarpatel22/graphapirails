import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';
const GET_USER = gql`
  query user($id: String!) {
    user(id: $id) {
      id
      username
      email
    }
  }
`;

const DELETE_USER = gql`
  mutation deleteUser($id: String!){
    deleteUser(id: $id)
  }
`;

const UserDetails = ({ id }) => {
  const { data } =  useQuery(GET_USER, { variables: { id }});
  const [deleteUser] = useMutation(DELETE_USER);

  const handleOnClick = ()=> {
    deleteUser({ variables: { id }});
  }

  if (data && data.user) {
    const { user: { username, email }} = data;
    return <div>
      <h2>Details</h2>
      <p>Name: {username}</p>
      <p>E-mail: {email}</p>
      <button onClick={handleOnClick}>Remove</button>
    </div>;
  }

  return null;
}

export default UserDetails;