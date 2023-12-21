import styles from "./Pagination.module.css";
import { Link } from "react-router-dom";

import { useState } from "react";

function Pagination({pg, pgSz}) {
  const [page,setPage] = useState(1);
  const [pageSize,setPageSize] = useState(10);

    function renderPreviousPageLink(){
      return <Link onClick={() => setPage(page-1)}to={`?page=${page}&pageSize=${pageSize}`}>Previous</Link>
    }
    
    function renderNextPageLink(){
      return <Link onClick={() => setPage(page+1)} to={`?page=${page}&pageSize=${pageSize}`}>Next</Link>
    }

  return (
    <div className={styles["Pagination"]}>
        {renderPreviousPageLink()}
          <div className="pagination__links">
            <Link to={`?page=${page}&pageSize=${10}`}>10</Link>
            <Link to={`?page=${page}&pageSize=${25}`}>25</Link>
            <Link to={`?page=${page}&pageSize=${50}`}>50</Link>
          </div>
        {renderNextPageLink()}
    </div>
  );
}

export default Pagination;
