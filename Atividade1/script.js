function adicionarTarefa() {
    const inputElement = document.getElementById('nova_tarefa');
    const mensagemElement = document.getElementById('mensagem');
    const listaTarefas = document.getElementById('lista_tarefas');

    let tarefa = inputElement.value; // STRING
    let mensagem, cor;

    if (tarefaValida(tarefa)) {
        let novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);

        mensagem = 'Tarefa adicionada com sucesso!' + ' Total de tarefas: ' + listaTarefas.children.length;
        cor = 'green';

    } else {
        mensagem = 'Tarefa inválida, redigite.';
        cor = 'red';
    }

    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = cor;

    inputElement.value = '';
    inputElement.focus();

    if (listaTarefas.children.length == 1) {
        botaoLimpar();
    }
}

function tarefaValida(tarefa) {
    return tarefa.trim().length >= 5;
}

function botaoLimpar() {
    const botaoLimpar = document.createElement('button');
    botaoLimpar.id = 'botao_limpar';
    botaoLimpar.addEventListener('click', limparTarefas);
    botaoLimpar.textContent = 'Limpar Tarefas';
    document.querySelector('.container').appendChild(botaoLimpar);
}

function limparTarefas() {
    const listaTarefas = document.getElementById('lista_tarefas');
    listaTarefas.innerHTML = '';
    document.getElementById('botao_limpar').remove();
    document.getElementById('mensagem').textContent = 'Tarefas limpas!';
}
