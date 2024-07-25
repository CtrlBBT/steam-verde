const prompt = require ('prompt-sync')();

const estudio = []

const validarindice = indice => indice > 0 && indice < estudio.length

const modelo = () => {
    const nome = prompt("Qual o Nome do estudio: ");
    const pis_origem = prompt("País de Origem: ");
    const ano_criacao = prompt("Ano de Criação: ");

    if (
        nome != "" &&
        pais_origem != "" &&
        ano_criacao >= 1962 && ano_criacao <= 2024 &&
    ) {
        return {
            nome,
            pais_origem,
            ano_criacao,
        };
    } else {
    console.log("Dados Inválidos.")
    }
};

const criar = () => {
    const estudio = modelo()

    if (estudio != undefined) {
    estudio.push (estudio);
        console.log("Estudio Cadastrado com Sucesso!!!")
    };
};

const listar = () => {
    if (estudio.length == 0) {
        console.log("Nenhum estudio cadastrado");
        return false;
    } else {
        estudio.forEach((estudio, indice) => {
            console.log('
            ${indice + 1}.
            Nome: ${estudio.nome}
            Ano de Lançamento: ${estudio.ano_lancamento}
            Duração: ${estudio.duracao}
            Estudio: ${estudio.estudio}
            Sequência: ${estudio.sequencia}
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

    const estudio = modelo();

    if (estudio != undefined && validarindice(indice)) {
        estudio[indice] = estudio;

        console.log("estudio Atualizado com Sucesso! ");
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
        estudio.splice(indice, 1);
        console.log("estudio Removido com sucesso");
    } else {
        console.log("Falha na remoção");
    }
}