import React, { useRef, useState } from 'react';
import http from '../plugins/http';
import { useNavigate } from "react-router-dom";

const CreateTopicComp = () => {
  const nav = useNavigate();
  const [message, setMessage] = useState(null);

  const refs = {
    topicTitleRef: useRef(),
    topicAuthorRef: useRef(),   
    topicSummaryTextRef: useRef(), 
    topicImageRef: useRef()    
  }  

  async function createTopic () {
    const topic = {
      topicTitle: refs.topicTitleRef.current.value,  // topic title
      topicAuthor: refs.topicAuthorRef.current.value, // topic author, logged-in registered user 
      topicSummaryText: refs.topicSummaryTextRef.current.value, // topic summary text
      topicImage: refs.topicImageRef.current.value,  // topic image URL
    } 
    
    http.post(topic, "create-topic")
      .then((res) => {
        setMessage({success: res.success, message: res.message});
        if (res.success) {
          console.log("res:",res);
          console.log("res.id:",res.id);
          const id = res.id;
          setMessage(null);
          // nav(`/topic/${id}/${refs.topicTitleRef.current.value}`)
        }
      })
  };

  return (
    <div className="CreateTopicComp d-flex column">
  
      <div className="create-topic-div d-flex column a-center">
        <div className="sign-div d-flex a-center fs20"><b>Create New Topic</b></div>    
        <div className="sign-div d-flex a-flex-end mb0 fs14">
          <div className="c-gray mr5"><b>Topic Title</b></div>
          <div className="c-red fs11 mb2"><b>REQUIRED</b></div>             
        </div>
        <div className="sign-div d-flex center">
          <input className="inp" type="text" ref={refs.topicTitleRef} placeholder="Topic Title" />
        </div>
        <div className="sign-div d-flex a-flex-end mt10 mb0 fs14">
          <div className="c-gray mr5"><b>Your Name</b></div>
          <div className="c-red fs11 mb2"><b>REQUIRED</b></div>                 
        </div>
        <div className="sign-div d-flex center">
          <input className="inp" type="text" ref={refs.topicAuthorRef} placeholder="Your Name" />
        </div>
        <div className="sign-div d-flex a-flex-end mt10 mb0 fs14">
          <div className="c-gray mr5"><b>Topic Summary Text</b></div>
          <div className="c-red fs11 mb2"><b>REQUIRED</b></div>              
        </div>
        <textarea className="msg-inp" ref={refs.topicSummaryTextRef} placeholder="Type your topic summary text here..."></textarea>
        <div className="sign-div d-flex a-flex-end mt10 mb0 fs14">
          <div className="c-gray mr5"><b>Topic Image URL</b></div>
          <div className="c-blue fs11 mb2"><b>OPTIONAL</b></div>             
        </div>
        <div className="sign-div d-flex center">
          <input className="inp" type="text" ref={refs.topicImageRef} placeholder="Insert image from URL e.g. http://www.example.com/image.jpg" />
        </div>          
        <div className="sign-div d-flex center mt30">
          <button onClick={createTopic}>Submit Topic</button>
        </div>
        {message && <div className="msg-div d-flex center mt15">{message.message}</div>} 
      </div>
    </div>
  );
};

export default CreateTopicComp;