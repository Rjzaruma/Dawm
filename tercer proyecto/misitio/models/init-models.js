var DataTypes = require("sequelize").DataTypes;
var _actores = require("./actores");
var _peliculas = require("./peliculas");

function initModels(sequelize) {
  var actores = _actores(sequelize, DataTypes);
  var peliculas = _peliculas(sequelize, DataTypes);

  actores.belongsTo(peliculas, { as: "pelicula_pelicula", foreignKey: "pelicula"});
  peliculas.hasMany(actores, { as: "actores", foreignKey: "pelicula"});

  return {
    actores,
    peliculas,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
