let amigos = [];

function adicionarAmigo() {
  amigo = document.getElementById("amigo");

  if (amigo.value == "") {
    alert("Por favor, insira um nome válido.");
  } else {
    amigos.push(amigo.value);
    amigo.value = "";
    atualizarListaAmigos();
  }
}

function atualizarListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  amigos.forEach((amigo) => {
    let itemLista = document.createElement("li");
    itemLista.textContent = amigo;
    listaAmigos.appendChild(itemLista);
  });
}

function sortearAmigo() {
  let quantidadeDeAmigos = amigos.length;
  let amigoSorteado = amigos[Math.floor(Math.random() * quantidadeDeAmigos)];
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}!`;

  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  amigos = [];
}
