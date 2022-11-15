const user = import.meta.env.VITE_USER;
const token = import.meta.env.VITE_TOKEN;

const apiUrl = (codigoR) => `https://api.linketrack.com/track/json?user=${user}&token=${token}&codigo=${codigoR}`;

export default apiUrl;
