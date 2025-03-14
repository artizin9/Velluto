# Backend de Autenticação com Fastify

Projeto básico de autenticação com **Fastify, Prisma, JWT, Zod e SQLite**.

## Tecnologias utilizadas

- **Fastify** - Framework rápido para Node.js
- **Prisma** - ORM para manipulação do banco de dados
- **SQLite** - Banco de dados leve e embutido
- **Zod** - Validação de schemas
- **JWT** - Autenticação segura via tokens

---

## Estrutura do Projeto

/prisma
   - **/schema.prisma**
- /src
  - **/config**        
          - **env.js**       `Variáveis de ambiente`
          - **prisma.js**    `Instância do Prisma Client`
  - **/middlewares**  
          - **auth.js**      `Middleware de autenticação JWT`
  - **/routes**        
          - **auth.routes.js**   `Rotas de autenticação (login, registro)`
  - **/schemas**        `Validações com Zod`
          - **auth.schema.js**   `Validação de login e registro`
  - **/controllers**   
          - **auth.controller.js** `Lógica das rotas login e registro`
  - **server.js**      `Servidor com fastify`
  - **.env**                
  - **package.json**
  - **pnpm-lock.yaml**


### **Funcionamento do Projeto**

- **A rota de login está protegida por um token.** Portanto, é necessário incluir o token no cabeçalho `Authorization` utilizando o prefixo `Bearer`.
- **Caso tente acessar a rota sem o token, será retornada uma mensagem informando que o acesso não é autorizado.**
- **Para criar um usuário,** é necessário fornecer nome, email e senha. As validações podem ser conferidas no arquivo `src/schemas/auth.schema.js`.
- **Para realizar o login,** é necessário fornecer o email, a senha e o token (para acessar rotas protegidas, conforme mencionado anteriormente).


## **Instalação e Configuração**

1️⃣ Clone este repositório:  
https://github.com/artizin9/Velluto/tree/main

2️⃣ Instale as dependências:
- pnpm install

3️⃣ Configure as variáveis de ambiente:

`Crie um arquivo .env na raiz do projeto e adicione`

- PORT=3000
- DATABASE_URL="file:./dev.db"
- JWT_SECRET="seu_segredo_super_secreto"

4️⃣ Execute as migrations do Prisma:
- pnpm prisma migrate dev --name init

5️⃣ Inicie o servidor:
- pnpm run dev
- O servidor estará rodando em http://localhost:3000 
