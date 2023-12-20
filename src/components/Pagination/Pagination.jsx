import styles from "./Pagination.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Pagination({page, pageSize}) {
    function renderPreviousPageLink(){
        if(page >= 1){
            return <Link to={`?page=${page - 1}&pageSize=${pageSize}`}>Previous</Link>
        }
        return `0`
    }
    
    function renderNextPageLink(){
      if(page < page){
          return <Link to={`?page=${page + 1}&pageSize=${pageSize}`}>Next</Link>
      }
      return page
  }
  return (
    <div className={styles["Pagination"]}>
        {renderPreviousPageLink()}
        <button onclick="myFunction()" class="dropbtn">Page Size</button>
          <div id="pgSizeDpdw" class="dropdown-content">
            <Link to={`?page=${page}&pageSize=${10}`}>10</Link>
            <Link to={`?page=${page}&pageSize=${25}`}>25</Link>
            <Link to={`?page=${page}&pageSize=${50}`}>50</Link>
          </div>
        {renderNextPageLink()}
    </div>
  );
}

export default Pagination;
