inserirRota('/criarGasto',
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

        if (!dados.empresaid){
            return resposta({ erro: 'É necessário preencher o id!' });
        }

        database(`INSERT INTO TO GASTOS (TITULO, VALOR, DATA, EMPRESAID) VALUES ("${dados.titulo}", "${dados.valor}", "${dados.data}", "${dados.empresaid})`)
            .then(result => {
                console.log('NF inserido com sucesso!');
                resposta({ message: 'NF inserido com sucesso!' });
            }).catch(erro => {
                console.log('Erro ao cadastrar!');
                resposta({ message: 'Erro ao cadastrar!' });
            });
    });