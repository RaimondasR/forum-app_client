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
      <div className="login-div d-flex column a-center">        
          <div className="sign-div d-flex a-center"><h2>Login</h2></div>        
          <div className="sign-div d-flex a-center ">Log in to STOCK KINGS or _<b><Link to="/register" className="c-blue">create an account</Link></b></div>          
          <div className="sign-div d-flex a-flex-end mt20 mb0 fs14">
            <div className="c-gray mr5"><b>User Name</b></div>
            <div className="c-red fs12">REQUIRED</div>             
          </div>
          <div className="sign-div d-flex center">
            <input className="inp" type="text" ref={refs.usernameRef}  placeholder="User Name" />
          </div>
          <div className="sign-div d-flex a-flex-end mt20 mb0 fs14">
            <div className="c-gray mr5"><b>Password</b></div>
            <div className="c-red fs12">REQUIRED</div>             
          </div>
          <div className="sign-div d-flex center">
            <input className="inp" type="text" ref={refs.passwordRef}  placeholder="Password" />
          </div>      
          <div className="sign-div d-flex a-center mt40">
            <button onClick={loginUser}>Continue</button>
          </div>
      </div>
    
    </div>                
  );
};

export default LoginComp;