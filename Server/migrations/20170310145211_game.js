
exports.up = function(knex, Promise) {
  return knex.schema.createTable('game', function(table){
    table.increments();
    table.string('language');
    table.integer('points_to_win');
    table.integer('points_for_win');
    table.integer('points_for_loss');
    table.string('mode');
    table.integer('difficulty');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('game');
};
