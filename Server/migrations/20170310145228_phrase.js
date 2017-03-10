
exports.up = function(knex, Promise) {
  return knex.schema.createTable('phrase', function(table){
    table.increments();
    table.string('category');
    table.text('content');
    table.string('author');
    table.integer('points');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('phrase');
};
