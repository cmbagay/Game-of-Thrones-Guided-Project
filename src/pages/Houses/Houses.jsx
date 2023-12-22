import styles from "./Houses.module.css";
import ASOIAFapi from "../../services/ASOIAFApi";

import {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination";


function Houses() {

    const [houses, sethouses] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const page = parseInt(queryParams.get('page'), 10);
    const pageSize = parseInt(queryParams.get('pageSize'), 10);

    useEffect(() => {
      
      async function getHouses(){
      const {data: houses, isError} = await ASOIAFapi.getHouses(page, pageSize);
      const mappedHouses = await Promise.all(houses.map(async(house) => {
        let currentLordName = "";
        let swornMemberNames = [];
        if ( house.currentLord) {
          const currentLordData = await ASOIAFapi.getName(house.currentLord)
          if (!currentLordData.isError) {
            currentLordName = currentLordData.data.name;
          }
        }

        if (house.swornMembers && Array.isArray(house.swornMembers) && house.swornMembers.length > 0) {
          const swornMemberData = await Promise.all(house.swornMembers.map(u => ASOIAFapi.getName(u)));
          swornMemberData.forEach(member => {
            if (!member.isError) {
              swornMemberNames.push(member.data.name);
            }
          })
          
        }

        return {...house, currentLordName, swornMemberNames }
      }));
      console.log("mappedHouses : ", mappedHouses);

        if(!isError){
          sethouses(mappedHouses);
        }
      }

      

      getHouses();

      return () => {}
    }, [page, pageSize])

  

  return (
    <>
      <Pagination page={1} pageSize={10} />
      <div className="houses__div">
        {
          houses.map((houses, index) => 
          <div key={houses.id} className={styles["houses"]}>
            <div className={styles["houses__infoContainer"]}>
              <div className={styles["houses__info__name"]}>
                <span><h4>{houses.name}</h4></span>
              </div>

              {
                houses.titles ?
                <div className={styles["houses__info"]}>
                  <span>{houses.titles.join(", ")}</span>
                </div>
                :
                null
              }

                <div className={styles["houses__info"]}>
                  <span>Current Lord: {houses.currentLordName}</span>
                </div>
              
                <div className={styles["houses__info"]}>
                  <span>Sworn Members: {houses.swornMemberNames.join(", ")}</span>
                </div>
 
            </div>
          </div>
        )}
      </div>
      <Pagination page={1} pageSize={10} />
    </>
  );
}
  

export default Houses;