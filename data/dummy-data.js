const Category = require("../models/category");
const Blog = require("../models/blog");
const slugField = require("../helpers/slugField");
module.exports = async () => {
  const count = await Blog.count();

  if (count == 0) {
    const category = await Category.bulkCreate([
      { categoryname: "Category 1", url: slugField("Category 1") },
      { categoryname: "Category 2", url: slugField("Category 2") },
      { categoryname: "Category 3", url: slugField("Category 3") },
    ]);

    const blog = await Blog.bulkCreate([
      {
        title: "Lorem Ipsum",
        url: slugField("Lorem Ipsum"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo leo, vehicula id condimentum non, tristique tincidunt ex. Donec nunc ipsum, ornare sed dictum sit amet, lobortis non turpis. Duis ultrices tellus id tortor accumsan, non imperdiet tortor tincidunt. Etiam aliquam varius leo in volutpat.",
        image: "1.jpeg",
        mainpage: true,
        approve: true,
      },
      {
        title: "Fusce scelerisque maximus",
        url: slugField("Fusce scelerisque maximus"),
        description:
          "Nullam euismod, libero in semper sollicitudin, ipsum nisl sollicitudin ligula, id dignissim urna nibh non velit. Suspendisse at varius nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sapien lacus, convallis ac blandit id, cursus non nisl. Nunc scelerisque purus at urna aliquet maximus.",
        image: "2.jpeg",
        mainpage: true,
        approve: true,
      },
      {
        title: "Aenean porttitor dolor",
        url: slugField("Aenean porttitor dolor"),
        description:
          "Suspendisse sit amet massa et ipsum lobortis consectetur. Sed porta pretium maximus. Nullam fringilla, leo sit amet maximus finibus, quam lacus sodales mi, molestie efficitur ex nisl rhoncus erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Peki son zamanlarda bu kadar popüler hale gelen Javascript nedir? Çoğu web geliştirici için Javascript sadece tarayıcıda yani client tarafında çalışan ve html içeriklerini hareketli hale getiren bir script dili olarak biliniyor.  Web sitemize eklediğimiz bir image galerisi, bir butona tıkladığımızda bir pop-up kutusunun açılması gibi html içeriklerini hareketli hale getiren ve yıllardır kullandığımız programlama dili tabi ki Javascript. Bu yönüyle Javascript 'i yıllardır zaten kullanmaktayız. Ancak son zamanlarda Javascript' i bu kadar popüler yapan neden nedir?",
        image: "3.jpeg",
        mainpage: true,
        approve: true,
      },
      {
        title: "Lorem Ipsum",
        url: slugField("Lorem Ipsum"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo leo, vehicula id condimentum non, tristique tincidunt ex. Donec nunc ipsum, ornare sed dictum sit amet, lobortis non turpis. Duis ultrices tellus id tortor accumsan, non imperdiet tortor tincidunt. Etiam aliquam varius leo in volutpat.",
        image: "1.jpeg",
        mainpage: true,
        approve: true,
      },
      {
        title: "Fusce scelerisque maximus",
        url: slugField("Fusce scelerisque maximus"),
        description:
          "Nullam euismod, libero in semper sollicitudin, ipsum nisl sollicitudin ligula, id dignissim urna nibh non velit. Suspendisse at varius nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sapien lacus, convallis ac blandit id, cursus non nisl. Nunc scelerisque purus at urna aliquet maximus.",
        image: "2.jpeg",
        mainpage: true,
        approve: true,
      },
      {
        title: "Aenean porttitor dolor",
        url: slugField("Aenean porttitor dolor"),
        description:
          "Suspendisse sit amet massa et ipsum lobortis consectetur. Sed porta pretium maximus. Nullam fringilla, leo sit amet maximus finibus, quam lacus sodales mi, molestie efficitur ex nisl rhoncus erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Peki son zamanlarda bu kadar popüler hale gelen Javascript nedir? Çoğu web geliştirici için Javascript sadece tarayıcıda yani client tarafında çalışan ve html içeriklerini hareketli hale getiren bir script dili olarak biliniyor.  Web sitemize eklediğimiz bir image galerisi, bir butona tıkladığımızda bir pop-up kutusunun açılması gibi html içeriklerini hareketli hale getiren ve yıllardır kullandığımız programlama dili tabi ki Javascript. Bu yönüyle Javascript 'i yıllardır zaten kullanmaktayız. Ancak son zamanlarda Javascript' i bu kadar popüler yapan neden nedir?",
        image: "3.jpeg",
        mainpage: true,
        approve: true,
      },
      {
        title: "Lorem Ipsum",
        url: slugField("Lorem Ipsum"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut justo leo, vehicula id condimentum non, tristique tincidunt ex. Donec nunc ipsum, ornare sed dictum sit amet, lobortis non turpis. Duis ultrices tellus id tortor accumsan, non imperdiet tortor tincidunt. Etiam aliquam varius leo in volutpat.",
        image: "1.jpeg",
        mainpage: true,
        approve: true,
      },
      {
        title: "Fusce scelerisque maximus",
        url: slugField("Fusce scelerisque maximus"),
        description:
          "Nullam euismod, libero in semper sollicitudin, ipsum nisl sollicitudin ligula, id dignissim urna nibh non velit. Suspendisse at varius nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam sapien lacus, convallis ac blandit id, cursus non nisl. Nunc scelerisque purus at urna aliquet maximus.",
        image: "2.jpeg",
        mainpage: true,
        approve: true,
      },
      {
        title: "Aenean porttitor dolor",
        url: slugField("Aenean porttitor dolor"),
        description:
          "Suspendisse sit amet massa et ipsum lobortis consectetur. Sed porta pretium maximus. Nullam fringilla, leo sit amet maximus finibus, quam lacus sodales mi, molestie efficitur ex nisl rhoncus erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Peki son zamanlarda bu kadar popüler hale gelen Javascript nedir? Çoğu web geliştirici için Javascript sadece tarayıcıda yani client tarafında çalışan ve html içeriklerini hareketli hale getiren bir script dili olarak biliniyor.  Web sitemize eklediğimiz bir image galerisi, bir butona tıkladığımızda bir pop-up kutusunun açılması gibi html içeriklerini hareketli hale getiren ve yıllardır kullandığımız programlama dili tabi ki Javascript. Bu yönüyle Javascript 'i yıllardır zaten kullanmaktayız. Ancak son zamanlarda Javascript' i bu kadar popüler yapan neden nedir?",
        image: "3.jpeg",
        mainpage: true,
        approve: true,
      },
    ]);
    await category[0].addBlog(blog[0]);
    await category[0].addBlog(blog[1]);
    await category[1].addBlog(blog[2]);
    await category[2].addBlog(blog[0]);
    await category[2].addBlog(blog[3]);
    await category[0].addBlog(blog[4]);
    await category[1].addBlog(blog[5]);
    await category[2].addBlog(blog[6]);
    await category[1].addBlog(blog[7]);
    await category[0].addBlog(blog[8]);
  }
};
