import logo from './logo.svg';
import './App.css';
// import Create from "./create.js"
import Api from "./Apiacess.js"
import UserForm from "./Createuser.js"
import UserDetails from "./Updateuser.js"
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
    
        <Routes>
        {/* <Route path="/home" element={<Api/>}>  </Route> */}
        <Route path="/" element={<UserForm />}></Route> 
        <Route path="/user/:userId" element={<UserDetails />}></Route>
       </Routes>
    
    </div>
  );
}

export default App;
