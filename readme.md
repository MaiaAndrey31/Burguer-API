# Burguer-API

Uma API RESTful para gerenciar burgers, usuários, produtos, categorias e pedidos.

## Sumário

* [Começando](#começando)
* [Pré-requisitos](#pré-requisitos)
* [Instalação](#instalação)
* [Uso](#uso)
* [Autenticação](#autenticação)
* [Pontos de Extremidade da API](#pontos-de-extremidade-da-api)
* [Modelos](#modelos)
* [Banco de Dados](#banco-de-dados)
* [Contribuindo](#contribuindo)
* [Licença](#licença)

## Começando

Essa API é construída usando Node.js, Express.js e Sequelize. Ela fornece uma maneira simples de gerenciar burgers, usuários, produtos, categorias e pedidos.

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
3. Os arquivos enviados para produtos e categorias são servidos estaticamente nos caminhos:
   - `/product-file`
   - `/category-file`

## Autenticação

A maioria dos endpoints da API requer autenticação. Para autenticar, envie uma requisição POST para `/session` com as credenciais do usuário para obter um token de autenticação. Inclua esse token no cabeçalho `Authorization` das requisições subsequentes para acessar os recursos protegidos.

## Pontos de Extremidade da API

* **Usuários**
  + POST `/users`: Crie um novo usuário

* **Sessão**
  + POST `/session`: Autentique um usuário e obtenha um token

* **Produtos**
  + POST `/products`: Crie um novo produto (com upload de arquivo)
  + GET `/products`: Obtenha todos os produtos
  + PUT `/products/:id`: Atualize um produto (com upload de arquivo)

* **Categorias**
  + POST `/categories`: Crie uma nova categoria (com upload de arquivo)
  + GET `/categories`: Obtenha todas as categorias
  + PUT `/categories/:id`: Atualize uma categoria (com upload de arquivo)

* **Pedidos**
  + POST `/orders`: Crie um novo pedido
  + GET `/orders`: Obtenha todos os pedidos
  + PUT `/orders/:id`: Atualize um pedido

## Modelos

* **Usuário**: Representa um usuário no banco de dados.
* **Produto**: Representa um produto no banco de dados.
* **Categoria**: Representa uma categoria de produtos.
* **Pedido**: Representa um pedido realizado por um usuário.

## Banco de Dados

O banco de dados é gerenciado usando Sequelize, um ORM popular para Node.js. O esquema do banco de dados é definido no diretório `models`.

## Contribuindo

Contribuições são bem-vindas! Por favor, envie um pull request com suas alterações.

## Licença

Este projeto está licenciado sob a licença MIT.
