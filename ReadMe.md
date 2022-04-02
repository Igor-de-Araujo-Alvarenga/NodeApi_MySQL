## Para utilizar 

npm install para criar a pasta da nodemodules
npm start inicia a aplicação na porta 3000 podendo ser alterado no arquivo .env

### App.ts

Arquivo index da nossa API

### db.ts

Arquivo de conexão com o banco de dados

### dist 

diretorio de compilação do typescript para javascript (isso é feito pelo compilador do typescript)

### .ENV

Arquivo para variaveis de ambientes, geralmente voces usam como Constants.

### Models

Modelo dos metodos para CRUD com o Tipo Pessoa

### Types

Interface do tipo pessoa do banco de dados.

### routes

End points que voce vai mandar as solicitações

GET http://localhost:3000/Pessoa Lista todas as Pessoas do Banco

GET http://localhost:3000/Pessoa/{Id}  substitui o {Id} pelo numero do id do usuario buscado

DELETE http://localhost:3000/Pessoa/{Id} substitui o {Id} pelo numero do id do usuario que quer deletar

PUT http://localhost:3000/Pessoa 

body: {
    id: id do usuario que quer editar,
    name: nome novo do usuario 
}

POST http://localhost:3000/Pessoa 

body: {
    name: nome do novo usuario 
}

