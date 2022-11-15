import { useState } from "react";
import Card from "./components/Card";
import { Body, Title, divCard } from "./styles";

export default function App() {
  const [codigos, setCodigos] = useState([]);
  const [listRastreio, setListRastreio] = useState([]);

  function getCodes() {
    const codes = listRastreio.split(",");
    setCodigos(codes);
  }
  console.log(codigos);
  return (
    <Body>
      <Title>Digite o codigo de ratreio</Title>

      <div>
        <input type="text" onChange={(e) => setListRastreio(e.target.value)} />
        <button onClick={getCodes}>Rastreio</button>
      </div>

      <divCard>
        {codigos.map((codigo, idx) => (
          <Card codigo={codigo} key={idx} />
        ))}
      </divCard>
    </Body>
  );
}
