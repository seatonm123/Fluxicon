
exports.seed = function(knex, Promise) {

  return knex.raw('DELETE FROM "user_game"; ALTER SEQUENCE user_game_id_seq RESTART WITH 6')
    .then(function () {
      const user_games = [{
        id: 1,
        user_id: 1,
        game_id: 5
      }, {
        id: 2,
        user_id: 2,
        game_id: 4
      }, {
        id: 3,
        user_id: 3,
        game_id: 3
      }, {
        id: 4,
        user_id: 4,
        game_id: 2
      }, {
        id: 5,
        user_id: 5,
        game_id: 1
      }];
      return knex('user_game').insert(user_games);
    });
};
