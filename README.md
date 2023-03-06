# ORM-Blog-Page-Backend-API
It's example for orm sequelize using. This project has no authentication and validation
This project is designed to create a blog web application using ExpressJS. In this project, users can create new blogs, update or delete existing blogs, filter by categories, access detail pages, and leave comments about blogs.

##Requirements
To run this project, the following libraries need to be installed first:

- express: A web framework used to create web applications.
- dotenv: Used to load environment variables.
- multer: Used to upload files.
- mysql2: Used to perform MySQL database operations.
- nodemon: Used to automatically restart the application.
- sequelize: Used to perform database operations via ORM (Object-Relational Mapping).
- You can install the required libraries using the following command:
```bash
npm install express dotenv multer mysql2 nodemon sequelize
```


You can start the project using the following command:
```
npm run start
```

##API Endpoints
  ###USER SIDE
- GET /: Lists all blogs.
- GET /blogs/:slug: Shows a specific blog.
- GET /blogs/category/:slug: Lists blogs belonging to a specific category.
- GET /blogs: It routes to the admin category list
  ###ADMIN SIDE
- DELETE /admin/blog/delete/:blogid: It's to delete a post from blog
- UPDATE /admin/blogs/:blogid: It's to edit any post.
- CREATE /admin/blog/create: It's to create a new post.
- REMOVE /admin/categories/remove: It's to remove a spesific category from blog 
