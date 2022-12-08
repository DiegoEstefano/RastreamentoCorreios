import { useState } from "react";
import Card from "./components/Card";
import { Body, DivButton, TopBar } from "./styles/styles";
import Title from "./components/Title/Title";
import box from "../../front/src/assets/box.png";

export default function App() {
  const [codigos, setCodigos] = useState([]);
  const [listRastreio, setListRastreio] = useState([]);

  function getCodes() {
    const codes = listRastreio.split(",");
    setCodigos(codes);
  }
  return (
    <Body>
      <Title />
      <p>Digite o seu código de rastreio:</p>
      <DivButton>
        <input
          placeholder="A12345678BR"
          type="text"
          onChange={(e) => setListRastreio(e.target.value)}
        />
        <>
          <button onClick={getCodes}>
            <p>Rastrear</p> <img src={box} />
          </button>
        </>
      </DivButton>
      {codigos.map((codigo, idx) => (
        <Card codigo={codigo} key={idx} />
      ))}
    </Body>
  );
}
