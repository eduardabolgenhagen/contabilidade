database(`CREATE TABLE IF NOT EXISTS TESTE (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    NUMERO int
    )`).then(result => {
    console.log('TABELA CRIADA COM SUCESSO')
}).catch(erro => {
    console.log('TABELA JÁ EXISTENTE')
});

database(`CREATE TABLE IF NOT EXISTS USER (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    NICKNAME varchar(60)
    )`).then(result => {
    console.log('TABELA CRIADA COM SUCESSO')
}).catch(erro => {
    console.log('TABELA JÁ EXISTENTE')
});