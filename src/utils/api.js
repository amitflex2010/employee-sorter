import axios from "axios";
import Config from '../config.json'

export const api = axios.create({
  baseURL: Config.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
