#Cafeteria

Projeto acadêmico desenvolvido com o objetivo de praticar o desenvolvimento de uma aplicação web utilizando React no Front-end e Java com Spring Boot no Back-end, realizando a comunicação entre as camadas por meio de uma API REST.

A aplicação permite realizar o cadastro de cafés e consultar os cafés cadastrados, armazenando as informações em um banco de dados H2.

 Sobre o projeto

O sistema foi desenvolvido simulando um catálogo de uma cafeteria.

O usuário pode:

 Cadastrar um café;
 Visualizar os cafés cadastrados;
 Definir o tipo de torra;
 Definir a quantidade em mililitros;
 Informar o preço do café;
 Adicionar uma descrição;
 Visualizar uma imagem correspondente aos cafés disponíveis.

A comunicação entre o Front-end e o Back-end é realizada através de requisições HTTP para uma API REST.

#Arquitetura

O projeto está dividido em duas aplicações independentes:

                    ┌─────────────────────┐
                    │      FRONT-END      │
                    │       React         │
                    │                     │
                    │  Cadastro / Lista   │
                    └──────────┬──────────┘
                               │
                         HTTP / JSON
                               │
                               ▼
                    ┌─────────────────────┐
                    │      BACK-END       │
                    │    Spring Boot      │
                    │                     │
                    │    REST API         │
                    └──────────┬──────────┘
                               │
                         JdbcTemplate
                               │
                               ▼
                    ┌─────────────────────┐
                    │       BANCO         │
                    │         H2          │
                    └─────────────────────┘
#Fluxo de cadastro

Usuário
   ↓
Formulário React
   ↓
Fetch HTTP POST
   ↓
Spring Boot
   ↓
CafeController
   ↓
JdbcTemplate
   ↓
Banco H2

#Fluxo de listagem

Usuário acessa Listagem
   ↓
React realiza GET /cafe
   ↓
Spring Boot
   ↓
CafeController
   ↓
JdbcTemplate
   ↓
Banco H2
   ↓
JSON
   ↓
React exibe os cafés

#Tecnologias utilizadas
Front-end
React
React DOM
React Router
Vite
JavaScript
CSS Modules
Fetch API
Back-end
Java 21
Spring Boot
Spring Web MVC
Spring JDBC
JdbcTemplate
Maven
Banco de dados
H2 Database
SQL

#Estrutura do projeto
cafeteria/
│
├── README.md
│
├── front-end_cafeteria/
│   ├── README.md
│   ├── package.json
│   ├── vite.config.js
│   │
│   └── src/
│       ├── Componentes/
│       │   ├── App.jsx
│       │   ├── Cadastro.jsx
│       │   ├── Cadastro.module.css
│       │   ├── Listagem.jsx
│       │   ├── Listagem.module.css
│       │   └── App.css
│       │
│       ├── assets/
│       │   ├── cafe-americano.png
│       │   ├── cafe-espresso.png
│       │   ├── cafe-flat-white.png
│       │   ├── cafe-latte.png
│       │   └── cafe-macchiato.png
│       │
│       ├── index.css
│       └── main.jsx
│
└── back-end_cafeteria/
    └── cafeteria/
        ├── README.md
        ├── pom.xml
        │
        └── src/
            ├── main/
            │   ├── java/
            │   │   └── school/sptech/cafeteria/
            │   │       ├── Cafe.java
            │   │       ├── CafeController.java
            │   │       └── CafeteriaApplication.java
            │   │
            │   └── resources/
            │       ├── application.properties
            │       └── schema.sql
            │
            └── test/
 API

O Back-end disponibiliza a API através da seguinte URL base:

http://localhost:8080
Endpoints disponíveis
Método	Endpoint	Descrição
POST	/cafe	Cadastra um novo café
GET	/cafe	Lista os cafés cadastrados

#Modelo de dados
Cada café possui os seguintes atributos:

Campo	Tipo - Descrição
id	Integer	- Identificador do café
nome	String - Nome do café
torra	String	- Tipo de torra
ml	Integer	- Quantidade em mililitros
preco	BigDecimal	- Preço do café
descricao	String	- Descrição do café

Exemplo de objeto:

{
  "nome": "Café Espresso",
  "torra": "Forte",
  "ml": 100,
  "preco": 7.50,
  "descricao": "Café espresso de torra forte."
}

#Como executar o projeto
1. Clone o repositório
git clone <URL_DO_REPOSITORIO>

Entre na pasta:
cd cafeteria

2. Execute o Back-end
Entre na pasta:

cd back-end_cafeteria/cafeteria
Execute com Intellij pelo botão  de inicializar

O Back-end será iniciado em:
http://localhost:8080

3. Execute o Front-end
Abra outro terminal e entre na pasta:
cd front-end_cafeteria

Instale as dependências:
npm install

Execute o projeto:
npm run dev

O Vite disponibilizará o Front-end, normalmente, em:

http://localhost:5173

#Banco de dados

O projeto utiliza o H2 Database em memória.

Configuração utilizada:

spring.datasource.url=jdbc:h2:mem:meu_banco
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

A aplicação também disponibiliza o H2 Console em:
http://localhost:8080/h2-console

Para conexão pelo console:

JDBC URL: jdbc:h2:mem:meu_banco
User Name: sa
Password:

Como o banco está configurado como mem, os dados são mantidos apenas enquanto a aplicação estiver em execução.

Projeto acadêmico desenvolvido por Kayke Rodrigues da Silva.
Documentação desenvolvida com auxílio de IA
