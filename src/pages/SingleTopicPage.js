import React, { useEffect, useState } from 'react';
import SingleTopicComp from '../components/SingleTopicComp';
import { useParams } from 'react-router-dom';


const SingleTopicPage = () => {
  const {url} = useParams();
  const [getTopic, setTopic] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/topic/" + url) 
      .then(res => res.json())
      .then(data => {
          setAuction("data.topic",data.topic);
          console.log("data : topic/url : single topic", data);
      }) 
  }, []);

  return (
    <div>
      <h1>Single Topic Page</h1>
      <h1>Topic url: {url}</h1>
      {/* single topic is shown only if it does exist (getTopic=true) */}
      {getTopic  && <SingleTopicComp topic={getTopic} />}
       
    </div>
  )
}

export default SingleTopicPage;
