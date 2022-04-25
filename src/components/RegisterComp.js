import React, { useRef, useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import http from '../plugins/http';

const RegisterComp = () => {
  const nav = useNavigate();  
  const [message, setMessage] = useState(null);

  const refs = {
      userNameRef: useRef(),
      password1Ref: useRef(),
      password2Ref: useRef(),     
      userImageRef: useRef()   
  }

  async function userRegister() {
    const user = {
        userName: refs.userNameRef.current.value,
        password1: refs.password1Ref.current.value,
        password2: refs.password2Ref.current.value, 
        userImage: refs.userImageRef.current.value         
    }
    http.post(user, "register") 
      .then((res) => {
        setMessage({success: res.success, message: res.message});
        if (res.success) {
          setTimeout(() => {
            setMessage(null);
          }, 3000)
        }
      })
  }  // end of function userRegister()            

  return (
    <div className="RegisterComp d-flex column a-center">
      <div className="register-div d-flex column a-center">
        <div className="sign-div d-flex a-center"><h2>Register</h2></div>        
        <div className="sign-div d-flex a-center ">Existing user? _<b><Link to="/login" className="c-blue">Sign In</Link></b></div>
        <div className="sign-div d-flex a-flex-end mt20 mb0 fs14">
          <div className="c-gray mr5"><b>User Name</b></div>
          <div className="c-red fs11 mb2">REQUIRED</div>             
        </div>
        <div className="sign-div d-flex center">
          <input className="inp" type="text" ref={refs.userNameRef}  placeholder="User Name" />
        </div>
        <div className="sign-div d-flex a-flex-end mt20 mb0 fs14">
          <div className="c-gray mr5"><b>Password</b></div>
          <div className="c-red fs11 mb2">REQUIRED</div>             
        </div>
        <div className="sign-div d-flex center">
          <input className="inp" type="text" ref={refs.password1Ref}  placeholder="Password" />
        </div>
        <div className="sign-div d-flex a-flex-end mt20 mb0 fs14">
          <div className="c-gray mr5"><b>Confirm Password</b></div>
          <div className="c-red fs11 mb2">REQUIRED</div>             
        </div>
        <div className="sign-div d-flex center">
          <input className="inp" type="text" ref={refs.password2Ref}  placeholder="Confirm Password" />
        </div>
        <div className="sign-div d-flex a-flex-end mt20 mb0 fs14">
          <div className="c-gray mr5"><b>Your picture image URL</b></div>
          <div className="c-blue fs11 mb2">OPTIONAL</div>             
        </div>
        <div className="sign-div d-flex center">
          <input className="inp" type="text" ref={refs.userImageRef}  placeholder="Your photo or picture image link" />
        </div> 
        {message && <div className="sign-div d-flex center">{message.message}</div>}   
        <div className="sign-div flex center mt40">
          <button onClick={userRegister}>Create my Account</button>
        </div>
        </div>
      </div>
            
  );
};

export default RegisterComp;