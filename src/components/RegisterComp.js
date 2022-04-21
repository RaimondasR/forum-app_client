import React, { useRef, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RegisterComp = () => {
  const nav = useNavigate();  
  const {getUser, setUser} = useContext(UserContext);
  const refs = {
      usernameRef: useRef(),
      emailRef: useRef(),
      password1Ref: useRef(),
      password2Ref: useRef(),        
  }

  async function registerUser() {
    const user = {
        username: refs.usernameRef.current.value,
        email: refs.emailRef.current.value,
        password1: refs.password1Ref.current.value,
        password2: refs.password2Ref.current.value,          
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
        console.log("success: user registration all good");
        setUser(user.username);
        console.log("data :",data);
        console.log("user.username :",user.username);
        console.log("getUser :",getUser);
        console.log("user :", user)
        nav("/login");
      } else console.log("error: user registration bad credentials");
  } // end of function registerUser()

  return (
    <div className="RegisterComp d-flex column a-center">
      <div className="register-div d-flex column a-center">
        <div className="sign-div d-flex a-center"><h2>Register</h2></div>        
        <div className="sign-div d-flex a-center ">Existing user? _<b><Link to="/login">Sign In</Link></b></div>
        <div className="sign-div d-flex a-flex-end mt20 mb0 fs14">
          <div className="c-gray mr5"><b>User Name</b></div>
          <div className="c-bordo fs12">REQUIRED</div>             
        </div>
        <div className="sign-div d-flex center">
          <input className="inp" type="text" ref={refs.usernameRef}  placeholder="User Name" />
        </div>
        <div className="sign-div d-flex a-flex-end mt20 mb0 fs14">
          <div className="c-gray mr5"><b>Password</b></div>
          <div className="c-bordo fs12">REQUIRED</div>             
        </div>
        <div className="sign-div d-flex center">
          <input className="inp" type="text" ref={refs.passwordRef}  placeholder="Password" />
        </div>
        <div className="sign-div d-flex a-flex-end mt20 mb0 fs14">
          <div className="c-gray mr5"><b>Confirm Password</b></div>
          <div className="c-bordo fs12">REQUIRED</div>             
        </div>
        <div className="sign-div d-flex center">
          <input className="inp" type="text" ref={refs.passwordRef}  placeholder="Confirm Password" />
        </div>    
        <div className="sign-div flex center mt40">
          <button onClick={registerUser}>Create my Account</button>
        </div>
        </div>
      </div>
            
  );
};

export default RegisterComp;