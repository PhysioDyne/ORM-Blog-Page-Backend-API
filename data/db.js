const Sequelize = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    dialect: "mysql",
    host: process.env.HOST,
    define: {
      timestamps: false,
    },
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("MYSQL SERVER CONNECTED!");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = sequelize;
