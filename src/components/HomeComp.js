import React from 'react';
import { useParams } from 'react-router-dom';
import SingleTopicComp from './SingleTopicComp';

const HomeComp = () => { {/* paduoti reikia HomeComp = ({topic}) */}
  return (
    <div className="d-flex column a-center">

      <div className="d-flex row center a-flex-end"> 
        <div className=""><h1 className="mb15">STOCK KINGS forums</h1></div> 
        <div className="ml50 mr50"><h3>forum-app</h3></div>   
        <div className="m0"><h3>Home page</h3></div>
      </div> 

      {/* shows all topics */}   
      {/* {topic.map((x, i) => <SingleTopicComp key={i} topic={x} />)}  */}

    </div>
  )
}

export default HomeComp;