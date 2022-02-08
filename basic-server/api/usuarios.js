
inserirRota('/buscarUsuario',
function (dados, resposta) {
    console.log(dados);

    database('SELECT * FROM USER')
        .then(result => {
            resposta({ list: result });
        }).catch(erro => {
            resposta({ erro: 'Erro ao buscar usuários!' });
        });
});

inserirRota('/login',
function (dados, resposta) {
    console.log(dados);

    database(`SELECT * FROM USER WHERE NICKNAME = "${dados, nickname}"`)
        .then(result => {
            resposta({ list: result });
        }).catch(erro => {
            resposta({ erro: 'Erro ao buscar usuários!' });
        });
});

inserirRota('/criarUsuario',
function nome(dados, resposta) {

    console.log(dados);

    if (!dados.nome) {
        return resposta({ erro: 'É necessário preencher o nome!' });
    }

    if (!dados.nickname) {
        return resposta({ erro: 'É necessário preencher o nickname!' });
    }

    database(`INSERT INTO USER (
        NOME, NICKNAME) VALUES ("${dados.nome}", "${dados.nickname}")`)
        .then(result => {
            console.log('Usuario inserido com sucesso!');
            resposta({ message: 'Usuario inserido com sucesso!' });
        }).catch(erro => {
            console.log('Usuario não inserido!');
            resposta({ message: 'Usuario não inserido!' });
        });
});

