type aluno = {
    nome: string,
    cursos?: string[],
    idade: number;
}

const alunos: aluno[] = [
    {
        nome: "Matheus",
        cursos: ["Front-end", "UX/UI"],
        idade: 18,
    },
    {
        nome: "Juliana",
        cursos: ["Back-end", "Python"],
        idade: 15
    }
]

alunos.push({
    nome: "Cassandra",
    cursos: ["Java", "Front-end"],
    idade: 26,
})

const novoAluno: aluno = {
    nome: "Bilbo",
    idade: 112,
}