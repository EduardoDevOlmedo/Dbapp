import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { Characters } from '../models/Characters';
import Card from '../components/Card';



const Search = ({history}) => {
  
  const location = useLocation()
  const {q = ""} = queryString.parse(location.search)
  const [input, setInput] = useState(q);
  const [characters, setCharacters] = useState([]);
  
  const getCharacters = () => {
    if(input.trim() !== ""){
      const value = input.toLocaleLowerCase()
      const chars = Characters.filter((character)  => {
        return character.name.toLowerCase().includes(value)}
      )
      setCharacters(chars)
    }else {
      setCharacters([])
    }

  }

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
  }, [q]);
  

  return (
     <>
     <h2>Search Screem</h2>
     <hr/> 
        <div className='row'>
          <div className='col-6'>
          
            <h3>Search</h3>
              <form onSubmit={handleSubmit}>
                <label className='form-label'>
                  Character: <input className='form-control'
                  onChange={handleChange}
                   autoComplete='off' value={input} placeholder='Character name' type="text"/>
                </label>
                <button className='btn btn-info w-100' type='submit'>Search</button>
              </form>
          </div>
          <div className='col-6'>
            <h2>Results {characters.length}</h2>
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
