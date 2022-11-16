import { useState, useEffect } from 'react';
import getRastreio from '../../services/getRastreio';

export default function Card({ codigo }) {
  const [rastreio, setRastreio] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await getRastreio(codigo);
      setRastreio(result);
    }
    getData();
  }, []);

  console.log(rastreio);
  return (
    <div>
      <p>Número de Pedido</p>
      {rastreio && (
        <>
          <h3>{rastreio.codigo}</h3>
          {rastreio.eventos.map((evento) => (
            <>
            <p>{evento.status}</p>
            <p>{evento.local}</p>
            <p>{evento.data}</p>
            <p>{evento.hora}</p>
            </>
          ))}
        </>
      )}
    </div>
  );
}
