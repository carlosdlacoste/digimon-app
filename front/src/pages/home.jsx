import {DigimonList} from "../react-components/digimonList.jsx"

export const Home = () =>{
    return(
        <>
            <DigimonList/>
            {/* <div className="h-screen flex justify-center items-center">
                <div role="alert" className="alert m-3 h-24 flex justify-center text-white bg-rose-600 transition duration-0 hover:duration-75 shadow-2xl"> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6 border-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
                    {/* <div className="flex flex-col">
                        <span>Alerta! Aún No has iniciciado sesión.</span>
                        <span>Por favor inicia sesión o registrate ahora para comenzar a disfrutar del Digimundo</span>
                    </div>
                </div>
            </div> */}
        </>
    )
}