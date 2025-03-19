let amigos = [];

function adicionarAmigo() {
  amigo = document.getElementById("amigo");

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigo.value == "") {
    alert("Por favor, insira um nome válido.");
  } else {
    amigos.push(amigo.value.trim());
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
  if (amigos.length > 0) {
    let quantidadeDeAmigos = amigos.length;
    let amigoSorteado = amigos[Math.floor(Math.random() * quantidadeDeAmigos)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}!`;

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos = [];
  } else {
    alert("Por favor, adicione os nomes para realizer o sorteio.");
  }
}

let input = document.getElementById("amigo");
let button = document.getElementById("button");

input.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    button.click();
  }
});
