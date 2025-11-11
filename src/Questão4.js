const endereco = {
    rua: "Av. Paulista",
    numero: 1000,
    cidade: "São Paulo",
    cep: "01310-100"  
};

function formatarstr(usuario){
    return`${endereco.rua}, ${endereco.numero} - ${endereco.cidade} - CEP:${endereco.cep}`;
}

console.log(formatarstr(endereco))
