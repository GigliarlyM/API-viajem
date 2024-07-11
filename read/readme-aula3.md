# Na aula 3

## O que foi feito

* Pode atualizar os dados da viajem
* Detales da viajem
* Melhorias no arquivo `.env`
* Criacao de um arquivo para validar os dados do `.env`
* Arquivo para gerenciar os erros
* uma classe ClientError, para erros de recebimento de dados

## Comando do projeto

`npx prisma migrate dev` - para fazer atualizações nas tabelas (migracoes)

`npx prisma studio` - para abrir uma tela para ver os dados salvos

`npx tsx watch --env-file .env src/server.ts` - para rodar o projeto com o arquivo `.env` (mas nao eh necessario colocar `--env-file .env`)

ObS: O projeto pode dá errado com as tabelas no prisma, então tem que deletar o arquivo `node_modules/.prisma/client/query_engine-windows.dll.node`. E no final rodar o codigo para atualizar as tabelas.