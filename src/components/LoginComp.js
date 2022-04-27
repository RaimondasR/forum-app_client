import React, { useRef, useState, useContext } from 'react';
import { MainContext } from '../context/MainContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import http from '../plugins/http';

const LoginComp = () => {
  const nav = useNavigate();  
  const [message, setMessage] = useState(null);
  const {setLoggedInUser, setNotifiedCount} = useContext(MainContext);

  const refs = {
    userNameRef: useRef(),
    passwordRef: useRef(),
  }

  async function loginUser() {
    const user = {
        userName: refs.userNameRef.current.value,
        password: refs.passwordRef.current.value,
    }

    http.post(user, "login")
      .then((res) => {
        // console.log("res: ",res);
        setMessage({success: res.success, message: res.message});
        if (!res.success) {
            setMessage(res.message);
        }
        if (res.success) {
          setTimeout(() => {
            setMessage(null);
          }, 3000)
          setLoggedInUser(res.user);
          nav("/create-topic");
          // nav(`/myaccount/${res.user.userId}/${res.user.userName}`);

          // http.get("get-notifications")
          //     .then((res) => {
          //         if (res.success) {
          //           setNotifiedCount(res.commentsNotSeenCount)
          //         }
          // })
        }
      })
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
            <input className="inp" type="text" ref={refs.userNameRef}  placeholder="User Name" />
          </div>
          <div className="sign-div d-flex a-flex-end mt20 mb0 fs14">
            <div className="c-gray mr5"><b>Password</b></div>
            <div className="c-red fs12">REQUIRED</div>             
          </div>
          <div className="sign-div d-flex center">
            <input className="inp" type="text" ref={refs.passwordRef}  placeholder="Password" />
          </div>      
          <div className="sign-div d-flex a-center mt40">
            <button onClick={loginUser}>Login</button>
          </div>
          {message && <div className="msg-div d-flex center mt15">{message}</div>}  
      </div>
    
    </div>                
  );
};

export default LoginComp;