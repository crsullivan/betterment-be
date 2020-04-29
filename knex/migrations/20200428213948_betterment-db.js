
exports.up = function(knex) {
    return knex.schema
    .createTable('users', t => {
        t.increments();
        t.string('password', 128).notNullable();
        t.string('email', 255).notNullable().unique();;
    })
    .createTable('user_skills', t => {
        t.increments();
        t.string('skill', 128).notNullable();
        t.integer('priority').notNullable();
        t.string('goal', 128).notNullable();
        t.string('start_date', 128).notNullable();
        t.integer('practiced').notNullable();
        t
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')

};
