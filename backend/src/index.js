/**
 * Rotas / Recursos
 */

/**
 * Métodos HTTP
 * 
 * GET   : Buscar/listar uma informação no back-end
 * POST  : Criar uma informação no back-end
 * PUT   : Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */

/**
 * Tipos de parâmetros:
 * 
 * Query params (request.query ): Parâmentros nomeados enviados na rota após o "?" (Filtros, paginação)
 * Route params (request.params): Parâmentros utilizados para identificar os recursos
 * Request Body (request.body)  : Corpo da requisição, utilizado para criar ou alterar recursos
 * 
 */

/**
 * Comando para startar servidor contínuamente:
 * 
 * npm start
 * 
 */

/**
 * Tipos de bancos de dados:
 * 
 * SQL  : MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 * 
 * 
 * Formas de utilização do banco de dados:
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where(etc)
 */

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);