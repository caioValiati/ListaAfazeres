import { ITarefa } from "./tarefa";

export interface ILista {
    id: number;
    descricao: string;
    tarefas: ITarefa[];
    qntdConcluidas: number;
    qntdTarefas: number;
    cor: string;
}