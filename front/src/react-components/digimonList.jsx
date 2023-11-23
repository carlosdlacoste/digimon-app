import { useState, useEffect } from "react";
import { DigimonCard } from "./digimonCard.jsx";



export const DigimonList = () =>{
    const [digiList, setDigiList] = useState([])
    
    async function getAllDigimons() {
        try {
            const resp = await fetch("https://www.digi-api.com/api/v1/digimon?pageSize=20")
            const data = await resp.json()
            // console.log(data.content)
            setDigiList(data.content)
        } catch (error) {
            console.log(error)
        }
    
        
    }
    
    useEffect(() => {
        getAllDigimons()
    }, []);

    return(
        <>
            {
                digiList.map((digimon) => (

                    <DigimonCard 
                    key={digimon.id} 
                    name={digimon.name} 
                    image={digimon.image} 
                    item={digimon}
                    />
                ))
            }
        </>
    )
}