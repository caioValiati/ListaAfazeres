export interface Tarefa {
    id: number;
    descricao: string;
    prioridade: number;
    concluida: boolean;
}

export interface TarefaUrgente extends Tarefa {
    lista: string;
}