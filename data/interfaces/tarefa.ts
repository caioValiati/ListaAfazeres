
export interface ITarefa {
    id?: number;
    descricao: string;
    prioridade: number;
    concluida: boolean;
}

export interface ITarefaUrgente extends ITarefa {
    lista: string;
}