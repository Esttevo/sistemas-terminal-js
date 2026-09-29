const prompt = require("prompt-sync")();
let opcao;

let listaProdutos = new Array();

do {
    console.log("\n=== MENU ===");
    console.log("1 - Cadastrar produto");
    console.log("2 - Listar produtos");
    console.log("3 - Buscar produto pelo código");
    console.log("4 - Adicionar estoque");
    console.log("5 - Retirar estoque");
    console.log("6 - Mostrar valor total do estoque");
    console.log("0 - Sair");
    
    opcao = Number(prompt("Escolha uma opção: "));
    
    switch (opcao) {
        case 1:
            cadastrarProduto();
            break;
        case 2:
            listarProdutos();
            break;
        case 3:
            buscarPorCodigo();
            break;
        case 4:
            adicionarEstoque();
            break;
        case 5:
            retirarEstoque();
            break;
        case 6: 
            valorTotal();
            break;
        case 0:
            console.log("Programa encerrado.");
            break;
        default:
            console.log("Opção inválida.");
    }
} while (opcao !== 0);


function cadastrarProduto() {
    let codigo = Number(prompt("Digite o codigo do produto"));
    let nome = prompt("Digite o nome do produto");
    let preco = Number(prompt("Digite o preço do produto"));
    let quantidade = Number(prompt("Digite a quantidade do produto"));

    listaProdutos.push(new Produto(codigo, nome, preco, quantidade));
}

function listarProdutos() {
    listaProdutos.forEach(produto => console.log(`${JSON.stringify(produto)}`));
}

function buscarPorCodigo() {
    let codigo = Number(prompt("Digite o codigo do produto a ser buscado"));

    console.log(listaProdutos.find(produto => produto.codigo === codigo));
}

function adicionarEstoque() {
    let codigo = Number(prompt("Digite o codigo do produto a ser buscado"));

    let produto = listaProdutos.find(produto => produto.codigo === codigo);

    let quantidade = Number(prompt(`Quantos ${produto.nome} você deseja adicionar ao estoque?`))

    produto.quantidade = produto.quantidade + quantidade;

    console.log(`Produto atualizado: ${produto.nome}, ${produto.quantidade}`);
}

function retirarEstoque() {
    let codigo = Number(prompt("Digite o codigo do produto a ser buscado"));
    let produto = listaProdutos.find(produto => produto.codigo == codigo);

    let quantidade = Number(prompt(`Quantos ${produto.nome} você deseja retirar do estoque?`))

    if (quantidade > produto.quantidade) {
         console.log("nao da de tirar mais doque tem");
         throw "jorge";
    } else {
        produto.quantidade = produto.quantidade - quantidade;
    }

    
    console.log(`Produto atualizado: ${produto.nome}, ${produto.quantidade}`);
    
}

function valorTotal() {
    let valorTotal = listaProdutos.map(produto => produto.preco * produto.quantidade).reduce((total, preco) => {
        return total + preco
    }, 0)
    console.log(valorTotal);
}

function Produto(codigo, nome, preco, quantidade) {
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
}