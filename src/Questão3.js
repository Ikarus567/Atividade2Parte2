const produtosJSON = `{
    "produtos": [
    {"nome": "Mouse", "preco": 25.90},
    {"nome": "Teclado", "preco": 89.09},
    {"nome": "Monitor", "preco": 450.00},
    {"nome": "Cabo USB", "preco": 15.00}
    ]
}`;

function maiscaros(produtosJSON){
    const tabela = JSON.parse(produtosJSON)
    let resultado = []

    for (const produtos of tabela.produtos){
        if(produtos.preco > 50){
            resultado.push(produtos.nome)
        }
    }

    return resultado
}

console.log(maiscaros(produtosJSON))
