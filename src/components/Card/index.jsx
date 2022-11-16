import { useState, useEffect } from "react";
import getRastreio from "../../services/getRastreio";

export default function Card({ codigo }) {
  const [rastreio, setRastreio] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await getRastreio(codigo);
      setRastreio(result);
    }
    getData();
  }, []);

  return (
    <div>
      <p>Número de Pedido</p>
      {rastreio && (
        <>
          {rastreio.length === 0 && <p>Carregando...</p>}
          <h3>{rastreio.codigo}</h3>
         
        </>
      )}
    </div>
  );
}
