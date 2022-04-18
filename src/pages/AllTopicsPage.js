import React from 'react';
import SingleTopicComp from '../components/SingleTopicComp';

const AllTopicsPage = ({topic}) => {
  return (
    <div className="d-flex column a-center">
      <div className="d-flex row center a-flex-end"> 
        <div className=""><h1 className="mb15">STOCK KINGS forums</h1></div> 
        <div className="ml50 mr50"><h3>forum-app</h3></div>   
        <div className="m0"><h3>All Topics page</h3></div>
      </div>
      
      {topic.map((x, i) => <SingleTopicComp key={i} topic={x} />)} 
      
    </div>
  )
}

export default AllTopicsPage;