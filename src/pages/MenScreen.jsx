import React from 'react';
import Card from '../components/Card';
import { Characters } from '../models/Characters';

const MenScreen = () => {
 
  const men = Characters.filter(el => el.type === "h")
  return (
    <>
   <div className='container mt-3'>
      <h1>Men Characters</h1>
      <hr/>
      <div className='row'>
      {
        men.map((char) => {
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

export default MenScreen;
