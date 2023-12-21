import styles from "./Houses.module.css";
import ASOIAFapi from "../../services/ASOIAFApi";

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

    function checkData(data){
      if(data != ""){
        return data
      }
    }

    return (
      <>
        <div>
          {
            houses.map((houses, index) => 
            <div key={houses.id} className={styles["houses"]}>
               <div className={styles["houses__infoContainer"]}>
                <div className={styles["houses__info"]}>
                  <span>name: {houses.name}</span>
                </div>

                <div className={styles["houses__info"]}>
                  <span>titles: {houses.titles}</span>
                </div>

                <div className={styles["houses__info"]}>
                  <span>current lord: {houses.currentLord}</span>
                </div>

                <div className={styles["houses__info"]}>
                  <span>sworn members: {houses.swornMembers}</span>
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
