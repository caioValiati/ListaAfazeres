import { ITarefa } from "./tarefa";

export interface ILista {
    id: number;
    titulo: string;
    tarefas: ITarefa[];
    cor: string;
}