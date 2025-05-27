# 🍔 Burguer-API

Uma API RESTful completa para gerenciamento de um sistema de delivery de hambúrgueres, com autenticação, upload de imagens, gerenciamento de produtos, categorias, pedidos e integração com Stripe para pagamentos.

## 🚀 Tecnologias

- Node.js
- Express
- Sequelize (ORM para PostgreSQL)
- JWT (Autenticação)
- Multer (Upload de arquivos)
- Stripe (Pagamentos)
- Bcrypt (Criptografia de senhas)
- Yup (Validação de dados)
- ESLint + Prettier (Padronização de código)
- Sucrase (Permite usar import/export)

## 📋 Pré-requisitos

- Node.js (v14 ou superior)
- Yarn ou NPM
- PostgreSQL (v13 ou superior)
- Conta no Stripe (para pagamentos)
- Variáveis de ambiente configuradas

## 🔧 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/MaiaAndrey31/Burguer-API.git
   cd Burguer-API
   ```

2. Instale as dependências:
   ```bash
   yarn
   # ou
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`
   - Preencha com suas credenciais do banco de dados e chaves do Stripe

4. Execute as migrações:
   ```bash
   yarn sequelize db:migrate
   ```

5. Inicie o servidor em modo desenvolvimento:
   ```bash
   yarn dev
   ```

   O servidor estará disponível em `http://localhost:3001`

## 🔒 Autenticação

A API usa JWT (JSON Web Tokens) para autenticação. A maioria dos endpoints requer autenticação.

1. Faça login em `/session` para obter seu token
2. Inclua o token no cabeçalho das requisições:
   ```
   Authorization: Bearer seu-token-aqui
   ```

## 📚 Endpoints da API

### 👥 Usuários
- `POST /users` - Cria um novo usuário

### 🔑 Autenticação
- `POST /session` - Autentica um usuário e retorna um token JWT

### 🍔 Produtos
- `GET /products` - Lista todos os produtos
- `POST /products` - Cria um novo produto (com upload de imagem)
- `PUT /products/:id` - Atualiza um produto existente

### 📂 Categorias
- `GET /categories` - Lista todas as categorias
- `POST /categories` - Cria uma nova categoria (com upload de imagem)
- `PUT /categories/:id` - Atualiza uma categoria existente

### 🛒 Pedidos
- `GET /orders` - Lista todos os pedidos
- `POST /orders` - Cria um novo pedido
- `PUT /orders/:id` - Atualiza o status de um pedido

### 💳 Pagamentos
- `POST /create-payment-intent` - Cria uma intenção de pagamento no Stripe

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── controllers/    # Controladores da aplicação
│   ├── middlewares/    # Middlewares personalizados
│   └── models/         # Modelos do Sequelize
├── config/             # Configurações
├── database/
│   ├── migrations/    # Migrações do banco de dados
│   └── seeders/        # Seeders para dados iniciais
├── routes.js           # Definição das rotas
└── server.js           # Ponto de entrada da aplicação
```

## 🔄 Upload de Arquivos

A API suporta upload de imagens para produtos e categorias. As imagens são salvas na pasta `uploads/` e servidas estaticamente nos seguintes caminhos:

- `/product-file/nome-do-arquivo` - Para imagens de produtos
- `/category-file/nome-do-arquivo` - Para imagens de categorias

## 💳 Pagamentos com Stripe

A integração com Stripe permite processar pagamentos de forma segura. Para usar:

1. Crie uma conta no [Stripe](https://stripe.com/)
2. Obtenha suas chaves de API (pública e secreta)
3. Configure as variáveis de ambiente no `.env`

## 🛠️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```
NODE_ENV=development
APP_SECRET=sua_chave_secreta_aqui

# Banco de Dados
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=nome_do_banco

# Stripe
STRIPE_API_KEY=sua_chave_do_stripe
STRIPE_WEBHOOK_SECRET=seu_webhook_secret

# Upload
STORAGE_TYPE=local

# URL da aplicação (sem a barra final)
APP_URL=http://localhost:3001
```

## 🧪 Testes

Para executar os testes:

```bash
yarn test
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga estes passos:

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. Faça o Push da Branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

Feito por Andrey Maia 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Andrey_Maia-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/maiaandrey)](https://www.linkedin.com/in/maiaandrey) 
[![Gmail Badge](https://img.shields.io/badge/-maiaandrey31dev@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:maiaandrey31dev@gmail.com)](mailto:maiaandrey31dev@gmail.com)
