import axios from "axios";
import { BASEURL } from "../../utils/env";

const api = axios.create({
  baseURL: BASEURL,
});

export default api;
