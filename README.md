# Company Management System.
![](https://komarev.com/ghpvc/?username=mscbuild) 
 ![](https://img.shields.io/github/license/mscbuild/e-learning) 
 ![](https://img.shields.io/github/repo-size/mscbuild/e-learning)
![](https://img.shields.io/badge/PRs-Welcome-green)
![](https://img.shields.io/badge/code%20style-js/vue-green)
![](https://img.shields.io/github/stars/mscbuild)
![](https://img.shields.io/badge/Topic-Github-lighred)
![](https://img.shields.io/website?url=https%3A%2F%2Fgithub.com%2Fmscbuild)


A simple Company Management System built with Express.js and MongoDB. This system allows for basic functionalities like user authentication, employee management, and more. It provides an API for managing employees and authenticating users.

# Project Structure
```ruby
company-management-system/
│
├── config/
│   └── db.js            # MongoDB connection configuration
├── controllers/          # API logic for different routes
│   └── employeeController.js
├── models/               # Mongoose models for database
│   └── Employee.js
│   └── User.js           # User model for authentication
├── routes/               # Route definitions
│   └── employeeRoutes.js
│   └── authRoutes.js     # Authentication routes (login/signup)
├── .env                  # Environment variables
├── server.js             # Main Express server file
└── package.json
```

# Features

<li>User Authentication: Register and log in using JWT authentication.

<li>Employee Management: Create, read, update, and delete employee records.

<li>Task Management: (Optional, can be added later)

<li>Department Management: Organize employees by departments.

<li>Leave & Attendance: (Optional, can be added later)

<li>Payroll Management: (Optional, can be added later)

 # Tech Stack.

<li>Backend: Node.js  with  Express.j s

<li>Database: MongoDB

<li>Authentication: JSON Web Tokens (JWT)

<li>Password Hashing:  Bcrypt.js 

<li>Environment Variables: dotenv

<li>Development Tools: Nodemon for automatic server reload

# Prerequisites.

## Installation.

1. Clone the repository:
```ruby
git clone https://github.com/mscbuild/CHMS_expressJS.git cd CHMS_expressJS
```
2. Install dependencies:

Run the following command to install the necessary dependencies:

```ruby
npm install
```
3. Set up environment variables:

Create a `.env` file in the root directory and define the following environment variables:

```ruby
MONGO_URI=mongodb://localhost:27017/companyDB
JWT_SECRET=your_jwt_secret_key
PORT=5000
```
`MONGO_URI`: Your MongoDB connection string. If you're using MongoDB Atlas, use the connection string provided by Atlas.

`JWT_SECRET`: A secret key for JWT encoding.

`PORT`: The port the application will run on (default is 5000).

# Running the Application

To start the development server, use:

```ruby
npx nodemon server.js
```
The server will run at `http://localhost:5000` by default.

# API Endpoints.

## Authentication Routes.

<li>POST /api/auth/register: Register a new user.

<li>Request body:
```ruby
{
  "username": "user1",
  "password": "password123"
}
```
<li></li>POST /api/auth/login: Login with existing credentials.

<li>Request body:
```ruby
{
  "username": "user1",
  "password": "password123"
}
```
# Employee Management Routes.

<li>POST /api/employees: Create a new employee.

<li>Request body:

```ruby
{
  "name": "John Doe",
  "role": "Software Engineer",
  "department": "Engineering",
  "contact": "john.doe@example.com",
  "salary": 70000
}
```
<li>GET /api/employees: Get all employees.

# Development
<li>If you'd like to contribute or develop new features, follow these steps:</li>
