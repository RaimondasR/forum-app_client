import React, { useRef, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../contexts/MainContext";
import styles from "../App.css";
import http from "../../plugins/http";
import SignInModal from "./SignInModal";
import io from "socket.io-client";

const socket = io.connect("http://localhost:4000");

const AddCommentComp = ({topicId, setComments, commentsCount, setPage, setCommentsCount}) => {
  const { loggedInUser } = useContext(MainContext);
  const nav = useNavigate();
  const [message, setMessage] = useState(null);
  const [showSignInModal, setShowSignInModal] = useState(false);

  const commentRef = useRef();
  const scrollBottomRef = useRef();

  function go2LastPage() {
    if (commentsCount) {
      if (commentsCount < 10) {
          const count = 1;
          return count
      }
      if (commentsCount >= 10) {
          const count = Math.floor(commentsCount / 10);

          return count + 1;
      }        
    }
  }

  function addComment() {
    const info = {
        comment: commentRef.current.value,
        topicId: topicId
    }

    http.post(info, "add-comment")
        .then((res) => {
            if (!res.success) {
                setMessage(res.message);
                setTimeout(() => {
                    setMessage(null);
                }, 1500)  
            }
            if (res.success) {
                http.get(`getSingleTopicComments/${topicId}/${go2LastPage()}`)
                    .then((res) => {
                        if  (res.success) {
                            setMessage(res.message);
                            setTimeout(() => {setMessage(null)}, 1500)                            
                            setComments(res.comments);
                            setCommentsCount(res.commentsCount);
                            setPage(go2LastPage);            
                            document.querySelector("textarea").value = "";
                            setTimeout(function () {
                                scrollBottomRef.current.scrollIntoView({top: 100, behavior: "smooth"});
                            }, 100);
                    }
                })
            }
        })
    }

    function displayTextarea() {
      if (loggedInUser) {
          return (
              <div className={styles.comment_field}>
                     <textarea ref={commentRef}></textarea> 
                     <button ref={scrollBottomRef} 
                             onClick={addComment}
                             className={styles.login_button}>
                         Comment
                     </button>
                     {message && <h4>{message}</h4>}
              </div>
          )
      }

      if (!loggedInUser) {
          return (
              <div className={styles.comment_field}>
                     <h4>You are not logged in</h4>
                     <h4>Only rlogged in users can add a comment</h4> 
                     <button className={styles.login_button} onClick={() => setShowSignInModal(true)}>Sign In</button>
                     {showSignInModal && <SignInModal setShowModal={setShowSignInModal}/>}
              </div>
          )
      }

  }

  return (
      <div>
          { displayTextarea() }
      </div>)
}

export default AddCommentComp;