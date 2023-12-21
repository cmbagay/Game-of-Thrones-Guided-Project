import styles from "./Character.module.css";
import ASOIAFapi from "../../services/ASOIAFApi";

import {useState} from "react";
import { useParams } from "react-router-dom";

function Character() {
  const [character, setCharacter] = useState([]);
  const {id} = useParams();

  async function getCharacter(){
    const {data: character, isError} = await ASOIAFapi.getCharacterById({id});

    if(!isError){
      setCharacter(character);
    }
  }
  
  getCharacter();

  return (
    <>
      <div>
          <div key={character.id} className={styles["character"]}>
             <div className={styles["character__infoContainer"]}>

              {
                character.name ?
                  <div className={styles["character__info"]}>
                    <span>name:</span>
                    <span>{character.name}</span>
                  </div>
                :
                  <div className={styles["character__info"]}>
                    <span>alias:</span>
                    <span>{character.alias}</span>
                  </div>
              }

              <div className={styles["character__info"]}>
                <span>culture:</span>
                <span>{character.culture}</span>
              </div>

              <div className={styles["character__info"]}>
                <span>gender:</span>
                <span>{character.gender}</span>
              </div>

              <div className={styles["character__info"]}>
                <span>born:</span>
                <span>{character.born}</span>
              </div>

              <div className={styles["character__info"]}>
                <span>died:</span>
                <span>{character.died}</span>
              </div>

              <div className={styles["character__info"]}>
                <span>titles:</span>
                <span>{character.titles}</span>
              </div>

              <div className={styles["character__info"]}>
                <span>father:</span>
                <span>{character.father}</span>
              </div>

              <div className={styles["character__info"]}>
                <span>mother:</span>
                <span>{character.mother}</span>
              </div>

              <div className={styles["character__info"]}>
                <span>spouse:</span>
                <span>{character.spouse}</span>
              </div>
              
            </div>
          </div>
      </div>
    </>
  );
}

export default Character;
