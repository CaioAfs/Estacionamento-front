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
          if (item.hora === null) {
            // se for null, define as propriedades horas e minutos como null
            return { ...item, horas: null, minutos: null };
          } else {
            // se não for null, converte a string da hora em um objeto Date
            const date = new Date(item.hora);
            // obtém as horas e os minutos a partir do objeto Date
            const hours = date.getHours();
            const minutes = date.getMinutes();
            // retorna um novo objeto com as horas, minutos e as outras propriedades do item original
            return { ...item, horas: hours, minutos: minutes };
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
                  {item.id} {item.horas !== null && item.minutos !== null ? `- ${item.horas}:${item.minutos}` : ''}
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
