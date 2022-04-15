import React, { useEffect, useState } from 'react';
import SingleAuctionComp from '../components/SingleAuctionComp';
import { useParams } from 'react-router-dom';


const SingleTopicPage = () => {
  const {url} = useParams();
  const [getTopic, setTopic] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/auction/" + url) 
      .then(res => res.json())
      .then(data => {
          setAuction(data.post);
          console.log("data : auction/url : single auction", data);
      }) 

  }, []);

  return (
    <div>SingleTopicPage
      <h1>SINGLE TOPIC Page</h1>
      <h1>Auction url: {url}</h1>
      {/*single auction is shown only if it does exist (getAuction=true) */}
      {getAuction  && <SingleTopicComp auction={getAuction} />}
       
    </div>
  )
}

export default SingleTopicPage;
