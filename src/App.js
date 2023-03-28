import React from 'react';
import Topmenu from './topmenu';
import Estacionamento from './estacionamento';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const App = () => {
  return (
    <div className="app">
      <Topmenu />
      <div className='container'>
        <Estacionamento />
      </div>
    </div>

  );
};

export default App;