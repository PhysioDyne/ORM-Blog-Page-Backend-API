const express = require("express");
const router = express.Router();
const imageUpload = require("../helpers/imageUploader");
const adminController = require("../controllers/adminController");

router.get("/blog/delete/:blogid", adminController.get_blog_delete);

router.post("/blog/delete/:blogid", adminController.post_blog_delete);

router.get("/category/delete/:categoryid", adminController.get_category_delete);

router.post(
  "/category/delete/:categoryid",
  adminController.post_category_delete
);

router.get("/blog/create", adminController.get_blog_create);

router.post(
  "/blog/create",
  imageUpload.upload.single("image"),
  adminController.post_blog_create
);

router.get("/category/create", adminController.get_category_create);

router.post("/category/create", adminController.post_category_create);

router.get("/blogs/:blogid", adminController.get_blog_edit);
router.post(
  "/blogs/:blogid",
  imageUpload.upload.single("image"),
  adminController.post_blog_edit
);

router.post("/categories/remove", adminController.post_remove_category);

router.get("/categories/:categoryid", adminController.get_category_edit);

router.post("/categories/:categoryid", adminController.post_category_edit);

router.get("/blogs", adminController.blog_list);

router.get("/categories", adminController.category_list);
module.exports = router;
