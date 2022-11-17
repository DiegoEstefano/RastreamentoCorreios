import api from "./api";
const endpoint =
  "json?user=estefano_costa_@hotmail.com&token=792d836da330c20dfcca0a07a73e8132522192ea748ae7c0728e8ebc644a38d2&codigo=";

export default async function getActualState(code: string) {
  try {
    const result = await api.get(endpoint + code);
    if (result.data.eventos.length) return result.data.eventos[0].status;
  } catch (error) {
    console.log("Erro ao gerar status", error);
  }
}
