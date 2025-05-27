import axios from "axios";
import { TarefaPath } from "./paths";
export function buscarTarefas(params) {
    return axios.get(TarefaPath, { params });
}
