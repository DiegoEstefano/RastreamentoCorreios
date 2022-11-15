import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

export default function App() {
  const [codigos, setCodigos] = useState([]);
  const [listRastreio, setListRastreio] = useState([]);

  function getCodes() {
    const codes = listRastreio.split(",");
    setCodigos(codes);
  }
  console.log(codigos);
  return (
    <div className="corpo">
      <>
        <div>
          <input
            type="text"
            onChange={(e) => setListRastreio(e.target.value)}
          />
          <button onClick={getCodes}>Rastreio</button>
        </div>

        {codigos.map((codigo, idx) => (
          <Card codigo={codigo} key={idx} />
        ))}
      </>
    </div>
  );
}
