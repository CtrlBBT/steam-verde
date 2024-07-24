const prompt = require ('prompt-sync')();

const jogos = []

const validarindice = indice => indice > 0 && indice < jogos.length

const modelo = () => {
    const nome = prompt("Qual o Nome do Jogo? ");
    const ano_lancamento = prompt("Qual o Ano de Lançamento do Jogo? ");
    const duracao = prompt("Qual a Duração média de Jogo? (EM HORAS) ");
    const preco = prompt("Qual o Preço do jogo? ");
    const estudio = prompt("Qual o Estúdio do Jogo? ");
    let sequencia = -1;
    if(listarr()) {
        sequencia = prompt("Qual é a Sequência do Jogo? Digite 0 se não houver sequência ") - 1;
    }

    if (
        nome != "" &&
        ano_lancamento >= 1962 && ano_lancamento <= 2024 &&
        duracao > 0 &&
        preco == 0 &&
        estudio != "" &&
        ((sequencia >= -1 && sequencia < jogos.length) || jogos.length == 0)
    ) {
        return {
            nome,
            ano_lancamento,
            duracao,
            preco,
            estudio,
            sequencia,
        };
    } else {
    console.log("Dados Inválidos.")
    }    
};

const criar = () => {
    const jogo = modelo()

    if (jogo != undefined) {
    jogos.push (jogo);
        console.log("Jogo Cadastrado com Sucesso!!!")
    };
};

const listar = () => {
    if (jogos.length == 0) {
        console.log("Nenhum jogo cadastrado");
        return false;
    } else {
        jogos.forEach((jogo, indice) => {
            console.log('
            ${indice + 1}.
            Nome: ${jogo.nome}
            Ano de Lançamento: ${jogo.ano_lancamento}
            Duração: ${jogo.duracao}
            Estudio: ${jogo.estudio}
            Sequência: ${jogo.sequencia}
            ')
        });
        return true
    }
}

const atualizar = () => {
    if(!listar()) {
        return
    }

    const indice = prompt("Qual o indice deseja atualizar? ") - 1;

    const jogo = modelo();

    if (jogo != undefined && validarindice(indice)) {
        jogos[indice] = jogo;

        console.log("Jogo Atualizado com Sucesso! ");
    } else {
        console.log("Falha na Atualização");
    }
    
};

const remover = () => {
    if(!listar()) {
        return
    }

    const indice = prompt("Qual o indice deseja remover? ") - 1;

    if(validarindice(indice)){
        jogos.splice(indice, 1);
        console.log("Jogo Removido com sucesso");
    } else {
        console.log("Falha na remoção");
    }
};

module.exports = {
    criar;
    atualizar,
    listar,
    remover
}