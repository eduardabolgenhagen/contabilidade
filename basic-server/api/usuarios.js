inserirRota('/buscarUsuario',
    function(dados, resposta) {
        console.log(dados);

        database('SELECT * FROM USUARIOS')
            .then(result => {
                resposta({ list: result });
            }).catch(erro => {
                resposta({ erro: 'Erro ao buscar usuários!' });
            });
    });

// inserirRota('/login',
//     function(dados, resposta) { 
//         console.log(dados);

//         database(`SELECT EMAIL, SENHA FROM LOGIN
//         WHERE USUARIOS.EMAIL = "${dados.email}" AND USUARIOS.SENHA = "${dados.senha}"`)
//             .then(result => {
//                 let user = result[0];
//                 delete user.SENHA;
//                 resposta({...user });
//             }).catch(erro => {
//                 resposta({ erro: 'Erro ao buscar usuários!' });
//             });
//     });

inserirRota('/criarUsuario',
    function nome(dados, resposta) {

        console.log(dados);

        if(!dados.nome){
            return resposta({erro: 'É necessário preencher o nome!'})
        }
        if (!dados.email) {
            return resposta({ erro: 'É necessário preencher o email!' });
        }
        if (!dados.senha) {
            return resposta({ erro: 'É necessário preencher o senha!' });
        }
        database(`INSERT INTO USUARIOS (
            NOME, EMAIL, SENHA) VALUES ("${dados.nome}", "${dados.email}", "${dados.senha}")`)
            .then(result => {
                console.log('Usuario inserido com sucesso!');
                resposta({ message: 'Usuario inserido com sucesso!' });
            }).catch(erro => {
                console.log('Usuario não inserido!');
                resposta({ message: 'Usuario não inserido!' });
            });
    });