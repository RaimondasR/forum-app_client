import React, { useRef, useContext } from 'react';
import { MainContext } from '../context/MainContext';

const CreateAuctionComp = () => {
  const {getAuctions, setAuctions} = useContext(MainContext);

  const refs = {
    // ownerName: useRef(),     //    auction owner name
    productPicture: useRef(),   // product picture url
    title: useRef(),            // title, description of the product
    condition: useRef(),        // condition of the product: Pre-Owned or Brand New
    startingBid: useRef(),      // start or minimal bid of the product
    endTime: useRef(),          // end date and time of the auction, timestamp
    // bids: useRef()              // array of bids; each bid has: username, current bid, time of bid
  }  

  async function createAuction () {
    const auction = {
      productPicture: refs.productPicture.current.value,
      title: refs.title.current.value,
      condition: refs.condition.current.value,
      startingBid: refs.startingBid.current.value,
      endTime: refs.endTime.current.value,
      secret: localStorage.getItem('secret')
    } 
    
    const options = {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(auction)
    }

    const res = await fetch("http://localhost:4000/create-auction", options);
    const data = await res.json();
    if (!data.error) {
      console.log("success: new auction is created");
      console.log("data :", data);
      setAuctions(data.auctions);
    } else {
      console.log("error: auction is not created");
      console.log("data :", data);
    }
  };

  return (
    <div className="d-flex column a-center">

      <div className="d-flex row center a-flex-end">
        <div className=""><h1  className="mb15">eBiden</h1></div> 
        <div className="ml50 mr50"><h3>auction-app</h3></div>   
        <div className="m0"><h3>NEW AUCTION Page</h3></div>
      </div>
  
      <div className="register-div column grow1">
        <div className="txt-left"><h2>Create a NEW AUCTION</h2></div>    
        <div className="flex column a-center mt20">
          <div className="flex center mt20">
            <input className="inp" type="text" ref={refs.productPicture} placeholder="Product picture url" />
          </div>
          <div className="flex center mt20">
            <input className="inp" type="text" ref={refs.title} placeholder="Title" />
          </div>
          <div className="flex center mt20">
            <input className="inp" type="text" ref={refs.condition} placeholder="Condition: Pre-Owned or Brand New" />
          </div>
          <div className="flex center mt20">
            <input className="inp" type="text" ref={refs.startingBid} placeholder="Starting bid in US$" />
          </div>  
          <div className="flex center mt20">
            <input className="inp" type="text" ref={refs.endTime} placeholder="Please enter End time in format: " />
          </div>           
          <div className="flex center mt40">
            <button onClick={createAuction}>Create Auction</button>
          </div>
        </div>
      </div>
    
  </div>
  );
};

export default CreateAuctionComp;