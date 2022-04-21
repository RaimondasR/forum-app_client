import React from 'react'

const NewTopicPage = () => {
  return (
    <div className="RegisterPage d-flex column a-center">
  
      <div className="register-div column grow1">
        <div className="txt-left"><h2>Create a NEW TOPIC</h2></div>    
        <div className="flex column a-center mt50">
          <div className="flex center mt20">
            <input className="inp" type="text" placeholder="Topic picture url" />
          </div>
          <div className="flex center mt20">
            <input className="inp" type="text" placeholder="Topic Title" />
          </div>
          <div className="flex center mt20">
            <input className="inp" type="text" placeholder="First comment" />
          </div>            
          <div className="flex center mt80">
            <button>Create Topic</button>
          </div>
        </div>
      </div>
    
  </div>
  )
}

export default NewTopicPage;