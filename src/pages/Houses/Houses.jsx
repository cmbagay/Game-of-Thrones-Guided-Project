import styles from "./Houses.module.css";
import ASOIAFapi from "../../services/ASOIAFApi";

import {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";


function Houses() {

    const [houses, sethouses] = useState([]);
    const [name, setName] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const page = parseInt(queryParams.get('page'), 10);
    const pageSize = parseInt(queryParams.get('pageSize'), 10);
 
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

    async function getCharacterByURL(url){
      console.log(url);
      const {data: name, isError} = await ASOIAFapi.getCharacterByURL({url})
      if(!isError){
        setName(name);
      }
      console.log(name);
      return name;
    }
  

  return (
    <>
      <div className="houses__div">
        {
          houses.map((houses, index) => 
          <div key={houses.id} className={styles["houses"]}>
            <div className={styles["houses__infoContainer"]}>
              <div className={styles["houses__info"]}>
                <span><h4>{houses.name}</h4></span>
              </div>

              {
                houses.titles ?
                <div className={styles["houses__info"]}>
                  <span>{houses.titles}</span>
                </div>
                :
                null
              }

              {
                name === "" ?
                <div className={styles["houses__info"]}>
                  <span>Current Lord: {name}</span>
                </div>
                :
                null
              }

              {
                name === "" ?
                <div className={styles["houses__info"]}>
                  <span>Sworn Members: {name}</span>
                </div>
                :
                null
              }
            </div>
          </div>
        )}
      </div>
    </>
  );
}
  

export default Houses;
