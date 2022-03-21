inserirRota('/buscarUsuario',
    function(dados, resposta) {
        console.log(dados);

        database('SELECT * FROM LOGIN')
            .then(result => {
                resposta({ list: result });
            }).catch(erro => {
                resposta({ erro: 'Erro ao buscar usuários!' });
            });
    });

inserirRota('/login',
    function(dados, resposta) {
        console.log(dados);

        database(`SELECT * FROM LOGIN WHERE EMAIL = "${dados.email}" AND SENHA = "${dados.senha}"`)
            .then(result => {
                resposta({ list: result });
            }).catch(erro => {
                resposta({ erro: 'Erro ao buscar usuários!' });
            });
    });

inserirRota('/criarUsuario',
    function nome(dados, resposta) {

        console.log(dados);

        if (!dados.email) {
            return resposta({ erro: 'É necessário preencher o email!' });
        }

        if (!dados.senha) {
            return resposta({ erro: 'É necessário preencher o senha!' });
        }

        database(`INSERT INTO LOGIN (
        EMAIL, SENHA) VALUES ("${dados.email}", "${dados.senha}")`)
            .then(result => {
                console.log('Usuario inserido com sucesso!');
                resposta({ message: 'Usuario inserido com sucesso!' });
            }).catch(erro => {
                console.log('Usuario não inserido!');
                resposta({ message: 'Usuario não inserido!' });
            });
    });