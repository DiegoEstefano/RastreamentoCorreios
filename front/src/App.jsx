import { useState } from "react";
import { BsArrowLeftRight } from "react-icons/bs";
import Card from "./components/Card";
import { Body, Title, DivButton } from "./styles";

export default function App() {
  const [codigos, setCodigos] = useState([]);
  const [listRastreio, setListRastreio] = useState([]);

  function getCodes() {
    const codes = listRastreio.split(",");
    setCodigos(codes);
  }
  return (
    <Body>
      <Title>Diego&Track</Title>
      <DivButton>
        <div>
          <p>Digite o seu código de rastreio:</p>
        </div>
        <input
          placeholder="A12345678BR"
          type="text"
          onChange={(e) => setListRastreio(e.target.value)}
        />
        <>
          <button onClick={getCodes}>
            <div>Rastrear</div> <BsArrowLeftRight />
          </button>
        </>
      </DivButton>
      {codigos.map((codigo, idx) => (
        <Card codigo={codigo} key={idx} />
      ))}
    </Body>
  );
}
