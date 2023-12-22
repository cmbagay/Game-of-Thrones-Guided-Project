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

    const mappedCharacter = await Promise.all(character.map(async(character) => {
      let fatherName = "";

      if ( character.fatherName) {
        const fatherNameData = await ASOIAFapi.getName(character.fatherName)
        if (!fatherNameData.isError) {
          fatherName = fatherNameData.data.name;
        }
      }

      let motherName = "";

      if ( character.motherName) {
        const motherNameData = await ASOIAFapi.getName(character.motherName)
        if (!motherNameData.isError) {
          motherName = motherNameData.data.name;
        }
      }

      let spouseName = "";

      if ( character.spouseName) {
        const spouseNameData = await ASOIAFapi.getName(character.spouseName)
        if (!spouseNameData.isError) {
          spouseName = spouseNameData.data.name;
        }
      }


      return {...character, fatherName, motherName, spouseName  }
    }));
    console.log("mappedCharacter : ", mappedCharacter);

    if(!isError){
      setCharacter(character);
      setCharacter(mappedCharacter)
    }

    return () => {}
  }
  
  getCharacter();
  
  return (
      <div className="character__div">
          <div key={character.id} className={styles["character"]}>
             <div className={styles["character__infoContainer"]}>
             {
                character.name ? 
                <div className={styles["character__info__name"]}>
                    <span>{character.name}</span>
                </div>
                : null
              } 

              {
                character.alias ? 
                <div className={styles["character__info__name"]}>
                    <span>alias: {character.alias}</span>
                </div>
                : null
              } 

              {
                !character.name && !character.alias ? 
                <div className={styles["character__info__name"]}>
                    <span>Unnamed</span>
                </div> :
                null 
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

              {
                character.titles ? 
                <div className={styles["character__info"]}>
                  <span>Titles: {character.titles.join(", ")}</span>
                </div>
                :
                <div className={styles["character__info"]}>
                    <span>Titles: none </span>
                </div>
              }
              
              <div className={styles["character__info"]}>
                <span>Father: {character.fatherName}</span>
              </div>

              <div className={styles["character__info"]}>
                <span>Mother: {character.motherName}</span>
              </div>

              <div className={styles["character__info"]}>
                <span>Spouse: {character.spouseName}</span>
              </div>              
            </div>
          </div>
      </div>
  );
}

export default Character;
