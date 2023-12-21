import styles from "./Pagination.module.css";
import { Link } from "react-router-dom";

function Pagination({page, pageSize}) {
    function renderPreviousPageLink(){
        if(page > 1){
            return <Link to={`?page=${page - 1}&pageSize=${pageSize}`}>Previous</Link>
        }
    }
    
    function renderNextPageLink(){
      return <Link to={`?page=${page + 1}&pageSize=${pageSize}`}>Next</Link>
    }

  return (
    <div className={styles["Pagination"]}>
        {renderPreviousPageLink()}
        <button class="dropbtn">{pageSize}</button>
          <div id="myDropdown" class="dropdown-content">
            <Link to={`?page=${page}&pageSize=${10}`}>10</Link>
            <Link to={`?page=${page}&pageSize=${25}`}>25</Link>
            <Link to={`?page=${page}&pageSize=${50}`}>50</Link>
          </div>
        {renderNextPageLink()}
    </div>
  );
}

export default Pagination;
