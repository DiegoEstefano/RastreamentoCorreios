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
    <div className="corpo">
      {rastreio && (
        <>
          <p>{rastreio.codigo}</p>
        </>
      )}
    </div>
  );
}
