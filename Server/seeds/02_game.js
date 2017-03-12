
exports.seed = function(knex, Promise) {

  return knex.raw('DELETE FROM "game"; ALTER SEQUENCE game_id_seq RESTART WITH 6')
    .then(function () {
      const games = [{
        id: 1,
        language: 'French',
        points_to_win: 25,
        points_for_win: 15,
        points_for_loss: 5,
        mode: 'Single',
        difficulty: 4
      }, {
        id: 2,
        language: 'Spanish',
        points_to_win: 25,
        points_for_win: 15,
        points_for_loss: 5,
        mode: 'Training',
        difficulty: 1
      }, {
        id: 3,
        language: 'Italian',
        points_to_win: 25,
        points_for_win: 15,
        points_for_loss: 5,
        mode: 'Single',
        difficulty: 1
      }, {
        id: 4,
        language: 'German',
        points_to_win: 25,
        points_for_win: 15,
        points_for_loss: 5,
        mode: 'Doubles',
        difficulty: 1
      }, {
        id: 5,
        language: 'Latin',
        points_to_win: 25,
        points_for_win: 15,
        points_for_loss: 5,
        mode: 'Training',
        difficulty: 1
      }];
      return knex('game').insert(games);
    });
};
