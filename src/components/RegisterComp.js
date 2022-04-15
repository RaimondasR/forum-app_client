import React, { useRef, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RegisterComp = () => {
  const nav = useNavigate();  
  const {getUser, setUser} = useContext(UserContext);
  const refs = {
      username: useRef(),
      password1: useRef(),
      password2: useRef(),        
  }

  async function registerUser() {
    const user = {
        username: refs.username.current.value,
        password1: refs.password1.current.value,
        password2: refs.password2.current.value,          
    }
            
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(user)
    }

      const res = await fetch("http://localhost:4000/register", options);
      const data = await res.json();
      // if user registration is succsessful then switch to user login page
      if(!data.error) {
        setUser(user.username);
        console.log("data :",data);
        console.log("user.username :",user.username);
        console.log("getUser :",getUser);
        console.log("user :", user)
        nav("/login");
      } else console.log("error: bad password");
  } // end of function registerUser()

  return (
    <div className="d-flex column a-center">
      <div className="d-flex row center a-flex-end">          
        <div className=""><h1  className="mb15">eBiden</h1></div>   
        <div className="ml50 mr50"><h3>auction-app</h3></div>     
        <div className="m0"><h3>REGISTER Page</h3></div>
      </div>

      <div className="register-div column grow1">
        <div className="txt-left"><h2>Register</h2></div>
        <div className="txt-left">Let's get</div>
        <div className="txt-left">you on board</div>
        <div className="txt-left">new user</div>
        <div className="flex column a-center">
          <div className="flex center mt20">
            <input className="inp" type="text" ref={refs.username}  placeholder="Username" />
          </div>
          <div className="flex center mt20">
            <input className="inp" type="text" ref={refs.password1}  placeholder="Password1" />
          </div>
          <div className="flex center mt20">
            <input className="inp" type="text" ref={refs.password2}  placeholder="Password2" />
          </div>      
          <div className="flex center mt40">
            <button onClick={registerUser}>Create account</button>
          </div>
          <div className="txt-center mt50">Already have an account? <b><Link to="/login">Sign In</Link></b></div>
        </div>
      </div>
    </div>                 
  );
};

export default RegisterComp;