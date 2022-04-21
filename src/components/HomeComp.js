import React from 'react';
import { useParams } from 'react-router-dom';
import SingleTopicComp from './SingleTopicComp';

const HomeComp = () => { {/* paduoti reikia HomeComp = ({topic}) */}
  return (
    <div className="d-flex column a-center">

        <div className="m0"><h3>Home page</h3></div>


      {/* shows all topics */}   
      {/* {topic.map((x, i) => <SingleTopicComp key={i} topic={x} />)}  */}

    </div>
  )
}

export default HomeComp;