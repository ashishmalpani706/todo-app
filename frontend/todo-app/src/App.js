import React, {Component} from 'react';
import FirstComponent from './components/examples/FirstComponent.jsx'
import SecondComponent from './components/examples/SecondComponent.jsx'
import Counter from './components/counter/Counter.jsx'
import ToDoApp from './components/todo/ToDoApp.jsx'
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

function App() {
  return (
    <div className="App">
      
      {/* <FirstComponent></FirstComponent>
      <SecondComponent/>
      <Counter/> */}
      <ToDoApp/>
    </div>
  );
}

export default App;
