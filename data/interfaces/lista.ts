import { Tarefa } from "./tarefa";

export interface Lista {
    id: number;
    descricao: string;
    tarefas: Tarefa[];
    qntdConcluidas: number;
    qntdTarefas: number;
    cor: string;
}