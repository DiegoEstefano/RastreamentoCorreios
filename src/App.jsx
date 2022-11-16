import { useState } from "react";
import Card from "./components/Card";
import { Body, Title, DivCard, DivButton } from "./styles";

export default function App() {
  const [codigos, setCodigos] = useState([]);
  const [listRastreio, setListRastreio] = useState([]);

  function getCodes() {
    const codes = listRastreio.split(",");
    setCodigos(codes);
  }
  return (
    <Body>
      <Title>Digite o codigo de ratreio</Title>
      <DivButton>
        <input type="text" onChange={(e) => setListRastreio(e.target.value)} />
        <button onClick={getCodes}>Rastrear</button>
      </DivButton>
      <DivCard>
 
        {codigos.map((codigo, idx) => (
          <Card codigo={codigo} key={idx} />
        ))}
         
      </DivCard>
    </Body>
  );
}
