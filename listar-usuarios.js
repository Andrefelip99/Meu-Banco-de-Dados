const conexao = require('../interacao/conexao');
const sql = 'SELECT * FROM alunos';
conexao.query(sql,(err, results) => {
    if(err){
        console.error('Erro ao buscar alunos:', err);
        return;
    }
    console.log('alunos encontrados:');
    console.table(results);
    conexao.end();

});