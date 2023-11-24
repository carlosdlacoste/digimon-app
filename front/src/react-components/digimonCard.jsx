import Proptypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const DigimonCard = (props) =>{
    const navigate = useNavigate()

    
    return(
        <>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <figure><img src={props.image} alt="Algun Digimon" className='h-52 object-cover w-full' /></figure>
                        <div className="card-body">
                            <h2 className="card-title truncate justify-center">{props.name}</h2> {/* Revisar como truncar el texto adecuadamente para que se corte de una mejor forma */}
                            <div className="card-actions justify-center">
                                <button className="btn bg-emerald-400">View Details</button>
                            </div>
                        </div>
                    </div>
        </>
    )
}

DigimonCard.propTypes = {
    id: Proptypes.number,
    item: Proptypes.object,
    name: Proptypes.string,
    image: Proptypes.string,
    url: Proptypes.string
}