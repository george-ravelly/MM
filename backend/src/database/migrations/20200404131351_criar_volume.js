exports.up = function(knex) {
    return knex.schema.createTable('volume', function(table){
        table.increments();
        table.string('volume').notNullable();
        table.integer('id_manga').notNullable();


        table.foreign('id_manga').references('id').inTable('mangas');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('volume');
};