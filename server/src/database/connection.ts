import knex from 'knex';
import path from 'path';

// objeto com a configuração do banco de dados

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault:true,
});

export default connection;

// Migrations = Histórico do banco de dados

// create table points
// create table users