var express = require('express');
var router = express.Router();
const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
const peliculas = require('../models/peliculas.js');
const actores = require('../models/actores.js');
var models = initModels(sequelize);  



/* GET home page. */
router.get('/', function(req, res, next) {
  models.peliculas.findAll({
 })
  .then(peliculas => {
   res.json(peliculas)
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

module.exports = router;
