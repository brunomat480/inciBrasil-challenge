# Inci Brasil Challenge

##

#### Web
Clone o repositório:
```bash
git clone https://github.com/brunomat480/inciBrasil-challenge.git
```
ou
```bash
git clone git@github.com:brunomat480/inciBrasil-challenge.git
```

Instale as dependências:
```bash
npm i
```

Inicie a aplicação:
```bash
npm run dev
```
##

#### API
Repositório da api:
<a href="https://github.com/brunomat480/inciBrasil-challenge-api">inciBrasil-challenge-api</a>

Clone o repositório:
```bash
git clone https://github.com/brunomat480/inciBrasil-challenge-api.git
```
ou
Clone o repositório:
```bash
git clone git@github.com:brunomat480/inciBrasil-challenge-api.git
```

Instale as dependências:
```bash
npm i
```

Crie um arquivo chamado .env na raiz do projeto e adicione a linha abaixo:
```bash
DATABASE_URL="file:./dev.db"
```

Execute as migrações:
```bash
npm run db:migrate
```
o arquivo seed.ts é executado criando dois usuários, use esses dados para efetuar o login:
##
email ou telefone: bruno@gmail.com | 1234567890 <br/>
senha: 123456
##
email ou telefone: jose@gmail.com | 0987654321 <br/>
senha: 123456

Inicie a api:
```bash
npm run dev
```

##

#### Adicionais
Interface de banco dados:
```bash
npm run db:studio
```

Você pode acessar o swagger ao iniciar a api:
<a href="http://localhost:3333/api-docs/">http://localhost:3333/api-docs/</a>
