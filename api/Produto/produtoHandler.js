let listaProdutos = [];

async function getProdutos(){

}

async function cadastrarProdutos(dados){
    listaProdutos.push(dados);
    return dados;
}

async function apagarProdutos(){
    listaProdutos = [];
}

module.exports = {
    getProdutos,
    cadastrarProdutos,
    apagarProdutos
}