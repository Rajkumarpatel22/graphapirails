import React from 'react';
import { gql } from 'apollo-boost';
import { useParams } from 'react-router-dom';
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


// const UPDATE_USER = gql`
//   mutation updateUser($id: ID!,$username: String!,$email: String!){
//     updateUser(input: {
//       $username: String!,
//       $email: String!
//       }){
//     user {
//       id
//       username
//       email
//     }
//     errors
//   }
//   }
// `;

function UserDetails() {
  const id1=useParams();
  
  let id=id1?.userId
  console.log("++++++++id",id)
  const { data } =  useQuery(GET_USER, { variables: { id }});
  console.log("+++++++++++",data)
  // const [updateUser,{dataupdate}] = useMutation(UPDATE_USER);
  //   const handleOnClick = (event)=> {
    // updateUser({variables: { ...user }});?
  //   event.preventDefault();
    
  // }
  // const handleOnChange = (event)=> {
  //       // updateUser({ ...user, [event.target.name]: event.target.value});
      // }
      
  return (

    <div>Updateuser componet</div>

  )
}

export default UserDetails





// const UserDetails = ({ id }) => {
//   // const [user, setUser] = useState({});
//   // 
//   // const [updateUser,{data}] = useMutation(UPDATE_USER);

//   const handleOnChange = (event)=> {
//     updateUser({ ...user, [event.target.name]: event.target.value});
//   }

  
//   const handleOnClick = (event)=> {
//     updateUser({variables: { ...user }});
//     event.preventDefault();
    
//   }

// <form onSubmit={handleSubmit}>
//   <h2>Update Form</h2>
//     <label>
//       Username:
//       <input onChange={handleOnChange} type="text" name="username" />
//     </label><br />
//     <label>
//       Email:
//       <input onChange={handleOnChange} type="text" name="email" />
//     </label><br />
//     <input type="update" value="Update" />
//   </form>;
// }

// export default UserDetails;