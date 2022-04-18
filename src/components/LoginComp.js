import React, { useRef, useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { MainContext } from '../context/MainContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginComp = () => {
  const nav = useNavigate();  
  const [getMessage, setMessage] = useState(null);
  const {setLoggedInUser, setNotifiedCount} = useContext(MainContext);
  const {getUser, setUser} = useContext(UserContext);

  const refs = {
    usernameRef: useRef(),
    passwordRef: useRef(),
  }

  async function loginUser() {
    const user = {
        username: refs.usernameRef.current.value,
        password: refs.passwordRef.current.value,
    }

    const options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(user)
    }

    const res = await fetch("http://localhost:4000/login", options);
    const data = await res.json();


    {/* if user login is successfull (error=false) then we store user's secret key value to local storage  */}
    if(!data.error) {
      console.log("success: user login all good");
      console.log("data :",data);
      setUser(data.user);
      localStorage.setItem('secret', data.secret);
      console.log("user.username :",user.username);
      nav("/home");
    }
    console.log(data);
  }

  return (
    <div className="LoginComp d-flex column a-center">

      <div className="d-flex row center a-flex-end"> 
        <div className=""><h1  className="mb15">STOCK KINGS forums</h1></div> 
        <div className="ml50 mr50"><h3>forum-app</h3></div>   
        <div className="m0"><h3>Sign In | Login page</h3></div>
      </div>
  
      <div className="login-div column">
        <div className="txt-left"><h2>Login</h2></div>
        <div className="txt-left">Welcome back,</div>
        <div className="txt-left">please login</div>
        <div className="txt-left">to your account</div>
        <div className="flex column a-center">
          <div className="flex center mt20">
            <input className="inp" type="text" ref={refs.usernameRef}  placeholder="Username" />
          </div>
          <div className="flex center mt20">
            <input className="inp" type="text" ref={refs.passwordRef}  placeholder="Password" />
          </div>      
          <div className="flex center mt40">
            <button onClick={loginUser}>Login</button>
          </div>
          <div className="txt-center mt50">Don't have an account? <b><Link to="/register">Sign Up</Link></b></div>
        </div>
      </div>
    
    </div>                
  );
};

export default LoginComp;