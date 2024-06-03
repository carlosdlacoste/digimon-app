import { useState, useEffect } from "react";
import { DigimonCard } from "./digimonCard.jsx";



export const DigimonList = () =>{
    const [digiList, setDigiList] = useState([])
    
    async function getAllDigimons() {
        try {
            const resp = await fetch("https://digi-api.com/api/v1/digimon?pageSize=20")
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
            
                <div className="container mx-auto my-8 lg:w-10/12 grid grid-cols-5 gap-4">
                    {
                        digiList.map((digimon) => (
                            <div key={digimon.id}>
                                <DigimonCard 
                                id={digimon.id} 
                                name={digimon.name} 
                                image={digimon.image} 
                                url={digimon.href}
                                item={digimon}
                                />
                            </div>
                                
                        ))
                    }
                </div>
        </>
    )
}