# Burguer-API

Uma API RESTful para gerenciar burgers e usuários.

## Sumário

* [Começando](#começando)
* [Pré-requisitos](#pré-requisitos)
* [Instalação](#instalação)
* [Uso](#uso)
* [Pontos de Extremidade da API](#pontos-de-extremidade-da-api)
* [Modelos](#modelos)
* [Banco de Dados](#banco-de-dados)
* [Contribuindo](#contribuindo)
* [Licença](#licença)

## Começando

Essa API é construída usando Node.js, Express.js e Sequelize. Ela fornece uma maneira simples de gerenciar burgers e usuários.

### Pré-requisitos

* Node.js (versão 14 ou superior)
* npm (versão 6 ou superior)
* PostgreSQL (versão 13 ou superior)

### Instalação

1. Clone o repositório: 
2. Instale as dependências: `yarn`
3. Crie um banco de dados PostgreSQL e atualize o arquivo `config/database.js` com suas credenciais de banco de dados.
4. Execute as migrações: `yarn sequelize db:migrate`

### Uso

1. Inicie o servidor: `yarn dev`
2. Use uma ferramenta como Postman ou cURL para enviar requisições para a API.

### Pontos de Extremidade da API

* **Usuários**
	+ GET `/usuários`: Obtenha todos os usuários
	+ GET `/usuários/:id`: Obtenha um usuário por ID
	+ POST `/usuários`: Crie um novo usuário
	+ PUT `/usuários/:id`: Atualize um usuário
	+ DELETE `/usuários/:id`: Exclua um usuário
* **Produtos**
	+ GET `/produtos`: Obtenha todos os produtos
	+ GET `/produtos/:id`: Obtenha um produto por ID
	+ POST `/produtos`: Crie um novo produto
	+ PUT `/produtos/:id`: Atualize um produto
	+ DELETE `/produtos/:id`: Exclua um produto

### Modelos

* **Usuário**: Representa um usuário no banco de dados.
* **Produto**: Representa um produto no banco de dados.

### Banco de Dados

O banco de dados é gerenciado usando Sequelize, um ORM popular para Node.js. O esquema do banco de dados é definido no diretório `models`.

### Contribuindo

Contribuições são bem-vindas! Por favor, envie um pull request com suas alterações.

