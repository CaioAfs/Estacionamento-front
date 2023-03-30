import React from 'react';
import Topmenu from './Topmenu';
import Estacionamento from './Estacionamento';
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