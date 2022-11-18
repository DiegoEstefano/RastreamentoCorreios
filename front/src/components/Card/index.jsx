import { useState, useEffect } from "react";
import getRastreio from "../../services/getRastreio";
import { DivCard, TrackNumber, EventCard } from "../Card/style";
import box from "../../assets/box.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Card({ codigo, index }) {
  const [rastreio, setRastreio] = useState();
  const [clicked, setClicked] = useState(false);

  const Verify = (index) => {
    if (clicked === index) {
      // se já estiver clicado então ele vai fechar
      return setClicked(null);
    }
    setClicked(index);
  };

  useEffect(() => {
    async function getData() {
      const result = await getRastreio(codigo);
      setRastreio(result);
    }
    getData();
  }, []);

  // verificação de click do Dropdown
console.log(rastreio)
  return (
    <DivCard>
      {rastreio ? (
        <>
          <TrackNumber onClick={() => Verify(index)} key={index}>
            Número de Pedido <img src={box} /> : {rastreio.codigo}
            <span>
              {clicked === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </TrackNumber>

          {clicked === index ? (
            <>
              {rastreio.eventos.map((evento, i) => (
                <EventCard key={i}>
                  <h4>
                    {`${evento.local} `}
                    <span>
                      {`${evento.data}`}
                      {` às ${evento.hora}`}
                    </span>
                  </h4>
                  <p>{evento.status}</p>
                </EventCard>
              ))}
            </>
          ) : null}
        </>
      ): "Código não encontrado, verifique o código digitado."}
    </DivCard>
  );
}
