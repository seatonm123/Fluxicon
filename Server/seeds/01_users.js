
exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "users"; ALTER SEQUENCE users_id_seq RESTART WITH 6')
  .then(function(){
    const users = [{
      id: 1,
      user_name: 'frenchFrie',
      email: 'frogger@gmail.com',
      password: 'password',
      level: 0,
      language_of_choice: 'French'
    }, {
      id: 2,
      user_name: 'theSpaniard',
      email: 'russelsCrowe@gmail.com',
      password: 'password',
      level: 0,
      language_of_choice: 'Spanish'
    }, {
      id: 3,
      user_name: 'latinQueen',
      email: 'cleopatraWasGreek@gmail.com',
      password: 'password',
      level: 0,
      language_of_choice: 'Latin'
    }, {
      id: 4,
      user_name: 'heroHeato',
      email: 'risingSun@gmail.com',
      password: 'password',
      level: 0,
      language_of_choice: 'Japanese'
    }, {
      id: 5,
      user_name: 'herrPanzer',
      email: 'sigfraud@gmail.com',
      password: 'password',
      level: 0,
      language_of_choice: 'German'
    }];
    return knex('users').insert(users);
  });
};
