/* const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'erenJaeger.121131',
        database: 'rbingenieriaform'
    },
 
    pool: { min: 0, max: 8} 
}) */


knex.schema.hasTable('consultas').then(function(exists) {
    if (!exists) {
        return knex.schema.createTable('consultas', function(t) {
            t.increments('idCliente').primary();
            t.string('nombre', 50);
            t.string('apellido', 50);
            t.string('email', 100);
            t.text('comentario', 500);
        });
    }
});

module.exports = knex;