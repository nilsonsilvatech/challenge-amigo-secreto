//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Criamos um array vazio para guardar os nomes dos amigos
let amigos = []

/* 
Função para adicionar um novo amigo na lista 
- Captura o valor do input
- Valida se o campo não está vazio
- Valida se contém apenas letras (sem números)
- Adiciona ao array amigos
- Atualiza a lista na tela
- Limpa o campo de entrada
*/
function adicionarAmigo() {
    let input = document.getElementById("amigo")
    let nome = input.value.trim() // remove espaços extras

    // Validação: campo vazio
    if (nome === "") {
        alert("Por favor, insira um nome.")
        return
    }

    // Validação: apenas letras (sem números)
    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
        alert("Por favor, insira apenas nomes (não use números).")
        return
    }

    // Adiciona o nome ao array
    amigos.push(nome)

    // Atualiza a lista visível na tela
    mostrarLista()

    // Limpa o campo de entrada para digitar outro nome
    input.value = ""
}

/* 
Função para mostrar a lista de amigos na tela 
- Limpa a lista atual
- Cria um <li> para cada amigo no array
*/
function mostrarLista() {
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = "" // limpa lista

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li")
        item.textContent = amigos[i] // adiciona o nome
        lista.appendChild(item)      // insere no HTML
    }
}

/* 
Função para sortear um amigo secreto 
- Verifica se há amigos disponíveis
- Seleciona um índice aleatório
- Mostra o nome sorteado
- Remove o amigo sorteado do array para não repetir
- Atualiza a lista na tela
*/
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos disponíveis para sortear.")
        return
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length)
    let amigoSorteado = amigos[indiceAleatorio]

    // Mostra o resultado na tela
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `O amigo secreto sorteado foi: <strong>${amigoSorteado}</strong>`

    // Remove o amigo sorteado do array para não repetir
    amigos.splice(indiceAleatorio, 1)

    // Atualiza a lista na tela
    mostrarLista()
}

/* 
Função para reiniciar o sorteio 
- Limpa o array de amigos
- Limpa a lista e o resultado exibido na tela
- Alerta o usuário que um novo sorteio pode ser iniciado
*/
function reiniciarSorteio() {
    amigos = [] // reseta o array
    document.getElementById("listaAmigos").innerHTML = ""
    document.getElementById("resultado").innerHTML = ""
    alert("Novo sorteio iniciado! Adicione novos amigos.")
}
