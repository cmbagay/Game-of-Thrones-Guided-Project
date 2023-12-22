import styles from "./Characters.module.css";
import ASOIAFapi from "../../services/ASOIAFApi";
import Pagination from "../../components/Pagination/Pagination";

import {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const page = parseInt(queryParams.get('page'), 10);
    const pageSize = parseInt(queryParams.get('pageSize'), 10);
 
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
    <Pagination page={1} pageSize={10} />

    <div className={styles["characters__div"]}>
        {
          characters.map((characters, index) => 
          <Link to={`/character/${index+1}`}>
          <div key={characters.id} className={styles["characters"]}>
             <div className={styles["characters__infoContainer"]}>

             {
                characters.name ? 
                <div className={styles["characters__info__name"]}>
                    <span>{characters.name}</span>
                </div>
                : null
              } 

              {
                characters.alias ? 
                <div className={styles["characters__info__name"]}>
                    <span>alias: {characters.alias}</span>
                </div>
                : null
              } 

              {
                !characters.name && !characters.alias ? 
                <div className={styles["characters__info__name"]}>
                    <span>Unnamed</span>
                </div> :
                null 
                
              }

              {
                characters.culture ? 
                <div className={styles["characters__info"]}>
                  <span>{characters.culture}</span>
                </div>
                :
                <div className={styles["characters__info"]}>
                    <span>Unknown Origin</span>
                </div>
              }
                
             

              <div className={styles["characters__info"]}>
                <span>{characters.gender}</span>
              </div>
              
            </div>
          </div>
          </Link>
          )
        }
      </div>

    <Pagination page={1} pageSize={10} />
    </>
     
  );
}

export default Characters;