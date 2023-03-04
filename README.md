# ORM-Blog-Page-Backend-API
It's example for orm sequelize using. This project has no authentication and validation
This project is designed to create a blog web application using ExpressJS. In this project, users can create new blogs, update or delete existing blogs, filter by categories, access detail pages, and leave comments about blogs.

Requirements
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

npm install express dotenv multer mysql2 nodemon sequelize

You can start the project using the following command:
```
npm run start
```

API Endpoints
- GET /blogs: Lists all blogs.
- POST /blogs: Creates a new blog.
- GET /blogs/:id: Lists the details of a specific blog.
- PUT /blogs/:id: Updates a specific blog.
- DELETE /blogs/:id: Deletes a specific blog.
- GET /blogs/category/:category: Lists blogs belonging to a specific category.
