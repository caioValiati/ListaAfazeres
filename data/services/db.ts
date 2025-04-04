import { Lista } from "../interfaces/lista"
import { TarefaUrgente } from "../interfaces/tarefa"

export const TarefasUrgentes: TarefaUrgente[] = [
    {
        id: 1,
        descricao: "Estudar React",
        prioridade: 1,
        lista: "Linguagens de Programação",
        concluida: false,
    },
    {
        id: 2,
        descricao: "Fazer compras",
        prioridade: 3,
        lista: "Casa",
        concluida: false,
    },
    {
        id: 3,
        descricao: "Limpar a casa",
        prioridade: 2,
        lista: "Casa",
        concluida: true,
    },
]

export const Listas: Lista[] = [
    {
        id: 1,
        descricao: "Linguagens de Programação",
        tarefas: [
            {
                id: 1,
                descricao: "Estudar React",
                prioridade: 1,
                concluida: false,
            },
            {
                id: 2,
                descricao: "Estudar JavaScript",
                prioridade: 2,
                concluida: true,
            },
            {
                id: 3,
                descricao: "Estudar Python",
                prioridade: 3,
                concluida: false,
            },
        ],
        qntdConcluidas: 1,
        qntdTarefas: 3,
        cor: "#FF5733",
    },
    {
        id: 2,
        descricao: "Casa",
        tarefas: [
            {
                id: 4,
                descricao: "Fazer compras",
                prioridade: 3,
                concluida: false,
            },
            {
                id: 5,
                descricao: "Limpar a casa",
                prioridade: 2,
                concluida: true,
            },
            {
                id: 6,
                descricao: "Limpar o quintal",
                prioridade: 2,
                concluida: true,
            },
            {
                id: 7,
                descricao: "Tirar o Lixo",
                prioridade: 2,
                concluida: true,
            },
            {
                id: 8,
                descricao: "Pendurar quadro",
                prioridade: 2,
                concluida: false,
            },
        ],
        qntdConcluidas: 3,
        qntdTarefas: 5,
        cor: "#33FF57",
    },
]