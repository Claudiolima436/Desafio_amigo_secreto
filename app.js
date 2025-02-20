//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const inputNome = document.getElementById("amigo");
let amigos = [];

function adicionarAmigo() {
    const nome = inputNome.value.trim();
    if (!nome) {
        alert("Por favor, insira um nome válido.");
        return;
    }
    if (!amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        inputNome.value = "";
    }
}

function atualizarLista() {
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length > 0) {
        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceSorteado];
        resultado.innerHTML = `<li class="sorteado">Amigo Secreto: ${amigoSorteado}</li>`;
    }
}

