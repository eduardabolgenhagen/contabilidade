inserirRota('/criarGastos',
    function(dados, resposta) {
        console.log(dados)

        if (!dados.titulo) {
            return resposta({ erro: 'É necessário preencher o título da NF!' });
        }

        if (!dados.valor) {
            return resposta({ erro: 'É necessário preencher o valor!' });
        }

        if (!dados.data) {
            return resposta({ erro: 'É necessário preencher a data!' });
        }

        database(`INSERT INTO GASTOS (NF, VALOR, DATA, IDUSER) VALUES ("${dados.titulo}", 
        "${dados.valor}", "${dados.data}", "${dados.ID}")`)
            .then(result => {
                console.log('NF inserido com sucesso!');
                resposta({ message: 'NF inserido com sucesso!' });
            }).catch(erro => {
                console.log('Erro ao cadastrar!');
                resposta({ message: 'Erro ao cadastrar!' });
            });
    });

    inserirRota('/buscarGastos',
    function(dados, resposta) {
        console.log(dados);

        database('SELECT * FROM GASTOS')
            .then(result => {
                resposta({ list: result });
            }).catch(erro => {
                resposta({ erro: 'Erro ao buscar gastos!' });
            });
    });

    inserirRota('/apresentarExtrato',
    function(dados, resposta){
        console.log(dados);

        database(`SELECT * FROM GASTOS WHERE IDUSER = "${dados.id}"`)
        .then(result => {
            resposta(result );
        }).catch(erro => {
            resposta({ erro: 'Erro ao buscar gastos!' });
        });
    }

    // inserirRota('/listaGastos',
    // function(dados, resposta){
    //     console.log(dados);

    //     database('SELECT * FROM GASTOS WHERE IDUSER = "${dados.id}"')
    //     .then(result => {
    //         resposta({ list: result });
    //     }).catch(erro => {
    //         resposta({ erro: 'Erro ao buscar gastos!' });
    //     });
    // }
    )