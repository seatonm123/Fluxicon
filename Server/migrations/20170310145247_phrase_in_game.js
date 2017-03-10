
exports.up = function(knex, Promise) {
  return knex.schema.createTable('phrase_game', function(table){
    table.increments();
    table.integer('phrase_id').references('phrase.id').unsigned().onDelete('cascade');
    table.integer('game_id').references('game.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('phrase_game');
};
