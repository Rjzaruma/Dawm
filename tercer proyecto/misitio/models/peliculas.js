const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('peliculas', {
    id_p: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    poster: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    fase: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.STRING(600),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'peliculas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_p" },
        ]
      },
    ]
  });
};
