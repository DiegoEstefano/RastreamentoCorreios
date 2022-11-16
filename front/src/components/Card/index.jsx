import { useState, useEffect } from 'react';
import getRastreio from '../../services/getRastreio';
import { DivCard, TrackNumber } from '../../styles';
import box from '../../assets/box.png';
export default function Card({ codigo }) {
  const [rastreio, setRastreio] = useState();

  useEffect(() => {
    async function getData() {
      const result = await getRastreio(codigo);
      setRastreio(result);
    }
    getData();
  }, []);
  return (
    <DivCard>
      {rastreio && (
        <>
          <>
            <TrackNumber>
              Número de Pedido <img src={box} />: {rastreio.codigo}
            </TrackNumber>
          </>
          {rastreio.eventos.map((evento, i) => (
            <div key={i}>
              <p>{evento.status}</p>
              <p>{evento.local}</p>
              <p>{evento.data}</p>
            </div>
          ))}
        </>
      )}
    </DivCard>
  );
}
