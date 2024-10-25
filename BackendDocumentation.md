# Coder Backend Documentation

## Project Overview
**Description**: The backend for Coder is built with Node.js and Express, providing the necessary API endpoints for the Coder forum application. It handles user authentication, thread management, and database interactions with MongoDB.

**Technologies Used**:
- **Backend Framework**: Node.js with Express
- **Database**: MongoDB using Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Middleware**: CORS, Cookie Parser
- **Environment Variables**: dotenv for managing environment variables

## Directory Structure

backend/ 
├── controllers/ 
│   |
|   ├── ThreadController.js 
│   └── UserController.js 
├── middleware/ 
│   └── AuthMiddleware.js 
├── models/ 
│   ├── Thread.js 
│   └── User.js 
├── routes/ 
│   ├── ThreadRoute.js 
│   └── UserRoute.js 
├── services/ 
│   ├── ThreadService.js 
│   └── UserService.js 
├── .env 
├── index.js 
├── package-lock.json 
└── package.json

## Key Components

### Controllers
- **ThreadController.js**: Manages requests related to threads (create, update, delete).
- **UserController.js**: Manages user-related operations (registration, login, profile updates).

### Middleware
- **AuthMiddleware.js**: Middleware for handling authentication and authorization.

### Models
- **Thread.js**: Mongoose model for threads in the forum.
- **User.js**: Mongoose model for users.

### Routes
- **ThreadRoute.js**: Defines API endpoints related to threads.
- **UserRoute.js**: Defines API endpoints related to user management.

### Services
- **ThreadService.js**: Contains business logic related to thread operations.
- **UserService.js**: Contains business logic for user authentication and management.

## Setup Instructions

### Prerequisites
- Node.js (version x.x or higher)
- MongoDB (local or cloud instance)
- npm (Node package manager)

### Installation
1. Clone the repository:
   git clone https://github.com/chas-academy/u09-fullstack-js-AlexanderStrom21
   cd backend
   npm install
   npm start
# Coder Backend Documentation

## API Endpoints

| Method | Endpoint              | Description                                   |
|--------|-----------------------|-----------------------------------------------|
| POST   | /login                | Authenticate user and obtain token            |
| POST   | /register             | Create a new user                             |
| GET    | /profile              | Fetch user profile                            |
| PUT    | /profile/:id          | Update user profile                           |
| GET    | /posts                | Fetch all posts                               |
| POST   | /posts                | Create a new post                             |
| GET    | /posts/:id            | Fetch a specific post                         |
| PUT    | /posts/:id            | Update a specific post                        |
| DELETE | /posts/:id            | Delete a specific post                        |

## User Roles and Permissions
- **Users**: Can create, read, and delete their own posts and profiles.
- **Admins**: Have elevated permissions to delete any user accounts and any threads.

## Deployment
The project is deployed using Render. To deploy:
1. Push changes to your GitHub repository.
2. Connect your repository to Render through its dashboard.
3. Set up automatic builds and deployments on push.

## Package Dependencies
- **bcrypt**: For hashing passwords.
- **cookie-parser**: For parsing cookies.
- **cors**: For enabling CORS in Express.
- **dotenv**: For loading environment variables.
- **express**: The web framework for Node.js.
- **jsonwebtoken**: For generating and verifying JWT tokens.
- **mongoose**: For MongoDB object modeling.

