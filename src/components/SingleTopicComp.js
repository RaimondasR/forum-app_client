import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTopicComp = ({topic}) => {
  const nav = useNavigate();

  function goToTopic() {
    nav('/topic/' + topic.url);
  }

  return (
    <div className="flex">        
      <div>{topic.creatorName}</div>
      <div>{topic.title}</div>
      <div>{topic.message}</div>
      <div>{topic.image}</div>

      <button onClick={goToTopic}>Go to Topic</button>
    </div>
  )
}

export default SingleTopicComp;