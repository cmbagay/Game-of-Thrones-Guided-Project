import styles from "./Character.module.css";
import ASOIAFapi from "../../services/ASOIAFApi";

import {useState} from "react";
import { useParams } from "react-router-dom";

function Character() {
  const [character, setCharacter] = useState([]);

  const {id} = useParams();
  const url = useParams();

  async function getCharacter(){
    const {data: character, isError} = await ASOIAFapi.getCharacterById({id});

    if(!isError){
      setCharacter(character);
    }

    return () => {}
  }
  
  getCharacter();
  
  return (
      <div className="character__div">
        <div key={character.id} className={styles["character"]}>
            <div className={styles["character__infoContainer"]}>
            {
                character.titles ? 
                <div className={styles["character__info__name_3"]}>
                  <span>{character.titles.join(", ")}</span>
                </div>
                :
                null
              }

              {
                character.name ? 
                <div className={styles["character__info__name"]}>
                    <span>{character.name}</span>
                </div>
                : null
              } 

              {
                character.aliases ? 
                <div className={styles["character__info__name_2"]}>
                    <span>{character.aliases.join(", ")}</span>
                </div>
                : null
              } 

              {
                character.culture ? 
                <div className={styles["character__info"]}>
                  <span>Culture: {character.culture}</span>
                </div>
                :
                <div className={styles["character__info"]}>
                    <span>Unknown Origin</span>
                </div>
              }

              <div className={styles["character__info"]}>
                <span>Gender: {character.gender}</span>
              </div>

              {
                character.born ? 
                <div className={styles["character__info"]}>
                  <span>Born: {character.born}</span>
                </div>
                :
                <div className={styles["character__info"]}>
                    <span>Born: Unknown Birthdate</span>
                </div>
              }
              
              {
                character.died ? 
                <div className={styles["character__info"]}>
                  <span>Died: {character.died}</span>
                </div>
                :
                <div className={styles["character__info"]}>
                    <span>Died: Not Applicable</span>
                </div>
              }
           
            </div>
          </div>
      </div>
  );
}

export default Character;
