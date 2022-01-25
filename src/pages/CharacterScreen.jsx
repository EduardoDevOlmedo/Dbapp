import React from 'react';
import { useParams } from 'react-router';
import { Characters } from '../models/Characters';

const CharacterScreen = ({history}) => {
  
    const {id} = useParams()
    const {type, name, description} = Characters.find(char => char.id === id)

    const path = `/assets/${type}-${id}.png`

    const handleBack = () => {
        history.goBack()
    }

    return (
        <div className='container row '>
            <div className='col-8'>
           
                <img className='img-thumbnail mt-3' style={{
                    width: "70%",
                    height: "400px"
                }} src={path} alt={`Dragon Ball: ${id}`}></img>
                <button onClick={handleBack} className='btn btn-outline-warning'>Go Back</button>
                <h3>{`${type.toUpperCase()}-${name}`}</h3>
                 <p>{description}</p>
            </div>
        </div>
  )
};

export default CharacterScreen;
