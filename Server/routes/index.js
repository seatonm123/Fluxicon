var express = require('express');
var router = express.Router();
const knex = require('../db/knex');
const dotenv = require('dotenv').config();

var app = express();

router.get('/users', function(req, res, next) {
  return knex('users')
    .then(function(data){
      res.json(data);
    });
});

// router.get('/users/:id', function(req, res, next){
//   return knex('users').where('id', req.params.id)
//     .then(function(data){
//       res.json(data);
//     });
// });

router.get('/users/:user_name', function(req, res, next){
  console.log(req.params);
  return knex('users').where('user_name', req.params.user_name)
    .then(function(data){
      res.json(data);
    });
});

router.get('/users/user/:id', function(req, res, next){
  return knex('users').where('id', req.params.id)
    .then(function(data){
      console.log(data);
      res.json(data);
    });
});

router.patch('/users/user/:id', function(req, res, next){
  console.log(req.body);
  return knex('users').where('id', req.params.id)
  .update({
    points: req.body.points,
    level: req.body.level
  })
    .then(function(data){
      res.json(data);
    });
});

router.post('/users', function(req, res, next){
  console.log(req.body);
  return knex('users').insert({
    user_name: req.body.user_name,
    email: req.body.email,
    password: req.body.password,
    language_of_choice: req.body.language_of_choice
  })
  .returning('id')
  .then(function(data){

    res.json(data);
  });
});

router.get('/games', function(req, res, next){
  return knex('game')
    .then(function(data){
      res.json(data);
    });
});

router.get('/games/:id', function(req, res, next){
  return knex('game').where('id', req.params.id)
    .then(function(data){
      res.json(data);
    });
});

router.post('/games', function(req, res, next){
  return knex('game').insert({
    language: req.body.language,
    points_to_win: req.body.points_to_win,
    points_for_win: req.body.points_for_win,
    points_for_loss: req.body.points_for_loss,
    mode: req.body.mode,
    difficulty: req.body.difficulty
  })
  .returning('id')
  .then(function(data){
    res.json(data);
  });
});

router.get('/phrases', function(req, res, next){
  return knex('phrase')
    .then(function(data){
      res.json(data);
    });
});

router.get('/phrases/:id', function(req, res, next){
  return knex('phrase').where('id', req.params.id)
    .then(function(data){
      res.json(data);
    });
});

router.post('/phrases/:id', function(req, res, next){
  return knex('phrase').insert({
    category: req.body.category,
    content: req.body.content,
    author: req.body.author,
    points: req.body.points,
    difficulty: req.body.difficulty
  })
  .returning('id')
  .then(function(data){
    res.json(data);
  });
});

router.get('/games/:game_id/:user_id', function(req, res, next){
  return knex('user_game').where('game_id', req.params.game_id)
    .andWhere('user_id', req.params.user_id)
    .then(function(data){
      res.json(data);
    });
});

router.post('/games/:game_id/:user_id', function(req, res, next){
  return knex('user_game').insert({
    game_id: req.params.game_id,
    user_id: req.params.user_id
  })
  .returning('game_id')
  .then(function(data){
    res.json(data);
  });
});

router.get('/game_phrase/:game_id/:phrase_id', function(req, res, next){
  return knex('phrase_game').where('game_id', req.params.game_id)
    .andWhere('phrase_id', req.params.phrase_id)
    .then(function(data){
      res.json(data);
    });
});

router.post('/game_phrase/:game_id/:phrase_id', function(req, res, next){
  return knex('phrase_game').insert({
    game_id: req.params.game_id,
    phrase_id: req.params.phrase_id
  })
  .returning('game_id')
  .then(function(data){
    res.json(data);
  });
});

router.get('/phrases', function(req, res, next){
  return knex('phrase')
  .then(function(data){
    res.json(data);
  });
});

router.get('/phrases/:id', function(req, res, next){
  return knex('phrase').where('id', req.params.id)
  .then(function(data){
    res.json(data);
  })
  .catch(err=>{
    console.log(err);
    console.log('server error');
    res.send(err);
  });
});

router.get('/phrases/:category/:difficulty', function(req, res, next){
  return knex('phrase').where('category', req.params.category)
  .andWhere('difficulty', req.params.difficulty)
  .then(function(data){
    res.json(data);
  });
});

router.get('/progress/:user_id', function(req, res, next){
  return knex('progress').where('user_id', req.params.user_id)
  .then(function(data){
    res.json(data);
  });
});

router.post('/progress', function(req, res, next){
  console.log(req.body);
  return knex('progress').insert({
    user_id: req.body.user_id,
    language: req.body.language,
    mode: req.body.mode,
    game_number: 0,
    percentage_correct: req.body.percentage_correct
  })
  .then(function(data){
    res.send("You did it!");
  });
});

module.exports = router;
