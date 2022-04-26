import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MainContext } from '../context/MainContext';
import { useNavigate } from 'react-router-dom';

const NavbarComp = () => {
  const location = useLocation(); 
  const nav = useNavigate();
  const { loggedInUser, setLoggedInUser } = useContext(MainContext);  

  function SignOutUser() {
    nav("/home");
    setLoggedInUser(null);
    
  }

  return (
    <div className="NavbarComp d-flex row">
        {/* if user neither registered, nor logged in, then "login" and "register" links are shown */}
        {(!loggedInUser && location.pathname !=="/login") && <Link to="/login">Login</Link>}
        {(!loggedInUser && location.pathname !=="/register") && <Link to="/register">New User? Sign Up</Link>}   
        {location.pathname !=="/home" && <Link to="/home">Home</Link>}         
        {(loggedInUser && location.pathname !=="/create-topic") && <Link to="/create-topic">Start new topic</Link>}
        {location.pathname !=="/all-topics" && <Link to="/all-topics">Topics</Link>}
        
        { loggedInUser && 
          <div className="userStats d-flex row">
            <div className="mr40">Username: {loggedInUser.userName}            
            </div>
            <div onClick={SignOutUser}>Sign Out
            </div>
          </div>
        }
          
     
        
        
    </div>
  )
}

export default NavbarComp;