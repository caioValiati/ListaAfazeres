import axios from "axios";
import { ListaPath } from "./paths";

export function criarListaTarefa(params: any) {
    return axios.post(ListaPath + '/criarListaTarefa', params);
}
