import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SimpleForm } from './components/SimpleForm/SimpleForm';
import { Counter } from './components/Counter/Counter';

function App() {
  return (
    <div className="App">
      <SimpleForm/>

      <Counter/>
    </div>
  );
}

export default App;
