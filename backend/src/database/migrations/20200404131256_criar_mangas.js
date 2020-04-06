exports.up = function(knex) {
    return knex.schema.createTable('mangas', function (table){
        table.increments();
        table.string('nome').notNullable();
        table.string('autor').notNullable();
        table.string('descricao').notNullable();
        table.integer('id_usuario').notNullable();

        table.foreign('id_usuario').references('id').inTable('usuarios');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('mangas');
};
