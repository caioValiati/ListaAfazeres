import axios from "axios";
import { ListaPath } from "./paths";

export function criarListaTarefa(params: unknown) {
    return axios.post(ListaPath, params);
}

export function buscarListas() {
    return axios.get(ListaPath)
}

export function excluirLista(id: string) {
    return axios.delete(ListaPath + `/${id}`)
}
