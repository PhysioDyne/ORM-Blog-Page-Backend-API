const express = require("express");
const app = express();
require("dotenv").config();
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

const userRoutes = require("./routes/user");
const adminRoutes = require("./routes/admin");

const sequelize = require("./data/db");
const dummyData = require("./data/dummy-data");

const Category = require("./models/category");
const Blog = require("./models/blog");

Blog.belongsToMany(
  Category,
  { through: "categoryblog" },
  { onDelete: "SET NULL" }
);
Category.belongsToMany(Blog, { through: "categoryblog" });
(async () => {
  await sequelize.sync({ force: true });
  await dummyData();
})();

app.use("/static", express.static("public"));
app.use("/lib", express.static("node_modules"));

app.use("/admin", adminRoutes);
app.use(userRoutes);

app.listen(process.env.PORT);
