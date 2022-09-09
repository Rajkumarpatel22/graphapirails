import React, { useState } from 'react';
import { useQuery, gql, useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';
import API from './Apiacess.js'
const CREATE_USER = gql`
  mutation createUser($username: String!,$email: String!) {
    createUser(
      input: {
        username: $username, 
        email: $email
      }
    )  {
    user {
      id
      username
      email
    }
    errors
  }
  }
`;


const UserForm = ()=> {
  const [user, setUser] = useState({});
  const [showList , setShowList]=useState(false);
  const [createUser, { data }] = useMutation(CREATE_USER);
  const navigate=useNavigate();
  const handleOnChange = (event)=> {
    // setValue(event.target.value)
    setUser({ ...user, [event.target.name]: event.target.value});
  }

  const handleSubmit = (event)=> {
    createUser({variables: { ...user }});
    event.preventDefault();
    setShowList(true);
    // navigate("/home")
    
  }

  return( 
   <div className='container' >
  <form onSubmit={handleSubmit}>

  <h2>Create Form</h2>
    <label>
      Username:
      <input onChange={handleOnChange} type="text" name="username" />
    </label><br />
    <label>
      Email:
      <input onChange={handleOnChange} type="text" name="email" />
    </label><br />
    <input type="submit" value="Create" />
  </form>
  {showList &&  <div>
     <API setShowList={setShowList}/>
  </div>
  }
  </div> 
  );
}

export default UserForm;