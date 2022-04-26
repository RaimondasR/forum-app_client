import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../plugins/http";

const SingleTopicComp = () => {
  const {id} = useParams();
  const [topic, setTopic] = useState(null);
  const [comments, setComments] = useState(null);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(null);

  useEffect(() => {
    http.get(`getSingleTopic/${id}`)
      .then((res) => {
        if (res.success) {
            setTopic(res.topic);
        } 
      })
    
    http.get(`getSingleTopicComments/${id}/${page}`)
        .then((res) => {
            if  (res.success) {
                setComments(res.comments);
                setCount(res.count);
            }
        })
}, [])

  return (
    <div className="flex">        

    </div>
  )
}

export default SingleTopicComp;