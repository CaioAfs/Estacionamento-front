import React from 'react';
import Topmenu from './Topmenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import Estacionamento from './Estacionamento';

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