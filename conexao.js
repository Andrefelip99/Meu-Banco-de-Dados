const mysql = require('mysql2');
const conexao = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '12345',
  database: 'escola'

});

conexao.connect((erro) => {
  if(erro) {
    console.erro('Erro ao conectar ao mySql');
    return; 
  }
  console.log('conexão com MySql estabelecida com sucesso!');

});

module.exports = conexao;