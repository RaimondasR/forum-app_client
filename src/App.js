import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { MainContext } from './context/MainContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyAccountPage from './pages/MyAccountPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreateTopicPage from './pages/CreateTopicPage';
import AllTopicsPage from './pages/AllTopicsPage';
import HeaderComp from './components/HeaderComp';
import NavbarComp from './components/NavbarComp';
import SingleTopicPage from './pages/SingleTopicPage';
import FavTopicsPage from './pages/FavTopicsPage';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);  // registered and|or logged-in user's name
  const [favTopicCount, setFavTopicCount] = useState(null); // user's favorite topics count
  const [notifiedCount, setNotifiedCount] = useState(0);  // notifications count : new message in user's created topic

  useEffect(() => {
    if (!localStorage.getItem("favoriteTopics")) localStorage.setItem("favoriteTopics", JSON.stringify([]));
    setFavTopicCount(JSON.parse(localStorage.favoriteTopics).length);
  })

return (
  <div className="App"> 
      <MainContext.Provider value={{ loggedInUser, setLoggedInUser, favTopicCount, setFavTopicCount,
                                     notifiedCount, setNotifiedCount }}>  
        <BrowserRouter>
        <HeaderComp /> 
        <NavbarComp />       
        <Routes>
          <Route path='/'                    element={<HomePage />} />        {/* HomePage links: register, login, all topics with comments */}
          <Route path='/home'                element={<HomePage />} />        {/* HomePage links: register, login, all topics with comments */}
          <Route path='/register'            element={<RegisterPage />} />    {/* RegisterPage for sign-up of a new user */}
          <Route path='/login'               element={<LoginPage />} />       {/* LoginPage for login of an existing user */}
          <Route path='/myaccount/:id/:name' element={<MyAccountPage />} />   {/* MyAccountPage after login shows all user's comments and created topics */}
          <Route path='/create-topic'        element={<CreateTopicPage />} /> {/* CreateAuctionPage for creating a new auction */}
          <Route path='/all-topics'          element={<AllTopicsPage />} /> {/* AllAuctionsPage like IndexPage lists all auctions */}
          <Route path='/topic/:id/:topic'    element={<SingleTopicPage />} />
          <Route path='/favorite-topics'     element={<FavTopicsPage />} />
        </Routes> 
        </BrowserRouter>
      </MainContext.Provider>        
  </div>
  );
}

export default App;