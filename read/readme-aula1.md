# Inicio do projeto

Aqui foi desenvolvido um backend para um sistema de viajem, onde vai agendar a viajem, definir o dono da viajem e convidar outras pessoas (e armazenar isso com SQLite)

## O que é preciso no projeto

#### Dependencias de desenvolvimento

Prisma `npm i prisma`

Node para o type script `npm i @types/node`;

Nodemailer para o type Script`npm i @types/nodemailer`

`npm i typescript`

#### Dependencias

Biblioteca para executar o back end `npm i fastify`

Precisei para baixar por causa dos validates `npm i fastify-type-provider-zod`

Envio de emails`npm i nodemailer`

Para validacao dos dados, pelo o corpo da requisicao `npm i zod`

Formatacao de datas `npm i dayjs`

Configuracao de permitacao (para o uso do back end, no front end) `npm i @fastify/cors`

Configuracao do prisma para a inicializacao das tabelas `npm i @prisma/client`

### links para apoio

<p><a href="https://github.com/turkerdev/fastify-type-provider-zod">fastify type provider zod (integracao com o zod, usando o fastify)</a></p>
<p><a href="https://www.npmjs.com/package/@tsconfig/node20">tsconfig bases, pra o node 20</a></p>
<p><a href="https://app.rocketseat.com.br/events/nlw-journey/nodejs/aula-03-nodejs">Link para o curso (terceira aula)</a></p>

## O que foi desenvolvido

* Primeiramente, o proprio server
* Rota para criar as viajens
* Rota para criar os participantes (que fica junto com a rota de viajens)
* Um pasta para organizar o arquivo para envio de email e a configuracao de um log do prisma, para toda vez que fizer uma insercao no banco de dados mostrar no console do terminal.
* No lib, um arquivo para configurar a data e hora do dayjs, para ficar pt-br
* Um arquivo para envio de email, com o nodemailer (`src/lib/mail.ts`)

### Tabelas

* Trips
* participants