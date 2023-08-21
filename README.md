## Watch Movie

O projeto desenvolvido foi de uma aplicação Full Stack, utilizando o NodeJS para criação de uma API REST de um CRUD de usuários, e uma aplicação web desenvolvida em React para consumir a API de usuários e uma API externa de filmes.

# Back-end

Para o Back-end foram utilizadas tecnologias como Express, Sequelize e JWT.
Os endpoint desenvolvidos são protegidos por autenticação de token, e validação dos dados, sendo eles:

    • /login (POST)
    • /user/:id (GET) (Necessário token)
    • /user (POST)
    • /user/:id (PUT) (Necessário token)
    • /user/:id (DELETE) (Necessário token)

# Front-end

O front-end foi desenvolvido em React e conta com:

    •  Interface de login
    •  Feedbacks de email ou senha incorreta
    •  Feedbacks de email ou senha inválidos.
    •  Listagem dos dados de filmes.
    •  Paginação dos dados.
    •  Listagem dos dados do Usuários.

# API de filmes

A API externa de filmes utilizada foi a https://www.themoviedb.org/ que disponibiliza dados de diversos filmes, séries e atores. Os dados consumidos foram de filmes mais populares do momento.

# Configuração do ambiente

Para executar o projeto localmente siga as instruções:

1. Clone este repositório em sua máquina local utilizando `git clone`.
2. Certifique-se de ter instalado na máquina o Node, npm, e o MySQL para o do banco de dados.
3. Navegue até a pasta backend e crie um arquivo de váriaveis de ambiente `.env` seguindo o exemplo do arquivo `.env.example`.
4. Preencha as variáveis de acordo com o seu banco local, e coloque uma chave `JWT_USER_SECRET` aleatória.
5. Instale as dependencias utilizando o `npm install`.
6. Crie o database utilizando `npx sequelize db:create`.
7. Execute a criação das migrations utilizando `npx sequelize db:migrate`.
8. Execute o backend, utilizando `npm run dev`. Ele estará no endereço http://localhost:3333
9. Navegue até a pasta do frontend e instale as dependencias utilizando `npm install`
10. Acesse o site https://www.themoviedb.org/ e crie um usuário. Vá em configurações e copie sua key para a API.
11. Crie um arquivo de váriaveis de ambiente `.env` seguindo o exemplo do arquivo `.env.example`.
12. Adicione a sua key da API ao campo `MOVIE_API_KEY`
13. Execute o frontend utilizando `npm start`
14. Certifique-se de estar executando em terminais diferentes e simultaneamente o backend e o frontend.
15. Acesse o frontend pelo endereço http://localhost:3000

# Utilização da aplicação

1. Acesse a página de cadastro de usuário.
2. Crie um usuário levando em consideração um email válido e uma senha de no mínimo 8 digitos contendo, letras maiúsculas, minúsculas, números e caracteres especiais.
3. Visualize as páginas de filmes.
4. Ao clicar em um filme, é possível ver mais informações sobre ele.
5. Visualize os dados de usuário clicando no círculo com as iniciais no canto superior direito.

