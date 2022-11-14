import { useState, useEffect } from "react";
const user = import.meta.env.VITE_USER;
const token = import.meta.env.VITE_TOKEN;
import "./App.css";
let codigoR = ["qj604344714br"];

export default function Home() {
  const [rastreio, setRastreio] = useState([]);

  const getRastreio = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setRastreio(data);
  };

  useEffect(() => {
    const API = `https://api.linketrack.com/track/json?user=${user}&token=${token}&codigo=${codigoR}`;
    getRastreio(API);
  }, []);

  return (
    <div className="corpo">
      {rastreio && (
        <>
          {console.log(rastreio.codigo)}
          <input type="text" />
          <button>Rastreio</button>
        </>
      )}
    </div>
  );
}
