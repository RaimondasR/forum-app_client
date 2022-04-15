import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';



const Toolbar = () => {
  const location = useLocation(); 
  const {getUser, setUser} = useContext(UserContext);
  const nav = useNavigate();  

  function SignOutUser() {
    nav("/start");
    setUser(null);
    
  }

  return (
    <div className="Toolbar d-flex row">
        {/* if user neither registered, nor logged in, then "login" and "register" links are shown */}
        {(!getUser && location.pathname !=="/login") && <Link to="/login">Login</Link>}
        {(!getUser && location.pathname !=="/register") && <Link to="/register">Register</Link>}            
        {(getUser && location.pathname !=="/create-auction") && <Link to="/create-auction">Create Auction</Link>}
        {location.pathname !=="/all-auctions" && <Link to="/all-auctions">All Auctions</Link>}
        {location.pathname !=="/main" && <Link to="/main">Main Page</Link>}
        {getUser && 
          <div className="userStats d-flex row">
            <div className="mr40">Username: {getUser.username}            
            </div>
            <div className="mr40">money: {getUser.money}            
            </div>
            <div onClick={SignOutUser}>Sign Out {/* setUser(null) */}
            </div>
          </div>
        }
          
     
        
        
    </div>
  )
}

export default Toolbar;