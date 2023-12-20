import styles from "./Characters.module.css";
import ASOIAFapi from "../../services/ASOIAFApi";
import Pagination from "../../components/Pagination/Pagination";

import {useState} from "react";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  async function getCharacters(){
    const {data: characters, isError} = await ASOIAFapi.getCharacters();

    if(!isError){
      setCharacters(characters);
    }
  }
  
  getCharacters();
  console.log(characters.name);

  return (
    <>
      <div>
        {
          characters.map((characters, index) => 
          <div key={characters.id} className={styles["characters"]}>
             <div className={styles["characters__infoContainer"]}>

              {
                characters.name ?
                  <div className={styles["characters__info"]}>
                    <span>name:</span>
                    <span>{characters.name}</span>
                  </div>
                :
                  <div className={styles["characters__info"]}>
                    <span>alias:</span>
                    <span>{characters.alias}</span>
                  </div>
              }

              <div className={styles["characters__info"]}>
                <span>culture:</span>
                <span>{characters.culture}</span>
              </div>

              <div className={styles["characters__info"]}>
                <span>gender:</span>
                <span>{characters.gender}</span>
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

export default Characters;
