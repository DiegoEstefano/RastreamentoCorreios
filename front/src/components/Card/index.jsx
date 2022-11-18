import { useState, useEffect } from "react";
import getRastreio from "../../services/getRastreio";
import { DivCard, TrackNumber, EventCard } from "../Card/style";
import box from "../../assets/box.png";

export default function Card({ codigo }) {
  const [rastreio, setRastreio] = useState();

  useEffect(() => {
    async function getData() {
      const result = await getRastreio(codigo);
      setRastreio(result);
    }
    getData();
  }, []);

  console.log(rastreio);
  return (
    <DivCard>
      {rastreio && (
        <>
          <TrackNumber>
            Número de Pedido <img src={box} /> : {rastreio.codigo}
          </TrackNumber>

          {rastreio.eventos.map((evento, i) => (
            <EventCard key={i}>
              <h4>{`Local: ${evento.local}   `}{`Data: ${evento.local}  `}</h4> 
              <p>{evento.status}</p>
            </EventCard>
          ))}
        </>
      )}
    </DivCard>
  );
}
