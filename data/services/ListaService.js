import axios from "axios";
import { ListaPath } from "./paths";
export function criarListaTarefa(params) {
    return axios.post(ListaPath, params);
}
export function buscarListas() {
    return axios.get(ListaPath);
}
