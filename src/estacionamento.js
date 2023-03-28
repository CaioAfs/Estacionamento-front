import React, { useState, useEffect } from 'react';
import api from "./services/api";
import './app.css';

function Estacionamento() {

  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    api
      .get("/api/vagas")
      .then((response) => {
        const sortedData = response.data.sort((a, b) => a.id - b.id);
        setVagas(sortedData);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  

  return (
    <div>
      <table className="estacionamento">
        <tbody className='bodyestacionameto'>
        {vagas.map(item => (
            <tr key={item.id}>
              <td className='vaga' style={{ backgroundColor: item.temCarro ? '#9ef09e' : '#f19898' }} >{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}
export default Estacionamento;