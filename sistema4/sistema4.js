const prompt = require("prompt-sync")();
let opcao;

const cardapio = [
 { codigo: 1, nome: "X-Borger", preco: 18 },
 { codigo: 2, nome: "X-Salada", preco: 22 },
 { codigo: 3, nome: "Batata Frita", preco: 15 },
 { codigo: 4, nome: "Refrigerante", preco: 7 }
];

let listaPedidos = new Array();

let idPedido = new Number();

do {
    console.log("\n=== MENU ===");
    console.log("1 - Cardapio");
    console.log("2 - Fazer epedido");
    console.log("3 - Ver todos os pedidos");
    console.log("4 - Buscar Pedido pelo numero");
    console.log("5 - mostrar faturamento total");
    console.log("0 - Sair");
    
    opcao = Number(prompt("Escolha uma opção: "));
    
    switch (opcao) {
        case 1:
            showMenu();
            break;
        case 2:
            createPedido();
            break;
        case 3:
            listPedidos();
            break;
        case 4:
            searchPedidoById();
            break;
        case 5: 
            faturamentoTotal()
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


function Pedido(idPedido, nomeCliente, listaItens, quantidade) {
    this.idPedido = idPedido;
    this.nomeCliente = nomeCliente;
    this.listaItens = listaItens;
    this.quantidade = quantidade;
}

function createPedido() {
    let nomeCliente = prompt("client name: ");

    let listaItens = new Array();
    let listaQuantidadeItens = new Array();

    let opc;
    do {
        console.log("1 - adicionar item");
        console.log("0 - Sair")
        opc = Number(prompt("digite: "));

        if(opc == 0 && listaItens.length == 0) {
            throw "lista vazia papa"
        }

       switch (opc) {
            case 1: 
                let codigo = prompt("write the product code : ");
                let produtoFind = cardapio.find(produto => produto.codigo == codigo);
                
                
                let quantidade = prompt("quantity: ");

                let listaProdutoEQuantidade = {
                    produto: {...produtoFind},
                    quantidade: quantidade
                };

                listaItens.push(listaProdutoEQuantidade);

                listaQuantidadeItens.push(quantidade);
                break;
            case 0:
                break;
        }
        
    } while (opc != 0)


    listaPedidos.push(new Pedido(++idPedido, nomeCliente, listaItens, listaQuantidadeItens));
}

function listPedidos() {
    listaPedidos.forEach(pedido => {
        console.log();
        console.log(`Id Pedido: ${pedido.idPedido}`);
        console.log(`Cliente: ${pedido.nomeCliente}`);
        pedido.listaItens.forEach((item) => {
            console.log(`${item.produto.nome} : X-${item.quantidade} R$${item.produto.preco}`);
        })
    
    })
};

function searchPedidoById() {
    let idPedido = Number(prompt("digite o id do pedido: ")); 
    let pedido = listaPedidos.find(pedido => pedido.idPedido === idPedido);

    console.log();
    console.log(`Id Pedido: ${pedido.idPedido}`);
    console.log(`Cliente: ${pedido.nomeCliente}`);
    pedido.listaItens.forEach((item) => {
        console.log(`${item.produto.nome} : X-${item.quantidade} R$${item.produto.preco}`);
    })
}

function faturamentoTotal() {
    let total = listaPedidos.map((pedido => pedido.listaItens.map((lista) => lista.produto.preco * lista.quantidade).reduce((total, preco)=> 
        total += preco, 0))).reduce((total, lista) => total += lista, 0);

    console.log(total);
}



