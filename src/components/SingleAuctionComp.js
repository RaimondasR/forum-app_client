import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleAuctionComp = ({auction}) => {
  const nav = useNavigate();

  function goToAuction() {
    nav('/auction/' + auction.url);
  }

  return (
    <div className="flex">        
      <div>{auction.ownerName}</div>
      <div>{auction.productPicture}</div>
      <div>{auction.title}</div>
      <div>{auction.condition}</div>
      <div>{auction.startingBid}</div>
      <div>{auction.endTime}</div>
      <button onClick={goToAuction}>Go to auction</button>
    </div>
  )
}

export default SingleAuctionComp;