const prompt = require ('prompt-sync')();

const jogos = []

const criar = () => {
    const nome = prompt("Qual o Nome do Jogo? ")
    const ano_lancamento = prompt("Qual o Ano de Lançamento do Jogo? ")
    const duracao = prompt("Qual a Duração média de Jogo? (EM HORAS) ")
    const preco = prompt("Qual o Preço do jogo? ")
    const estudio = prompt("Qual o Estúdio do Jogo? ")
    const sequencia = prompt("Qual é a Sequência do Jogo? ")

    if (
        nome != "" &&
        ano_lancamento >= 1962 && ano_lancamento <= 2024 &&
        duracao > 0 &&
        preco == 0 &&
        estudio != "" &&
        ((sequencia > 0 && sequencia < jogos.length) || jogos.length == 0)
    ) {
        jogos.push ({
            nome,
            ano_lancamento,
            duracao,
            preco,
            estudio,
            sequencia,
        })
        console.log("Jogo Cadastrado com Sucesso!!!")
    } else {
        console.log("Dados Inválidos.")
    }    
};

const listar = () => {
    if (jogos.length == 0) {
        console.log("Nenhum jogo cadastrado");
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
    }
}