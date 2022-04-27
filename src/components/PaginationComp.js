import React from 'react';
import styles from "../App.css";

const PaginationComp = ({page, commentsCount, turnPage}) => {
  function doPagination() {
    if (commentsCount <= 10) {
      return (
        <div className="pagination-div">Page: 1</div>
      )
    }
    if (commentsCount > 10) {
      let counter = commentsCount / 10;
      let remainder = commentsCount % 10;
      let arr = [];

      if (remainder === 0) {
        for (let i = 0; i < counter; i++) {
            arr.push(i+1)
        }  
      }
      if (remainder !== 0) {
        for (let i = 0; i < counter; i++) {
          arr.push(i+1)
        }  
      }

      return (
        <div className="pagination-div">
          <div className="d-flex">
            <div className="changePrevPage-div"
                 onClick={() => changePreviousPage()}
            >Previous</div>
            {arr.map(x => <div key={x} className={ page === x ? 
                                       `${styles.border-tbr} ${styles.hover} ${styles.bg-light}` 
                                       : 
                                       `${styles.border-tbr} ${styles.hover}`}
                                       onClick={() => changeCustomPage(x)}
            >{x}</div>)}
            <div className={`${styles.nextPage} ${styles.hover}`}
                  onClick={() => changeNextPage(arr)}  
            >Next</div>
          </div>
        </div>
        )             
    }
}

function changeCustomPage(clickedPage) {
  if (clickedPage !== page) {
      turnPage(clickedPage)
  }
}

function changeNextPage(arrayOfPages) {
  if (page < arrayOfPages[arrayOfPages.length-1]) {
      turnPage(page + 1);
  }       
}

function changePreviousPage() {
  if (page > 1) {
      turnPage(page - 1);
  }
}

return (
  <div>
      { doPagination() }
  </div>)

}

export default PaginationComp;