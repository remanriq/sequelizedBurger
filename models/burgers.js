
module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
    burger_name: { 
    	type: DataTypes.STRING,
    	allowNull: true
    },
    devoured: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: false
    }
  });
  return burgers;
};