import axios from "axios";
import { TarefaPath } from "./paths";
import { ITarefa } from "../interfaces/tarefa";

export function buscarTarefas(params?: {completed?: boolean, prioridade?: number}) {
    return axios.get(TarefaPath, {params});
}

export function criarTarefa(params: ITarefa, listaId: number) {
    return axios.post(TarefaPath, params, {
        params: {
            listaId: listaId
        }
      })
}