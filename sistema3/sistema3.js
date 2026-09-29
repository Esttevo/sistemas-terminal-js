const prompt = require("prompt-sync")();
let opcao;

let listaLivros = new Array();

do {
    console.log("\n=== MENU ===");
    console.log("1 - Cadastrar livro");
    console.log("2 - Listar todos os livros");
    console.log("3 - Listar livros disponíveis");
    console.log("4 - Buscar livro pelo título");
    console.log("5 - Emprestar livro");
    console.log("6 - Devolver livro");
    console.log("0 - Sair");
    
    opcao = Number(prompt("Escolha uma opção: "));
    
    switch (opcao) {
        case 1:
            registerLivro();
            break;
        case 2:
            listAllLivros();
            break;
        case 3:
            listAllAvailable();
            break;
        case 4:
            console.log(searchByName());
            break;
        case 5: 
            borrowLivro();
            break;
        case 6: 
            returnLivro();
            break;
        case 0:
            console.log("Programa encerrado.");
            break;
        default:
            console.log("Opção inválida.");
    }
} while (opcao !== 0);

function Livro(titulo, autor, ano, disponivel) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.disponivel = disponivel;
}


function registerLivro() {
    let titulo = prompt("what is the title: ");
    let autor = prompt("whats the autor: ");
    let ano = prompt("Qual o ano: ")
    let disponivel = true;

    listaLivros.push(new Livro(titulo, autor, ano, disponivel));
}


function listAllLivros() {
    listaLivros.forEach(livro => console.log(`
title: ${livro.titulo}
Autor: ${livro.autor}
year: ${livro.ano}
available: ${livro.disponivel}`));
}


function listAllAvailable() {
    console.log(listaLivros.filter(livro => livro.disponivel === true));
}


function borrowLivro() {
    let livro = searchByName();

    if (livro.disponivel === false ) {
        throw "ERRO: produto ja esta emprestado, impossivel emprestar";
    }

    console.log("Livro emprestado com sucesso!");
    livro.disponivel = false;
}

function returnLivro() {
    let livro = searchByName();

    if(livro.disponivel === true) {
        throw "ERRO: produto ja está devolvido, impossivel devlve";
    }

    console.log("Livro devolvido com sucesso!");
    livro.disponivel = true;
}

function searchByName() {
    return listaLivros.find(livro => livro.titulo == prompt("Qual o titulo do livro?: "));
}
 