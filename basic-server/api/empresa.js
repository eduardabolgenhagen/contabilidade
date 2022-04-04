inserirRota('/criarEmpresa',
    function(dados, resposta) {
        console.log(dados)

        if (!dados.cnpj) {
            return resposta({ erro: 'É necessário preencher o CNPJ!' });
        }

        if (!dados.razao) {
            return resposta({ erro: 'É necessário preencher a Razão Social!' });
        }

        if (!dados.telefone) {
            return resposta({ erro: 'É necessário preencher o telefone!' });
        }

        database(`INSERT INTO TO EMPRESA (CNPJ, RAZAO_SOCIAL, TELEFONE) VALUES ("${dados.cnpj}", "${dados.razao}", "${dados.telefone}", "${dados.empresaid}" `)
            .then(result => {
                console.log('Empresa inserida com sucesso!');
                resposta({ message: 'Empresa inserido com sucesso!' });
            }).catch(erro => {
                console.log('Erro ao cadastrar!');
                resposta({ message: 'Erro ao cadastrar!' });
            });
    });