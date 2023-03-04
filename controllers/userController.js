const Blog = require("../models/blog");
const Category = require("../models/category");
const { Op } = require("sequelize");

exports.category_filter = async (req, res) => {
  const { page = 0 } = req.query;
  const size = 5;
  const slug = req.params.slug;
  try {
    const blogs = await Blog.findAll({
      include: {
        model: Category,
        where: {
          url: slug,
        },
      },
      offset: size * page,
      limit: size,
    });
    const blogcount = await Blog.count({
      include: {
        model: Category,
        where: {
          url: slug,
        },
      },
    });
    let pages = Math.ceil(blogcount / size);
    const categories = await Category.findAll();

    res.send({
      title: "Category |" + slug,
      blogs: blogs,
      categories: categories,
      pages: pages,
      selectedID: slug,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.blog_details = async (req, res) => {
  const slug = req.params.slug;

  try {
    const blog = await Blog.findOne({
      where: {
        url: slug,
      },
    });
    const categories = await Category.findAll();

    if (blog) {
      return res.send({
        title: blog.title,
        blog: blog,
        categories: categories,
        selectedID: null,
      });
    }
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

exports.mainpage = async (req, res) => {
  const { page = 0 } = req.query;
  const size = 5;
  try {
    const blogs = await Blog.findAll({
      where: {
        [Op.and]: [{ approve: true }, { mainpage: true }],
      },
      include: Category,
      offset: size * page,
      limit: size,
    });
    const blogcount = await Blog.count({
      where: {
        [Op.and]: [{ approve: true }, { mainpage: true }],
      },
    });
    let pages = Math.ceil(blogcount / size);
    console.log(blogcount);
    const categories = await Category.findAll();

    res.send({
      title: "Blog | Semih",
      blogs: blogs,
      categories: categories,
      pages: pages,
      selectedID: null,
    });
  } catch (error) {
    console.log(error);
  }
};
