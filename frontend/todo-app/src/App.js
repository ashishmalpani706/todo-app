import React, {Component} from 'react';
import FirstComponent from './components/examples/FirstComponent.jsx'
import SecondComponent from './components/examples/SecondComponent.jsx'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello React
      <FirstComponent></FirstComponent>
      <SecondComponent/>
    </div>
  );
}

export default App;
