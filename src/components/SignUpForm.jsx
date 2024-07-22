import { useState } from 'react';

const SignUpForm = () => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: userName, password: passWord })
      });
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setUserName(event.target.value)}
          value={userName}
          type='text'
        /><br />
        <input
          onChange={(event) => setPassWord(event.target.value)}
          value={passWord}
          type='password'
        /><br />
        <input type='submit' />
      </form>
    </>
  );
}

export default SignUpForm;
