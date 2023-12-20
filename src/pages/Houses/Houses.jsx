import styles from "./Houses.module.css";
import ASOIAFapi from "../../services/ASOIAFApi";
import Pagination from "../../components/Pagination/Pagination";

import {useEffect, useState} from "react";
import { useParams } from "react-router";


function Houses() {
    let page = 1;
    let pageSize = 10;
    
    const [houses, sethouses] = useState([]);
    const params = useParams();
    console.log(JSON.stringify(params));
  
    useEffect(() => {
      
      async function getHouses(){
      const {data: houses, isError} = await ASOIAFapi.getHouses();
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
          <Pagination />
        </div>
      </>
    );
  }
  

export default Houses;
