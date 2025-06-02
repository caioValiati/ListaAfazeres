
export interface ITarefa {
    id?: number;
    descricao: string;
    prioridade: number;
    completada: boolean;
}

export interface ITarefaUrgente extends ITarefa {
    lista: string;
}