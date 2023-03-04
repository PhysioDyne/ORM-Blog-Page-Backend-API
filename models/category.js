const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Category = sequelize.define("category", {
  url: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  categoryname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Category;
