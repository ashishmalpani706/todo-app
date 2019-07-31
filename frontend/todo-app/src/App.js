import React, {Component} from 'react';
import FirstComponent, {SecondComponent} from './components/examples/FirstComponent.jsx'
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
