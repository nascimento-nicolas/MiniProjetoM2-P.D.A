// Array para armazenar os dados cadastrados
const dados = [];

// Função para cadastrar um novo dado
function cadastrarDado() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;

    if (nome && idade) {
        const novoDado = { nome, idade };
        dados.push(novoDado);
        exibirDados();
        limparCampos();
    }
}

// Função para exibir os dados cadastrados na lista
function exibirDados() {
    const listaDados = document.getElementById('lista-dados');
    listaDados.innerHTML = '';

    dados.forEach((dado, index) => {
        const item = document.createElement('li');
        item.innerHTML = `${dado.nome}, ${dado.idade} anos 
            <button onclick="editarDado(${index})">Editar</button>
            <button onclick="excluirDado(${index})">Excluir</button>`;
        listaDados.appendChild(item);
    });
}

// Função para limpar os campos de cadastro
function limparCampos() {
    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
}

// Função para editar um dado cadastrado
function editarDado(index) {
    const nome = prompt('Novo nome:');
    const idade = prompt('Nova idade:');

    if (nome && idade) {
        dados[index].nome = nome;
        dados[index].idade = idade;
        exibirDados();
    }
}

// Função para excluir um dado cadastrado
function excluirDado(index) {
    dados.splice(index, 1);
    exibirDados();
}
