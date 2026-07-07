var fs = require('fs');

fs.appendFile('arquivo.txt', 'Olá, mundo! Olá NodeJS! SENAI\n', function (err) {
    if (err) throw err;
    console.log('Arquivo atualizado com sucesso!');

    /*ETAPA 1: Atualizar arquivo atualiza o conteúdo do arquivo sobrescrevendo o texto antigo (fs.writeFile(novo.txt)) */
fs.writeFile('novo.txt', 'Olá Node.JS! UNISENAI 2023\n', function (err) {
    if (err) throw err;
    console.log('Arquivo atualizado com sucesso!');

    /* ETAPA 2: Renomear arquivo para ArquivoNovoRenomeado.txt (fs.rename) */
fs.rename('novo.txt', 'ArquivoNovoRenomeado.txt', function (err) {
    if (err) throw err;
    console.log('Arquivo renomeado com sucesso!');

    /* ETAPA 3: Excluir arquivo (fs.unlink) */
fs.unlink('ArquivoNovoRenomeado.txt', function (err) {
    if (err) throw err;
    console.log('Arquivo excluído com sucesso!');

/* ETAPA 4: Criar novo arquivo (fs.writeFile) ArquivoNovoRenomeado.txt para recriar o deletado */
fs.writeFile('ArquivoNovoRenomeado.txt', 'Olá Node.JS! UNISENAI 2023\n', function (err) {
    if (err) throw err;
    console.log('Arquivo criado com sucesso!'); 

/* Um call back dentro de outro call back para sequenciar as operações });*/
});



});


});


});

});

/* cd projeto_file ir para a pasta do projeto
node lerArquivos.js para executar o arquivo no terminal */
 // node lerArquivos.js roda as rotas do arquivo lerArquivos.js no terminal do VSCode
