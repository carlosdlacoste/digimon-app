import Proptypes from 'prop-types';

export const DigimonCard = (props) =>{
    return(
        <>
                    <div className="card w-40 bg-base-100 shadow-xl">
                        <figure><img src={props.image} alt="Algun Digimon" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{props.name}</h2>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Details</button>
                            </div>
                        </div>
                    </div>
        </>
    )
}

DigimonCard.propTypes = {
    item: Proptypes.object,
    name: Proptypes.string,
    image: Proptypes.string
}