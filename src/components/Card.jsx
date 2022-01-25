import React from 'react';
import {Link} from "react-router-dom"
const Card = ({name, description, type, id}) => {
  
    const PATH = `/assets/${type}-${id}.png`
    return (
        <div className='card m-3 col-12 col-md-4' style={{
               height: "350px",
               width: "auto"
        }}>
            <div className='card-body'>
            <h2 className='card-title'> {name} </h2>
            <img className='card-img-top' style={{ height: "200px",
                 width: "200px"}} src={PATH} alt={id} />
            <p className='card-text'> {description} </p>
            <Link className='card-link' to={`/character/${id}`}> 
                Ver más...
            </Link>
            </div>
        </div>
      )
};

export default Card;
