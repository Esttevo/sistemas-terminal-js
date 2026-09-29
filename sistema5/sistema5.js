const prompt = require("prompt-sync")();
let opcao;

let idFixo = new Number();

let listaReceitas = new Array();
let listaDespesas = new Array();
let movimentacoes = [...listaDespesas, ...listaReceitas];

do {
    console.log("\n=== MENU ===");
    console.log("1 - criar receita");
    console.log("2 - criar despesa");
    console.log("3 - Ver movimentações");
    console.log("4 - Buscar Pedido pelo numero");
    console.log("5 - mostrar faturamento total");
    console.log("0 - Sair");
    
    opcao = Number(prompt("Escolha uma opção: "));
    
    switch (opcao) {
        case 1:
            createReceita();
            break;
        case 2:
            createDespesa();
            break;
        case 3:
            listaMovimentacoes();
            break;
        case 4:
            mostrarTotalReceitas();
            break;
        case 5: 
            mostrarTotalDespesas();
            break;
        case 6: 
            mostrarSaldo();
            break;
        case 7:
            localizarPorId();
            break;
        case 8:
            removerMovimentacao();
            break;
        case 0:
            console.log("Programa encerrado.");
            break;
        default:
            console.log("Opção inválida.");
    }
} while (opcao !== 0);

function Receita(id, descricao, tipo, valor) {
    this.id = id;
    this.descricao = descricao;
    this.tipo = tipo;
    this.valor = valor;
}

function createReceita() {
    const id = ++idFixo;
    const descricao = prompt("Descrição da receita");

    let tipo = "receita";
   

    const valor = Number(prompt("Qual o valor da movimentação"));

    listaReceitas.push(new Receita(id, descricao, tipo, valor));

    movimentacoes = [...listaDespesas, ...listaReceitas];
}

function createDespesa() {
    const id = ++idFixo;
    const descricao = prompt("Descrição da receita");

    let tipo = "despesa";

    const valor = Number(prompt("Qual o valor da movimentação"));

    listaDespesas.push(new Receita(id, descricao, tipo, valor));

    movimentacoes = [...listaDespesas, ...listaReceitas];
}

function listaMovimentacoes() {

    movimentacoes.sort((a, b)=> a.id - b.id);

    movimentacoes.forEach(movi => console.log(`${movi.id}: Tipo: ${movi.tipo} Descrição: ${movi.descricao} valor: ${movi.valor}`));

}

function mostrarTotalReceitas() {
    let total = listaReceitas.map(receita => receita.valor).reduce((totalis, priceAction) => totalis += priceAction, 0);

    console.log(total);
}

function mostrarTotalDespesas() {
    let total = listaDespesas.map(receita => receita.valor).reduce((totalis, priceAction) => totalis += priceAction, 0);

    console.log(total);
}

function mostrarSaldo() {
    let totalDespesas = listaDespesas.map(receita => receita.valor).reduce((totalis, priceAction) => totalis += priceAction, 0);
    let totalReceitas = listaReceitas.map(receita => receita.valor).reduce((totalis, priceAction) => totalis += priceAction, 0);
    
    console.log(totalReceitas - totalDespesas);
}

function localizarPorId() {
   
    let id = Number(prompt("Qual id da movimentação?"));

    let movi = movimentacoes.find((movi) => movi.id === id);

    console.log(`${movi.id} Tipo: ${movi.tipo} Descrição: ${movi.descricao} valor: ${movi.valor}`)
}

function removerMovimentacao() {
    let id = Number(prompt("Qual id da movimentação?"));

    movimentacoes = movimentacoes.filter(receita => receita.id !== id);
    listaDespesas = listaDespesas.filter(despesa => despesa.id !== id);
    listaReceitas = listaReceitas.filter(receita => receita.id !== id);

    movimentacoes.sort((a, b)=> a.id - b.id);
    movimentacoes = [...listaDespesas, ...listaReceitas];

    movimentacoes.forEach(movi => console.log(`${movi.id} Tipo: ${movi.tipo} Descrição: ${movi.descricao} valor: ${movi.valor}`));

}