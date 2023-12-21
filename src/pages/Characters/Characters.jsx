import styles from "./Characters.module.css";
import ASOIAFapi from "../../services/ASOIAFApi";

import {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const page = parseInt(queryParams.get('page'), 10);
    const pageSize = parseInt(queryParams.get('pageSize'), 10);
 
    console.log(pageSize);  
    useEffect(() => {
      
      async function getCharacters(){
      const {data: characters, isError} = await ASOIAFapi.getCharacters(page, pageSize);
        if(!isError){
          setCharacters(characters);
        }
      }

    getCharacters();
    return () => {}
  }, [page, pageSize])

  return (
    <>
      <div>
        {
          characters.map((characters, index) => 
          <Link to={`/character/${characters.id}`}>
          <div key={characters.id} className={styles["characters"]}>
             <div className={styles["characters__infoContainer"]}>

              {
                characters.name ?
                  <div className={styles["characters__info"]}>
                    <span>name: {characters.name}</span>
                  </div>
                :
                  <div className={styles["characters__info"]}>
                    <span>alias: {characters.alias}</span>
                  </div>
              }

              <div className={styles["characters__info"]}>
                <span>culture: {characters.culture}</span>
              </div>

              <div className={styles["characters__info"]}>
                <span>gender: {characters.gender}</span>
              </div>
              
            </div>
          </div>
          </Link>
          )
        }
      </div>
    </>
  );
}

export default Characters;
