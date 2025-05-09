import axios from "axios";
import { TarefaPath } from "./paths";

export function buscarTarefas(params?: {completed?: boolean, prioridade?: number}) {
    return axios.get(TarefaPath, {params});
}
