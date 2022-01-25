import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { Characters } from '../models/Characters';
import Card from '../components/Card';



const Search = ({history}) => {
  
  const location = useLocation()
  const {q = ""} = queryString.parse(location.search)
  const [input, setInput] = useState(q);
  const [characters, setCharacters] = useState([]);
  
  const getCharacters = useCallback(() => {
      if(input.trim() !== ""){
        const value = input.toLocaleLowerCase()
        const chars = Characters.filter((character)  => {
          return character.name.toLowerCase().includes(value)}
        )
        setCharacters(chars)
      }else {
        setCharacters([])
      }
  }, [input]);
  

  const handleChange = (e) => {
      const value = e.target.value;
      setInput(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(`?q=${input}`)
  }
  
  useEffect(() => {
   getCharacters()
  }, [q, getCharacters]);
  

  return (
     <>
     <h2>Search Screem</h2>
     <hr/> 
        <div className='row'>
          <div className='col-6'>
          
            <h3 className='text-center'>Search</h3>
              <form onSubmit={handleSubmit}>
                <label className='form-label'>
                  Character: <input className='form-control'
                  onChange={handleChange}
                   autoComplete='off' value={input} placeholder='Character name' type="text"/>
                </label>
              </form>
          </div>
            <h2 className='text-center'>Results {characters.length}</h2>
          <div className='row'>
            {
              characters.length === 0 && 
              <div className='alert alert-warning text-center'>
                Please Search a character.
              </div>
            }

            { characters && 
            characters.map(el => 
            { return ( <Card key={el.id} {...el} /> ) }) 
            }
          </div>
        </div>
        
     </>
  )
};

export default Search;
