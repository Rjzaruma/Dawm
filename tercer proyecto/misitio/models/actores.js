const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('actores', {
    id_a: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    personaje: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    pelicula: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'peliculas',
        key: 'id_p'
      }
    }
  }, {
    sequelize,
    tableName: 'actores',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_a" },
        ]
      },
      {
        name: "pelicula",
        using: "BTREE",
        fields: [
          { name: "pelicula" },
        ]
      },
    ]
  });
};
