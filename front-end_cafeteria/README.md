##Cafeteria — Front-end

Front-end da aplicação Cafeteria, desenvolvido utilizando React e Vite.

A aplicação é responsável pela interface com o usuário e realiza a comunicação com o Back-end através de uma API REST utilizando requisições HTTP.

##Funcionalidades

Atualmente o Front-end possui duas telas principais:

##Cadastro

Permite cadastrar um novo café informando:

Nome;
Quantidade em mililitros;
Tipo de torra;
Preço;
Descrição.
Listagem

A tela de listagem realiza uma requisição:

GET http://localhost:8080/cafe

Os cafés retornados pela API são apresentados em formato de cards.

##Tecnologias

React 19
React DOM
React Router DOM
Vite
JavaScript
CSS Modules
Fetch API


##Como executar
Pré-requisitos

É necessário possuir instalado:

Node.js
npm

Verifique as versões:

node -v
npm -v

##Instalação

Entre na pasta do Front-end:
cd front-end_cafeteria

Instale as dependências:
npm install

Executar em desenvolvimento
npm run dev

Após iniciar, acesse:
http://localhost:5173

O Back-end precisa estar em execução em http://localhost:8080 para que o cadastro e a listagem funcionem corretamente.
