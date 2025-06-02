import axios from "axios";
import { TarefaPath } from "./paths";
import { ITarefa } from "../interfaces/tarefa";

export function buscarTarefas(params?: { prioridade?: number }) {
    return axios.get(TarefaPath, {params});
}

export function criarTarefa(params: ITarefa, listaId: number) {
    return axios.post(TarefaPath, params, {
        params: {
            listaId: listaId
        }
      })
}

export function editarTarefa(params: ITarefa) {
    return axios.put(TarefaPath + `/${params.id}`, params)
}

export function marcarTarefa(id: number) {
    return axios.patch(TarefaPath + `/${id}` + "/completar")
}

export function desmarcarTarefa(id: number) {
    return axios.patch(TarefaPath + `/${id}` + "/incompletar")
}

export function deletarTarefa(id: number) {
    return axios.delete(TarefaPath + `/${id}`)
}