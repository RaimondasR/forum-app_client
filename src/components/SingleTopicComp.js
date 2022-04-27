import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import http from "../plugins/http";
import SingleCommentComp from './SingleCommentComp';
import PaginationComp from "./PaginationComp";
import TitleComp from "./TitleComp";
import AddCommentComp from "./AddCommentComp";

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

  function turnPage(newPage) {
    setPage(newPage);

    http.get(`getSingleTopicComments/${id}/${newPage}`)
        .then((res) => {
            if  (res.success) {
                setComments(res.comments);
                setCount(res.count);
            }
        })
  } // end of function turnPage()

  function mapComments(comments) {
    return (
      <div className="mapComments">
        {comments.map((x, i) => <div key={x.commentId}><SingleCommentComp profile={false} index={i} page={page} comment={x}/></div>)}
        <PaginationComp page={page} count={count} turnPage={turnPage}/>
      </div>
    )
  }


  return (
    <div>
      {topic && comments && 
        <div className="SingeTopicComp d-flex">
            <TitleComp title={topic.topicTitle}/>
            <PaginationComp page={page} count={count} turnPage={turnPage}/>
            { mapComments(comments) }
            <AddCommentComp topicId={id} setComments={setComments} commentCount={count} setPage={setPage} setCount={setCount}/>
        </div>
      }            
    </div>
  )
}

export default SingleTopicComp;