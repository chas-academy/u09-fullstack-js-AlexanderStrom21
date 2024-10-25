# Coder Project Documentation

## Project Overview
**Description**: Coder is a forum platform where programmers can chat through posts to collaboratively solve problems. Users can create accounts, log in, and engage in discussions on various programming topics.

**Technologies Used**:
- **Frontend**: React.js
- **State Management**: React hooks
- **API Calls**: Axios for handling HTTP requests
- **Styling**: tailwind
- **Deployment**: Netlify for hosting

## Key Components

### UpdateProfile
- **Description**: Component for users to update their profile information.
- **Props**: None
- **State**: Manages form data for email and password.

### AuthService
- **Description**: Handles authentication-related API calls.
- **Methods**:
  - `login(formData)`: Handles user login.
  - `register(formData)`: Registers a new user.
  - `logout()`: Logs out the current user.
  - `updateUser(updateData, token, userId)`: Updates user profile information.

### AdminDashboard
- **Description**: Component that allows admin users to manage users and threads.
- **Methods**:
  - `deleteUser(userId)`: Deletes a specified user.
  - `deleteThread(threadId)`: Deletes a specified thread.

### UserItem
- **Description**: Displays individual user information in a list.

### Threads
- **Description**: Component for displaying and managing discussion threads.

## Custom Hooks

### useAuthToken
- **Description**: Custom hook to manage and retrieve authentication tokens.
- **Returns**: An object containing the token and methods to set or remove it.

### useFetchProfile
- **Description**: Custom hook for fetching the user profile from the API.
- **Returns**: An object containing the user data, loading state, and error message.

### useCRUD
- **Description**: Custom hooks for handling CRUD operations.
- **Methods**:
  - `useFetchData(url)`: Fetches data from the provided URL.
  - `useCreateData(url, data)`: Sends a POST request to create new data.
  - `useUpdateData(url, id, data)`: Sends a PUT request to update existing data.
  - `useDeleteData(url, id)`: Sends a DELETE request to remove data.

### Additional Hooks
- **authHooks**: Includes `useAuth`, `useAuthToken`, and `useDeleteUser`.
- **commentHooks**: Includes hooks for managing comments, such as `DeleteComment` and `UseFetchCommentsByAuthorId`.
- **threadHooks**: Includes hooks for thread operations like `DeleteThread` and `UseThreads`.

## API Endpoints

| Method | Endpoint                       |Description                                   

| POST   | /login                         | Authenticate user and obtain token  
| POST   | /register                      | Create a new user                             
| GET    | /profile                       | Fetch user profile                            
| PUT    | /profile/:id                   | Update user profile                           
| DELETE | /profile/:id                   | Delete user account (users can delete their own) 
| GET    | /posts                         | Fetch all posts                              
| POST   | /posts                         | Create a new post                            
| GET    | /posts/:id                     | Fetch a specific post                        
| PUT    | /posts/:id                     | Update a specific post                       
| DELETE | /posts/:id                     | Delete a specific post                       
| DELETE | /admin/users/:id               | Admins can delete a specific user            
| DELETE | /admin/posts/:id               | Admins can delete a specific post            

## User Roles and Permissions
- **Users**: Can create, read, and delete their own posts and profiles.
- **Admins**: Have elevated permissions to delete any user accounts and any threads.

## Styling and UI Components
- **Styling Framework**: tailwind
- **Components**: 
  - Reusable form inputs for consistent styling.
  - Buttons, modals, and other UI elements.

## Setup Instructions

### Prerequisites
- Node.js 
- npm 

### Installation
1. Clone the repository:
   git clone https://github.com/chas-academy/u09-fullstack-js-AlexanderStrom21
   go to the right map
    - cd frontend
      update npm and build
      - npm install
      - npm run build
      start development server
      -npm start

   

