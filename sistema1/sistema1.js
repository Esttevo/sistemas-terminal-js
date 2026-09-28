const prompt = require("prompt-sync")();
let opcao;

let listaAlunos = new Array();

function menu() {
    do {
         console.log("\n=== MENU ===");
         console.log("1 - Cadastrar Aluno");
         console.log("2 - Listar todos os alunos");
         console.log("3 - Buscar aluno por nome");
         console.log("4 - Listar todos os alunos aprovados");
         console.log("5 - Media geral da turma");
         console.log("0 - Sair");
         
         opcao = Number(prompt("Escolha uma opção: "));

        switch (opcao) {
            case 1:
                criarAluno();
                 break;
             case 2:
                listarAlunos();
              break;
             case 3: 
                buscarPeloNome();
             break;
             case 4:
                alunosAprovados();
                break;
             case 0:
                 console.log("Programa encerrado.");
                 break;
             case 5: 
                mediaGeralTurma();
                 break;
            default:
                console.log("Opção inválida.");
        }
    } while (opcao !== 0);
}

function criarAluno() {
    let nome = prompt("digite o nome do aluno");
    let idade = Number(prompt("digite a idade do aluno"));
    let curso = prompt("digite o curso do aluno");
    let nota1 = Number(prompt("digite a nota 1 do aluno"));
    let nota2 = Number(prompt("digite a nota 2 do aluno"));

    listaAlunos.push(new Aluno(nome, idade, curso, nota1, nota2));
}

function listarAlunos() {
    listaAlunos.forEach(aluno => console.log(`Nome: ${aluno.nome} curso: ${aluno.curso} Media: ${aluno.media()}`));
}

function buscarPeloNome() {
    let nomeBuscar = prompt("Qual o nome do aluno que deseja buscar?")

    let alunoBuscado = listaAlunos.find(aluno => aluno.nome == nomeBuscar);

    console.log(alunoBuscado);
}

function alunosAprovados() {
    let arrayAprovados = listaAlunos.filter(function(aluno) {
        let somaNotas = aluno.nota1 + aluno.nota2;
        let mediaNota = somaNotas / 2;
        return mediaNota >= 7;
    })
    console.log(...arrayAprovados);
}

function mediaGeralTurma() {
    let mediaGeral = listaAlunos.reduce((total, aluno) => {
        return total + aluno.nota1 + aluno.nota2;
    },0)

    mediaGeral = mediaGeral / (listaAlunos.length * 2);

    console.log(mediaGeral);
}

function Aluno(nome, idade, curso, nota1, nota2) {
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
    this.nota1 = nota1;
    this.nota2 = nota2;
}

Aluno.prototype = {
    constructor : Aluno,

    media() {
        return (this.nota1 + this.nota2) / 2;
    }
};



menu();