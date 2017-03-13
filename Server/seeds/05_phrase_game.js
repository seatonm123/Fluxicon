
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "phrase_game"; ALTER SEQUENCE phrase_game_id_seq RESTART WITH 11')
    .then(function () {
      const phrase_games = [{
        id: 1,
        phrase_id: 111,
        game_id: 5
      }, {
        id: 2,
        phrase_id: 126,
        game_id: 5
      }, {
        id: 3,
        phrase_id: 24,
        game_id: 4
      }, {
        id: 4,
        phrase_id: 12,
        game_id: 4
      }, {
        id: 5,
        phrase_id: 5,
        game_id: 3
      }, {
        id: 6,
        phrase_id: 7,
        game_id: 3
      }, {
        id: 7,
        phrase_id: 67,
        game_id: 2,
      }, {
        id: 8,
        phrase_id: 51,
        game_id: 2
      }, {
        id: 9,
        phrase_id: 32,
        game_id: 1
      }, {
        id: 10,
        phrase_id: 49,
        game_id: 1
      }];
      return knex('phrase_game').insert(phrase_games);
    });
};
