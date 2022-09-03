var express = require('express');
var router = express.Router();
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
const peliculas = require('../models/peliculas.js');
const actores = require('../models/actores.js');
var models = initModels(sequelize);  
/* GET home page. */

router.get('/peliculas', function(req, res, next) {
  models.peliculas.findAll({
 })
  .then(peliculas => {
   res.json(peliculas)
})
.catch(error => res.status(400).send(error))
});
router.get('/peliculas/:id', function(req, res, next) {
  models.peliculas.findOne({
    where: { 
      id_p: parseInt(req.params.id)
    }
  })
  .then(cliente => {  
      res.json( cliente );  
  })  
  .catch(error => res.status(400).send(error))
});
router.get('/peliculas/fase/:id', function(req, res, next) {
  models.peliculas.findAll({
    where: { 
      fase: parseInt(req.params.id)
    }
  })
  .then(cliente => {  
      res.json( cliente );  
  })  
  .catch(error => res.status(400).send(error))
});
router.get('/peliculas/rate/:id', function(req, res, next) {
  models.peliculas.findAll({
    where: { 
      rating: parseInt(req.params.id)
    }
  })
  .then(cliente => {  
      res.json( cliente );  
  })  
  .catch(error => res.status(400).send(error))
});
router.get('/actores', function(req, res, next) {
  models.actores.findAll({
 })
  .then(actores => {
   res.json(actores)
})
.catch(error => res.status(400).send(error))
});
router.get('/actores/:id', function(req, res, next) {
  models.actores.findAll({
    where: { 
      pelicula: parseInt(req.params.id)
    }
  })
  .then(cliente => {  
      res.json( cliente );  
  })  
  .catch(error => res.status(400).send(error))
});

module.exports = router;
