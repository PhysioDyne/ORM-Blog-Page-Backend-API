const Blog = require("../models/blog");
const Category = require("../models/category");
const { Op } = require("sequelize");
const sequelize = require("../data/db");
const slugField = require("../helpers/slugField");
const multer = require("multer");

exports.get_blog_delete = async (req, res) => {
  async (req, res) => {
    const blogid = req.params.blogid;
    try {
      const blog = await Blog.findByPk(blogid);
      re.send({
        blog: blog,
        title: "Admin | Delete Blog",
      });
    } catch (error) {
      console.log(error);
    }
  };
};

exports.post_blog_delete = async (req, res) => {
  const blogid = req.body.blogid;
  try {
    await Blog.destroy({
      where: {
        id: blogid,
      },
    });
    res.redirect("/admin/blogs?action=delete");
  } catch (error) {
    console.log(error);
  }
};

exports.get_category_delete = async (req, res) => {
  const categoryid = req.params.categoryid;
  try {
    const category = await Category.findByPk(categoryid);
    console.log(category);
    re.send({
      category: category,
      title: "Admin | Delete Category",
    });
  } catch (error) {
    console.log(error);
  }
};
exports.post_category_delete = async (req, res) => {
  const categoryid = req.body.categoryid;

  try {
    await Category.destroy({
      where: {
        id: categoryid,
      },
    });
    res.redirect("/admin/categories?action=delete&categoryid=" + categoryid);
  } catch (error) {
    console.log(error);
  }
};

exports.get_blog_create = async (req, res) => {
  try {
    const categories = await Category.findAll();
    re.send({
      title: "Blog | Add Blog",
      categories: categories,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.post_blog_create = async (req, res) => {
  const title = req.body.title;
  const url = slugField(title);
  const description = req.body.description;
  const image = req.file.filename;
  const mainpage = req.body.mainpage == "on" ? 1 : 0;
  const approve = req.body.approve == "on" ? 1 : 0;

  try {
    await Blog.create({
      title: title,
      url: url,
      description: description,
      image: image,
      mainpage: mainpage,
      approve: approve,
    });

    res.redirect("/admin/blogs?action=create");
  } catch (error) {
    console.log(error);
  }
};
exports.get_category_create = async (req, res) => {
  try {
    const categories = await Category.findAll();
    re.send({
      title: "Blog | Add Category",
      categories: categories,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.post_category_create = async (req, res) => {
  const categoryname = req.body.categoryname;
  const url = slugField(categoryname);
  try {
    await Category.create({
      categoryname: categoryname,
      url: url,
    });
    res.redirect("/admin/categories?action=create");
  } catch (error) {
    console.log(error);
  }
};

exports.get_blog_edit = async (req, res) => {
  const blogid = req.params.blogid;
  try {
    const blog = await Blog.findByPk(blogid, {
      include: {
        model: Category,
      },
    });

    const categories = await Category.findAll();
    if (blog) {
      return re.send({
        title: blog.title,
        categories: categories,
        blog: blog,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.post_blog_edit = async (req, res) => {
  const blogid = req.body.blogid;
  const title = req.body.title;
  const description = req.body.description;
  const image = req.file.filename;
  const mainpage = req.body.mainpage == "on" ? 1 : 0;
  const approve = req.body.approve == "on" ? 1 : 0;
  const categoryId = req.body.categories;
  console.log(typeof categoryId);
  console.log(categoryId);
  try {
    const blog = await Blog.findByPk(blogid, {
      include: {
        model: Category,
      },
    });
    blog.title = title;
    blog.description = description;
    blog.image = image;
    blog.approve = approve;
    blog.mainpage = mainpage;
    if (categoryId == undefined) {
      await blog.removeCategories(blog.categories);
    } else if (typeof categoryId == "string") {
      await blog.removeCategories(blog.categories);
      const selectedCategories = await Category.findAll({
        where: {
          id: {
            [Op.eq]: categoryId,
          },
        },
      });
      await blog.addCategories(selectedCategories);
    } else {
      await blog.removeCategories(blog.categories);
      const selectedCategories = await Category.findAll({
        where: {
          id: {
            [Op.in]: categoryId,
          },
        },
      });
      await blog.addCategories(selectedCategories);
    }
    await blog.save();
    res.redirect("/admin/blogs?action=edit&blogid=" + blogid);
  } catch (error) {
    console.log(error);
  }
};

exports.post_remove_category = async (req, res) => {
  const blogid = req.body.rmblogid;
  const categoryid = req.body.rmcategoryid;
  console.log(blogid);
  console.log(categoryid);
  await sequelize.query(
    `delete from categoryblog where blogId = ${blogid} and categoryId = ${categoryid}`
  );
  res.redirect("/admin/categories/" + categoryid);
};

exports.get_category_edit = async (req, res) => {
  const categoryid = req.params.categoryid;
  try {
    const category = await Category.findByPk(categoryid);
    const blogs = await category.getBlogs();
    console.log(blogs);
    if (category) {
      return res.send({
        title: category.categoryname,
        category: category,
        blogs: blogs,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.post_category_edit = async (req, res) => {
  const categoryid = req.body.categoryid;
  const categoryname = req.body.categoryname;
  try {
    const category = await Category.findByPk(categoryid);

    category.categoryname = categoryname;
    category.save();
    res.redirect("/admin/categories?action=edit&categoryid=" + categoryid);
  } catch (error) {
    console.log(error);
  }
};

exports.blog_list = async (req, res) => {
  try {
    const blogs = await Blog.findAll({
      include: {
        model: Category,
      },
    });

    re.send("admin/blog-list", {
      title: "Admin | Blog List",
      blogs: blogs,
      action: req.query.action,
      blogid: req.query.blogid,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.category_list = async (req, res) => {
  try {
    const categories = await Category.findAll();

    re.send("admin/category-list", {
      title: "Admin | Category List",
      categories: categories,
      action: req.query.action,
      categoryid: req.query.categoryid,
    });
  } catch (error) {
    console.log(error);
  }
};
