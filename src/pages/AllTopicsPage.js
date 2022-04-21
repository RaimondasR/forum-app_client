import React from 'react';
import SingleTopicComp from '../components/SingleTopicComp';

const AllTopicsPage = ({topic}) => {
  return (
    <div className="d-flex column a-center">
      
      {topic.map((x, i) => <SingleTopicComp key={i} topic={x} />)} 
      
    </div>
  )
}

export default AllTopicsPage;