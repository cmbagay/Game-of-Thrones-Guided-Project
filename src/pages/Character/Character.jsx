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
      <div className="character__div">
          <div key={character.id} className={styles["character"]}>
             <div className={styles["character__infoContainer"]}>
              {
                character.name ?
                  <div className={styles["character__info"]}>
                    <span>name: {character.name}</span>
                  </div>
                :
                  <div className={styles["character__info"]}>
                    <span>alias: {character.alias}</span>
                  </div>
              }

              <div className={styles["character__info"]}>
                <span>culture: {character.culture}</span>
              </div>

              <div className={styles["character__info"]}>
                <span>gender: {character.gender}</span>
              </div>

              <div className={styles["character__info"]}>
                <span>born: {character.born}</span>
              </div>

              <div className={styles["character__info"]}>
                <span>died: {character.died}</span>
              </div>

              <div className={styles["character__info"]}>
                <span>titles: {character.titles}</span>
              </div>

              <div className={styles["character__info"]}>
                <span>father: {character.father}</span>
              </div>

              <div className={styles["character__info"]}>
                <span>mother: {character.mother}</span>
              </div>

              <div className={styles["character__info"]}>
                <span>spouse: {character.spouse}</span>
              </div>
              
            </div>
          </div>
      </div>
    </>
  );
}

export default Character;
