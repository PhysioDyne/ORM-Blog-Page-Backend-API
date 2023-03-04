# ORM-Blog-Page-Backend-API
It's example for orm sequelize using. This project has no authentication and validation
ExpressJS Blog Project
This project is designed to create a blog web application using ExpressJS. In this project, users can create new blogs, update or delete existing blogs, filter by categories, access detail pages, and leave comments about blogs.

Requirements
To run this project, the following libraries need to be installed first:

express: A web framework used to create web applications.
dotenv: Used to load environment variables.
multer: Used to upload files.
mysql2: Used to perform MySQL database operations.
nodemon: Used to automatically restart the application.
sequelize: Used to perform database operations via ORM (Object-Relational Mapping).
You can install the required libraries using the following command:

Copy code
npm install express dotenv multer mysql2 nodemon sequelize
Installation
Clone or download this project.
Navigate to the project's root directory in the terminal.
Create your MySQL database and specify its information in your .env file.
Create the tables in the database using the following command:
Copy code
npx sequelize-cli db:migrate
You can start the project using the following command:
sql
Copy code
npm run start
The application should now be running at http://localhost:3000.

API Endpoints
GET /blogs: Lists all blogs.
POST /blogs: Creates a new blog.
GET /blogs/:id: Lists the details of a specific blog.
PUT /blogs/:id: Updates a specific blog.
DELETE /blogs/:id: Deletes a specific blog.
GET /blogs/category/:category: Lists blogs belonging to a specific category.
File Structure
markdown
Copy code
- controllers/
  - blogs.js: Handles requests related to blogs.
- migrations/: Enables the creation of database tables.
- models/: Defines database models and relationships.
- public/: A folder for static files (e.g. images).
- routes/: Defines the application routes.
- utils/
  - errorHandler.js: Contains functions for error handling and management.
  - fileUpload.js: Contains functions for file uploading.
- views/: Contains the application views.
