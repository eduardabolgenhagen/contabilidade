
inserirRota('/buscarUsuario',
    function (dados, resposta) {
        console.log(dados);

        resposta({ ok: 'Efetuada com sucesso!' });

    });

inserirRota('/criarUsuario',
    function nome(dados, resposta) {

        console.log(dados);

        if (!dados.nome) {
            return resposta({ erro: 'É necessário preencher o nome!' });
        }

        if (!dados.sobrenome) {
            return resposta({ erro: 'É necessário preencher o sobrenome!' });
        }

        database(`INSERT INTO USER (
            NOME, NICKNAME) VALUES ("${dados.nome}", "${dados.sobrenome}")`)
            .then(result => {
                console.log('Usuario inserido com sucesso!');
                resposta({ message: 'Usuario inserido com sucesso!' });
            }).catch(erro => {
                console.log('Usuario não inserido!');
                resposta({ message: 'Usuario não inserido!' });
            });
    });

    