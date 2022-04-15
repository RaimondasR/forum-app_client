import React from 'react';
import SingleTopicComp from '../components/SingleTopicComp';

const AllTopicsPage = ({topics}) => {
  return (
    <div>AllTopicsPage
      {topics.map((x, i) => <SingleTopicComp key={i} topic={x} />)} 
    </div>
  )
}

export default AllTopicsPage;