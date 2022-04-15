import './App.css';
import React from 'react';
import { useState } from 'react';
import { MainContext } from './context/MainContext';
import { UserContext } from './context/UserContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreateTopicPage from './pages/CreateTopicPage';
import AllTopicsPage from './pages/AllTopicsPage';
import Toolbar from './components/Toolbar';
import SingleTopicPage from './pages/SingleTopicPage';

function App() {
  const [getUser, setUser] = useState(null);
  const [getTopic, setTopic] = useState([]);

  return (
    <div className="App">
      <UserContext.Provider value={{getUser, setUser}}>  
        <MainContext.Provider value={{getTopic, setTopics}}>  
          <BrowserRouter> 
            <Toolbar/>       
            <Routes>
              <Route path='/'               element={<HomePage />} />          {/* HomePage links: register, login, all topics with comments */}
              <Route path='/home'           element={<HomePage />} />          {/* HomePage links: register, login, all topics with comments */}
              <Route path='/register'       element={<RegisterPage />} />       {/* RegisterPage for sign-up of a new user */}
              <Route path='/login'          element={<LoginPage />} />          {/* LoginPage for login of an existing user */}
              <Route path='/main'           element={<MainPage />} />           {/* MainPage after login links to: 1. all topics, 2. create new topic */}
              <Route path='/myaccount'      element={<MyAccountPage />} />      {/* MyAccountPage after login shows all user's comments and created topics */}
              <Route path='/create-topic'   element={<CreateTopicPage />} />  {/* CreateAuctionPage for creating a new auction */}
              <Route path='/all-topics'     element={<AllTopicsPage topic={getTopic} />} /> {/* AllAuctionsPage like IndexPage lists all auctions */}
              <Route path='/topic/:url'     element={<SingleTopicPage />} />
            </Routes> 
          </BrowserRouter>
        </MainContext.Provider> 
      </UserContext.Provider>        
    </div>
  );
}

export default App;