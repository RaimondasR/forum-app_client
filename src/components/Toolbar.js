import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';



const Toolbar = () => {
  const location = useLocation(); 
  const {getUser, setUser} = useContext(UserContext);
  const nav = useNavigate();  

  function SignOutUser() {
    nav("/home");
    setUser(null);
    
  }

  return (
    <div className="Toolbar d-flex row">
        {/* if user neither registered, nor logged in, then "login" and "register" links are shown */}
        {(!getUser && location.pathname !=="/login") && <Link to="/login">Existing user? Sign In</Link>}
        {(!getUser && location.pathname !=="/register") && <Link to="/register">Sign Up</Link>}   
        {location.pathname !=="/home" && <Link to="/home">Home</Link>}         
        {(getUser && location.pathname !=="/create-topic") && <Link to="/create-topic">Start new topic</Link>}
        {location.pathname !=="/all-topics" && <Link to="/all-topics">Topics</Link>}
        
        {getUser && 
          <div className="userStats d-flex row">
            <div className="mr40">Username: {/*getUser.username*/}            
            </div>
            <div onClick={SignOutUser}>Sign Out {/* setUser(null) */}
            </div>
          </div>
        }
          
     
        
        
    </div>
  )
}

export default Toolbar;