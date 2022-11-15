import apiUrl from "../constants/apiUrl";

const getRastreio = async (rastreio) => {
    const url = apiUrl(rastreio)
    const res = await fetch(url);
    const data = await res.json();
    return data;
};

export default getRastreio;