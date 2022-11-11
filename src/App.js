import React from 'react';
import Counter from "./components/Counter";
import IncreaseCounter from "./components/IncreaseCounter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import Carpma from './components/Carpma';
import IkiyeBol from './components/IkiyeBol';
import ModAl from './components/ModAl';
import './style.css';
import Asd from './components/Asd';

function App() {
  return (
    <div style={{textAlign:'center'}}>
      <Counter/>
      <IncreaseCounter/>
      <DecreaseCounter/>
      <IncreaseByTwoCounter/>
      <Carpma/>
      <IkiyeBol/>
      <ModAl/>
      <Asd/>
    </div>
  );
}

export default App;
