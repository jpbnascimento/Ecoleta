import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();

app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);

// Aprendendo

// Rota = endereco completo da requisicao 
// Recurso = qual entidade estamos acessando do sistema ex: usuarios users

// GET : Buscar uma ou mais informacoes do back-end
// POST : Cria uma nova informacao no back-end
// PUT: atualiza uma informacoes existente do back-end
// DELETE: remove uma informacoes do back-end

// POST http://localhost:3333/users - cria um usuario 
// GET http://localhost:3333/users = listar usuarios 
// GET http://localhost:3333/users/2 = busca dados do usuario com id 2

// Request Param: Parâmetros que vem na propria rota que identificam um recurso
// Query Param: parametros que vem na própria rota geralmente opcionais para filtros, paginação
// Request Body: Parâmetros para criação e atualizações de informações

// SELECT * FROM  users WHERE name = 'Jéssica' normal
// knex('users').where('name', 'jessica').select('*') js
// app.get('/', (request, response) => {
//     const search = String(request.query.search);

//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

//     return response.json(filteredUsers);

// });

// app.get('/users/:id', (request, response) => {
    // response.send('Hello world');
    //     const id = Number(request.params.id);

//     const user = users[id];

//     return response.json(user);

// });

// app.post('/users', (request, response) => {
//     const data = request.body;
//     // console.log(data);

//     const user = {
//         name: data.name,
//         email: data.email
//     };

//     return response.json(user);
// });

