import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>{process.env.REACT_APP_DOC_TITLE}</h2>
        <p>{process.env.REACT_APP_API_URL}</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
