const pedidosJSON = `{
  "pedidos": [
    {"id": 1, "cliente": "Fernanda", "total": 120.50, "status": "entregue"},
    {"id": 2, "cliente": "Roberto", "total": 89.90, "status": "processando"},
    {"id": 3, "cliente": "Carla", "total": 45.30, "status": "entregue"}
  ]
}`;

function pedisosresumidos(pedidosJSON) {
  const historico = JSON.parse(pedidosJSON);

  let pentregues = 0;
  let processar = 0;
  let vtotal = 0;

  for (const pedido of historico.pedidos) {
    vtotal += pedido.total;
    if (pedido.status === "entregue") {
      pentregues++;
    } else if (pedido.status === "processando") {
      processar++;
    }
  }

  return `${pentregues} pedidos entregues, ${processar} em processamento. Valor total: R$ ${vtotal.toFixed(2)}`;
}

console.log(pedisosresumidos(pedidosJSON));