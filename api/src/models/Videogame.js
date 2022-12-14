const { DataTypes, UUIDV1 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV1,
      unique: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      defaultValue: '/assets/images/404.jpg',
    },
    release: {
      type: DataTypes.DATEONLY,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    rating: {
      type: DataTypes.FLOAT,
      defaultValue: 3
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },{
    timestamps: false,
  });
};
