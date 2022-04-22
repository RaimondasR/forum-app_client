import React, { useRef, useContext } from 'react';
import { MainContext } from '../context/MainContext';

const CreateTopicComp = () => {
  const {getTopic, setTopic} = useContext(MainContext);

  const refs = {
    topicTitleRef: useRef(),
    topicCreatorNameRef: useRef(),   
    topicMessageRef: useRef(), 
    topicImageRef: useRef()    
  }  

  async function createTopic () {
    const topic = {
      topicTitle: refs.topicTitleRef.current.value,     // topic title
      topicCreatorName: refs.topicCreatorNameRef.current.value,                            // topic creator, logged-in registered user
      topicMessage: refs.topicMessageRef.current.value, // topic message
      topicImage: refs.topicImageRef.current.value,     // topic image URL
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
    <div className="CreateTopicComp d-flex column">
  
      <div className="create-topic-div d-flex column a-center">
        <div className="sign-div d-flex a-center fs20"><b>Create New Topic</b></div>    
        <div className="sign-div d-flex a-flex-end mb0 fs14">
          <div className="c-gray mr5"><b>Topic Title</b></div>
          <div className="c-bordo fs11 mb2"><b>REQUIRED</b></div>             
        </div>
        <div className="sign-div d-flex center">
          <input className="inp" type="text" ref={refs.topicTitleRef} placeholder="Topic Title" />
        </div>
        <div className="sign-div d-flex a-flex-end mt10 mb0 fs14">
          <div className="c-gray mr5"><b>Your Name</b></div>
          <div className="c-bordo fs11 mb2"><b>REQUIRED</b></div>                 
        </div>
        <div className="sign-div d-flex center">
          <input className="inp" type="text" ref={refs.topicCreatorNameRef} placeholder="Your Name" />
        </div>
        <div className="sign-div d-flex a-flex-end mt10 mb0 fs14">
          <div className="c-gray mr5"><b>Message Text</b></div>
          <div className="c-bordo fs11 mb2"><b>REQUIRED</b></div>              
        </div>
        {/* <div className="msg-div d-flex a-flex-start">
          <input className="inp d-flex a-flex-start" type="text" ref={refs.messageRef} placeholder="Type your message text here..." />
        </div> */}
        <textarea className="msg-inp" ref={refs.topicMessageRef} placeholder="Type your message text here..."></textarea>
        <div className="sign-div d-flex a-flex-end mt10 mb0 fs14">
          <div className="c-gray mr5"><b>Topic Image URL</b></div>
          <div className="c-dblue fs11 mb2"><b>OPTIONAL</b></div>             
        </div>
        <div className="sign-div d-flex center">
          <input className="inp" type="text" ref={refs.topicImageRef} placeholder="Insert image from URL e.g. http://www.example.com/image.jpg" />
        </div>
          
          <div className="sign-div d-flex center mt30">
            <button onClick={createTopic}>Submit Topic</button>
          </div> 
      </div>
    </div>
  );
};

export default CreateTopicComp;