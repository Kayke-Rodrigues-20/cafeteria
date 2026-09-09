#Cafeteria — Back-end

Back-end da aplicação Cafeteria, desenvolvido utilizando Java 21 e Spring Boot.

A aplicação disponibiliza uma API REST responsável pelo cadastro e consulta dos cafés armazenados no banco de dados H2.

#Sobre

O Back-end recebe as requisições realizadas pelo Front-end, processa os dados e realiza a comunicação com o banco de dados utilizando JdbcTemplate.

A API possui atualmente dois endpoints:

POST /cafe
GET  /cafe
Tecnologias
Java 21
Spring Boot 4.1.1
Spring Web MVC
Spring JDBC
JdbcTemplate
H2 Database
Maven

#Arquitetura

O Back-end possui uma estrutura simplificada:

Requisição HTTP
      ↓
CafeController
      ↓
JdbcTemplate
      ↓
Banco H2

O projeto utiliza o CafeController como responsável pelo recebimento das requisições HTTP e pela execução das operações no banco de dados.

#API REST
POST /cafe

Realiza o cadastro de um novo café.

Requisição
POST http://localhost:8080/cafe

Header:

Content-Type: application/json

Body:

{
  "nome": "Café Espresso",
  "torra": "Forte",
  "ml": 100,
  "preco": 7.50,
  "descricao": "Café espresso de torra forte."
}
GET /cafe

Retorna todos os cafés cadastrados.

Requisição
GET http://localhost:8080/cafe
Resposta
200 OK

Exemplo:

[
  {
    "id": 1,
    "nome": "Café Espresso",
    "torra": "Forte",
    "ml": 100,
    "preco": 7.50,
    "descricao": "Café espresso de torra forte."
  },
  {
    "id": 2,
    "nome": "Café Latte",
    "torra": "Médio",
    "ml": 250,
    "preco": 10.00,
    "descricao": "Café latte cremoso."
  }
]

#Como executar
Pré-requisitos

É necessário possuir instalado:

Java 21;
Maven, ou utilizar o Maven Wrapper incluído no projeto.

Verifique o Java:

java -version

#Execução:
Pode ser executado atráves do IntelliJ ou outra IDE de sua preferência
Comunicação com o Front-end

O Front-end utiliza a API disponibilizada por este projeto através de:

http://localhost:8080/cafe
Cadastro
POST /cafe
Listagem
GET /cafe

O formato utilizado para comunicação entre as aplicações é JSON.
