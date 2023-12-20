import styles from "./Houses.module.css";
import ASOIAFapi from "../../services/ASOIAFApi";
import Pagination from "../../components/Pagination/Pagination";

import {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";


function Houses() {

    const [houses, sethouses] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const page = parseInt(queryParams.get('page'), 10);
    const pageSize = parseInt(queryParams.get('pageSize'), 10);
 
    console.log(pageSize);  
    useEffect(() => {
      
      async function getHouses(){
      const {data: houses, isError} = await ASOIAFapi.getHouses(page, pageSize);
        if(!isError){
          sethouses(houses);
        }
      }

    getHouses();
    return () => {}
  }, [page, pageSize])

    return (
      <>
        <div>
          {
            houses.map((houses, index) => 
            <div key={houses.id} className={styles["houses"]}>
               <div className={styles["houses__infoContainer"]}>
                <div className={styles["houses__info"]}>
                  <span>name:</span>
                  <span>{houses.name}</span>
                </div>

                <div className={styles["houses__info"]}>
                  <span>titles:</span>
                  <span>{houses.titles}</span>
                </div>

                <div className={styles["houses__info"]}>
                  <span>current lord:</span>
                  <span>{houses.currentLord}</span>
                </div>

                <div className={styles["houses__info"]}>
                  <span>sworn members:</span>
                  <span>{houses.swornMembers}</span>
                </div>

                
              </div>
            </div>
            )
          }
        </div>
      </>
    );
  }
  

export default Houses;
