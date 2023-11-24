import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export const DigimonDetails = () => {
    const [digimonDetails, setDigimonDetails] = useState({ images: [], levels: [], types: [], attributes: [], fields: [] })
    const {id} = useParams()

    async function getDigimonDetail(id) {
        try {
            const resp = await fetch(`https://www.digi-api.com/api/v1/digimon/${id}`)
            const data = await resp.json()
            // console.log(data)
            setDigimonDetails(data)
        } catch (error) {
            console.log(error)
        }
    
        
    }

    useEffect(() => {
        getDigimonDetail(id)
    }, []);

    return(
        <>

            <div className='h-screen flex justify-center items-center'>
                <div className="card card-side  w-3/6 bg-base-100 shadow-xl">
                    {
                        digimonDetails.images.map((image, index) => (

                            <figure key={index}><img src={image.href} alt="Algun Digimon" className='object-cover w-full'/></figure>
                        ))
                    }
                    <div className="card-body p-2 h-96 gap-y-11">
                        <h2 className="card-title justify-center text-3xl border-2 border-rose-700">{digimonDetails.name}</h2>
                        <div className='flex flex-row items-center bg-emerald-600 shadow-lg text-white font-bold'>

                            <p>Level:</p>
                            {
                                digimonDetails.levels.map((level, index) => (

                                    <p key={index} className='text-xs'>{level.level}</p>
                                ))
                            }
                        </div>
                        <div className='flex flex-row items-center bg-emerald-600 shadow-lg text-white font-bold'>

                            <p>Type:</p>
                            {
                                digimonDetails.types.map((type, index) => (

                                    <p key={index} className='text-xs'>{type.type}</p>
                                ))
                            }
                        </div>
                        <div className='flex flex-row items-center bg-emerald-600 shadow-lg text-white font-bold'>

                            <p>Atribute:</p>
                            {
                                digimonDetails.attributes.map((attribute, index) => (

                                    <p key={index} className='text-xs'>{attribute.attribute}</p>
                                ))
                            }
                        </div>  
                        <div className='flex flex-row items-center bg-emerald-600 shadow-lg text-white font-bold'>

                            <p>Fields:</p>
                            {
                                digimonDetails.fields.map((field, index) => (

                                    <p key={index} className='text-xs'>{field.field}</p>
                                ))
                            }
                        </div>  
                    </div>
                </div>
            </div>

            
        </>
    )
}
