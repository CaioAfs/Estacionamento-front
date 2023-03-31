import React, { useState, useEffect } from 'react';
import api from "./services/api";
import './app.css';

function Estacionamento() {

  const [vagas, setVagas] = useState([]);
  const [hora, setHora] = useState("");

  useEffect(() => {
    api
    .get("/api/vagas")
    .then((response) => {
      const sortedData = response.data
        .sort((a, b) => a.id - b.id)
        .map((item) => {
          if (item.tempoEstacionado === null) {
            return { ...item, horas: null};
          } else {
            const time = item.tempoEstacionado;
            
            return { ...item, horas: time};
          }
        });
      setVagas(sortedData);
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
}, []);

  return (
    <table className="estacionamento">
    <tbody>
      {[...Array(10)].map((_, colIndex) => (
        <tr key={`col-${colIndex}`}>
          <td className='caminho-rua'></td>
          {[...Array(12)].map((_, rowIndex) => {
            const index = colIndex * 12 + rowIndex;
            const item = vagas[index];
            if (!item) return null;
            const isSecondInPair = rowIndex > 0 && rowIndex % 2 === 0;
            return (
              <React.Fragment key={item.id}>
                {isSecondInPair && <td className='caminho-rua'></td>}
                <td className='vaga' style={{ backgroundColor: item.temCarro ? '#9ef09e' : '#f19898' }} data-tem-carro={item.temCarro}>
                  {item.id} {item.horas !== null ? `- ${item.horas}` : ''}
                </td>
              </React.Fragment>
            );
          })}
          <td className='caminho-rua'></td>
        </tr>
      ))}
    </tbody>
  </table>
  );

}
export default Estacionamento;
