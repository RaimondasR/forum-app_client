import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const nav = useNavigate();  

  async function goToCreateAuctionPage(){
    nav('/create-auction');
  }
  
  async function goToAllAuctionPage(){
    nav('/all-auctions');
  }

  return (
    <div className="MainPage d-flex column"> 

      <div className="d-flex row center a-flex-end">
        <div className=""><h1  className="mb15">eBiden</h1></div>   
        <div className="ml50 mr50"><h3>auction-app</h3></div>  
        <div className="m0"><h3>MAIN Page</h3></div>
      </div>
      <div><h4>Please choose one of options below:</h4></div>

      <div className="d-flex row center">

      <div className="d-flex row center">

        {/* show all auctions link div */}   
        <div className="all-auct-div column grow1">                  
          <div className="flex center mt80">
            <button className="bcc-orange" onClick={goToAllAuctionPage}>Show ALL AUCTIONS</button>
          </div>         
        </div>

        {/* "create a new auction" link div */}
        <div className="new-auct-div column grow1">                        
          <div className="flex center mt80">
            <button className="bcc-pink" onClick={goToCreateAuctionPage}>Create a NEW AUCTION</button>
          </div>          
        </div>

      </div>  

        
      </div>

    </div>


  )
}

export default MainPage;