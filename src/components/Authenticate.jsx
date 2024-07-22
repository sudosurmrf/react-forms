import { useState } from 'react';

const Authenticate = ({ token }) => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null)
  const handleClick = async () => {
    try{
      // console.log(token)
      const newCall = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
  
  
      });
      const responseCall = await newCall.json();
      setSuccessMessage(responseCall.message);
      // console.log(successMessage);
  
  
    }catch (error) {
      setError(error.message);
    }
 
  };

  return (
  <>
    <h2>Authenticate</h2>
    {successMessage && <p>{successMessage}</p>}

    {error && <p>{error}</p>}
    <button onClick={handleClick}>Authenticate Token</button>

  </>
);
};

export default Authenticate;