import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const StartPage = () => {
  const location = useLocation(); 
  
  return (    
    <div className="StartPage d-flex column"> 

      <div className="d-flex row center a-flex-end">
        <div className=""><h1  className="mb15">eBiden</h1></div>   
        <div className="ml50 mr50"><h3>auction-app</h3></div>   
        <div className="m0"><h3>START Page</h3></div>
      </div>

      <div className="d-flex row center">

        <div className="login-div column center a-center grow1">
          <div className="txt-left"><h2>Login</h2></div>
          <div className="txt-left"><h4>For our users</h4></div>                       
          <div className="btn flex center mt80">
            <Link to="/login" style={{ textDecoration: 'none' }}>Go to LOGIN Page</Link>
          </div>         
        </div>

        <div className="register-div column grow1">
          <div className="txt-left"><h2>Register</h2></div>
          <div className="txt-left"><h4>For NEW users</h4></div>                          
          <div className="btn flex center mt80">
            <Link to="/register" style={{ textDecoration: 'none' }}>Go to REGISTER Page</Link>
          </div>          
        </div>

      </div>

    </div>
  )
}

export default StartPage;