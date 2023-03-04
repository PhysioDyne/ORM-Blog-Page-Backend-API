const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/blogs/category/:slug", userController.category_filter);

router.get("/blog/:slug", userController.blog_details);

router.get("/", userController.mainpage);

module.exports = router;
