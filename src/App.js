import React from 'react';
import Topmenu from './topmenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Estacionamento from './estacionamento';


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