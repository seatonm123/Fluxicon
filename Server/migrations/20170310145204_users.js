
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.string('user_name');
    table.string('email');
    table.string('password');
    table.integer('level').defaultTo(1);
    table.integer('points').defaultTo(0)
    table.string('language_of_choice');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
