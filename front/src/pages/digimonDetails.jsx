import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CircleLoader from "react-spinners/CircleLoader";


export const DigimonDetails = () => {
    const [digimonDetails, setDigimonDetails] = useState({ images: [], levels: [], types: [], attributes: [], fields: [] })
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const navigate = useNavigate()

    async function getDigimonDetail(id) {
        try {
            const resp = await fetch(`https://digi-api.com/api/v1/digimon/${id}`)
            const data = await resp.json()
            // console.log(data)
            setDigimonDetails(data)
        } catch (error) {
            console.log(error)
        }
    
        
    }

    useEffect(() => {
        getDigimonDetail(id)
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)
        }, 2000)
    }, []);

    return(
        <>

            <div className='h-screen flex justify-center items-center'>
                {
                    loading ? 
                    <>
                        <CircleLoader color="#36d7b7" loading={loading} size={120} />
                    </>
                    :
                    <>
                        <div className='grid gap-y-8 w-3/6'>

                            <div className="card card-side bg-base-100 shadow-xl">
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
                                            digimonDetails.levels.length !== 0 ? digimonDetails.levels.map((level, index) => (

                                                <p key={index} className='text-xs'>{level.level}</p>
                                            ))

                                            :
                                                <p className='text-xs text-red-300'>Classified</p> 
                                        }
                                    </div>
                                    <div className='flex flex-row items-center bg-emerald-600 shadow-lg text-white font-bold'>

                                        <p>Type:</p>
                                        {
                                            digimonDetails.types.length !== 0 ?  digimonDetails.types.map((type, index) => (

                                                <p key={index} className='text-xs'>{type.type}</p>
                                            ))

                                            :
                                                <p className='text-xs text-red-300'>Classified</p>
                                        }
                                    </div>
                                    <div className='flex flex-row items-center bg-emerald-600 shadow-lg text-white font-bold'>

                                        <p>Atribute:</p>
                                        {
                                            digimonDetails.attributes.length !== 0 ?  digimonDetails.attributes.map((attribute, index) => (

                                                <p key={index} className='text-xs'>{attribute.attribute}</p>
                                            ))

                                            :
                                                <p className='text-xs text-red-300'>Classified</p>
                                        }
                                    </div>
                                    <div className='flex flex-row items-center bg-emerald-600 shadow-lg text-white font-bold'>

                                        <p>Fields:</p>
                                        {
                                            digimonDetails.fields.length !== 0 ? digimonDetails.fields.map((field, index) => (

                                                <img key={index} className='text-xs'src={field.image} alt="Uknown"/>
                                            ))

                                            :
                                                <p className='text-xs text-red-300'>Classified</p>
                                        }
                                    </div>
                                </div>
                            </div>
                            <button className="btn bg-red-600 w-64 mx-auto text-lg items-center" onClick={() => navigate("/")}>
                                <svg class="h-6 w-6 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
                                </svg>
                                Back
                            </button>
                        </div>
                    </>
                }
            </div>

            
        </>
    )
}
