import styles from "./Houses.module.css";
import ASOIAFapi from "../../services/ASOIAFApi";

import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Houses() {
    const [houses, sethouses] = useState([]);
  
    async function getHouses(){
      const {data: houses, isError} = await ASOIAFapi.gethouses();
  
      if(!isError){
        sethouses(houses);
      }
    }
  
    getHouses();

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
