const prompt = require("prompt-sync")();
let opcao;

const cardapio = [
 { codigo: 1, nome: "X-Borger", preco: 18 },
 { codigo: 2, nome: "X-Salada", preco: 22 },
 { codigo: 3, nome: "Batata Frita", preco: 15 },
 { codigo: 4, nome: "Refrigerante", preco: 7 }
];

let listaPedidos = new Array();

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

function showMenu() {
    cardapio.forEach(cardapio => {
        console.log(`Codigo: ${cardapio.codigo}
Produto: ${cardapio.nome}`)
    })
}

function criarPedido() {

}

function Pedido(nomeCliente, produto, quantidade) {
    this.nomeCliente = nomeCliente;
    this.produto = produto;
    this.quantidade = quantidade;
}

function createPedido() {
    let nomeCliente = prompt("client name");

    let listaItens = new Array();

    let opc;
    do {
        showMenu();
       console.log("1 - adicionar mais itens") 
       console.log("0 - Sair") 

       opc = prompt("digite");

       switch (opc) {
            case 1: 
                let produto = listaPedidos.filter(produto => produto.codigo = prompt("write the product code"));
                listaItens.push(produto);
                break;
            case 0:
                break;
        }
    } while (opc != 0)

    let quantidade = prompt("quantity:");

    listaPedidos.push(new Pedido(nomeCliente, produto, quantidade));
}

function listPedidos() {
    listaPedidos.forEach(pedido => console.log(`Cliente: ${pedido.nome}
Produtos: ${produto.}`))
}

