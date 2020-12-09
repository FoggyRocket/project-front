import axios from "axios";

//valida si la aplicacion esta en produccion
const isProduction = process.env.NODE_ENV === "production";

// si la app esta ya en produccion colocara otra ruta de lo contrario usara localhost
const URL =  isProduction ? "heroku.com" : "http://localhost:3000/api";

axios.defaults.withCredentials = true;

export const _axios = axios.create({
    baseURL: URL,
    timeout:10000
})