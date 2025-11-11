const jsonString = `{
    "usuarios":[
    {"nome": "Carlos", "email": "carlos@email.com"},
    {"nome": "Maria", "email": "maria@email.com"},
    {"nome": "João", "email": "joao@email.com"}
    ]
}`;

function trazeremail(jsonString){
    const lista = JSON.parse(jsonString);
    let email = [];

    for (const usuario of lista.usuarios){
        email.push(usuario.email);
    }

    return email.join(', ');
}

console.log(trazeremail(jsonString));
