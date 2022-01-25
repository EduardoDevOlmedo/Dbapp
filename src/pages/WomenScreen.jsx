import React from 'react';
import Card from '../components/Card';
import {Characters} from "../models/Characters"

const WomenScreen = () => {
  
  const women = Characters.filter(el => el.type === "m")
  
  return (
      <>
      <div className='container mt-3'>
      <h1>Men Characters</h1>
      <hr/>
      <div className='row'>
      {
        women.map((char) => {
          return (
            <Card key={char.id} {...char}/>
          )
        })
      }
      </div>
    </div>
     </>
  )
};

export default WomenScreen;
