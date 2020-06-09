import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function getUsers(setUsers, setError){
  fetch('/api/users')
    .then((res)=> res.json())
    .then((json)=> setUsers(json))
    .catch((err)=>{ console.log("error fetch api/users: ", err); setError(err)})
}

function App() {
  const [users, setUsers]= useState([]);
  const [errors, setError]= useState(null);

  useEffect( ()=>{
    getUsers(setUsers, setError)
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        {errors ? <p>Error</p> : null}
        {users.map((user)=>
          <p key={user._id}> {user.name}</p>  
        )}
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
