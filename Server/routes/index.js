var express = require('express');
var router = express.Router();
var knex = require('../db/knex');



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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

module.exports = router;
