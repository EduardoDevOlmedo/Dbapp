import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { authTypes } from '../types/authTypes';

const LoginScreen = () => {
  
  const history = useHistory()
  const {dispatch} = useContext(AuthContext)
  const [input, setInput] = useState({
    inputOne: "",
    inputTwo: ""
  });
  
  const [data, setData] = useState(true);

  const {inputOne, inputTwo} = input

  
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  const handleChange = (e) => {
    setInput({
      ...input, [e.target.name]: e.target.value
    })
  }

  const handleLogin = () => {
    
    if(input.inputOne && input.inputTwo === "admin"){   
      dispatch({
        type: authTypes.login})
      history.push("/men")
      setData(true)
    }
    else {
      setData(false)
    }
  }
  
 
  useEffect(() => {}, [input]);
  

  return (
      <div className='container mt-5 text-center'>
          <img className='goku' src='/assets/animate.gif' alt='goku-gif' />
          <h1 className='mt-3'> Login Screen</h1>
         <form onSubmit={handleSubmit}>
           <label className='m-3 d-flex'>User: <input onChange={handleChange} autoComplete='false' name="inputOne" value={inputOne} placeholder='User'/></label>
           <label className='m-3 d-flex'>Pass: <input onChange={handleChange} autoComplete='false' name="inputTwo" value={inputTwo} placeholder='Pass'/></label>
           <button type='submit' className='btn btn-info' onClick={handleLogin}>Login</button>
           {
              !data && <p className='text-center text-danger mt-2'>Invalid password or username. Try Again.</p> 
           }
         </form>
      </div>
  )
};

export default LoginScreen;
