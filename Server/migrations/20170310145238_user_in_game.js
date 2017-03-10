
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_game', function(table){
    table.increments();
    table.integer('user_id').references('users.id').unsigned().onDelete('cascade');
    table.integer('game_id').references('game.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_game');
};
