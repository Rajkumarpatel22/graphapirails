import React from "react";
import {useMutation, useQuery, gql } from "@apollo/client";
import { useNavigate } from 'react-router-dom';
const FILMS_QUERY = gql`
  {
    users {
      id
      username
      email
    }
  }
`;

const DELETE_USER = gql`
  mutation deleteUser($id: ID!){
    deleteUser(input: {id: $id}){
    user {
      id
      username
      email
    }
  }
}
  
`;


export default function Api({setShowList}) {
  const { data, loading, error } = useQuery(FILMS_QUERY);
  const [deleteUser] = useMutation(DELETE_USER);
  const navigate = useNavigate();
  const handleOnClick = (userId)=> {
     let id= parseInt(userId);
    // console.log("After parse",typeof(id))
    deleteUser({ variables: {id}});
  }
  
  const handleRoute=(userId)=>{
    navigate(`/user/${userId}`)
  }
  // const handleRoute=(userId)=>{
  //   console.log("Button C;onClick")
  //   window.location.href("./Updateuser.js")
  // }

  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>

  return (
    <div>
    <button onClick={()=>setShowList(false)}>Hide</button>
      <h1>Data users </h1>
      <div>
      <ul>
      <li>ID  ||   Email  ||  Username</li>
      </ul>
      </div>
      <ul>
        {data.users.map((user) => (
          <>
          <li>{user?.id} || {user?.email} || {user?.username} 
          <div>
          <button onClick={()=> handleRoute(user.id)} >Edit</button>
          <button onClick={()=>handleOnClick(user.id)}>Delete</button>
         
          </div>
          </li>
          </>
        ))}
      </ul>
    </div>
  );
}