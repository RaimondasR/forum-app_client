import React, { useRef, useContext } from 'react';
import { MainContext } from '../context/MainContext';

const CreateTopicComp = () => {
  const {getTopic, setTopic} = useContext(MainContext);

  const refs = {
    titleRef: useRef(),   
    messageRef: useRef(), 
    imageRef: useRef()    
  }  

  async function createTopic () {
    const topic = {
      creatorName,                            // topic creator, logged-in registered user
      title: refs.titleRef.current.value,     // topic title
      message: refs.messageRef.current.value, // topic message
      image: refs.imageRef.current.value,     // topic image URL
    } 
    
    const options = {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(topic)
    }

    const res = await fetch("http://localhost:4000/create-topic", options);
    const data = await res.json();
    if (!data.error) {
      console.log("success: new forum topic is created");
      console.log("data :", data);
      setTopic(data.topic);
    } else {
      console.log("error: forum topic is not created");
      console.log("data :", data);
    }
  };

  return (
    <div className="d-flex column a-center">

      <div className="d-flex row center a-flex-end">
        <div className=""><h1  className="mb15">stocKINGS forums</h1></div> 
        <div className="ml50 mr50"><h3>forum-app</h3></div>   
        <div className="m0"><h3>Create New Topic page</h3></div>
      </div>
  
      <div className="create-topic-div column grow1">
        <div className="txt-left"><h2>Create New Topic</h2></div>    
        <div className="flex column a-center mt20">
          <div className="flex center mt20">
            <input className="inp" type="text" ref={refs.titleRef} placeholder="Topic title" />
          </div>
          <div className="flex center mt20">
            <input className="inp" type="text" ref={refs.messageRef} placeholder="Enter your message text" />
          </div>
          <div className="flex center mt20">
            <input className="inp" type="text" ref={refs.imageRef} placeholder="Insert image from URL e.g. http://www.example.com" />
          </div>
          
          <div className="flex center mt40">
            <button onClick={createTopic}>Submit Topic</button>
          </div>
        </div>
      </div>
    
  </div>
  );
};

export default CreateTopicComp;