
exports.up = function(knex, Promise) {
  return knex.schema.createTable('progress', function(table){
    table.increments();
    table.integer('user_id').references('users.id').unsigned().onDelete('cascade');
    table.string('language');
    table.string('mode');
    table.integer('game_number');
    table.integer('percentage_correct');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('progress');
};
