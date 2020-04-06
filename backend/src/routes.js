const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
* Tipos de parâmetros http requests
*
* Query Params: Paramêtros nomeados e enviados na rota após "?" (Filtros, paginação)
* Route Params: Paramêtros utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar recusos
*/

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, M SQL Server
 * NoSQL: MongoDB, CounchDB, etc
 */
/**
 * Driver: SELECT * FROM users
 * Query Builder: 
 */

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;