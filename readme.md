# Mern Shop — Full-Stack E-Commerce Application

A full-stack e-commerce application built with React, Redux Toolkit, Material UI, Node.js, Express.js, and MongoDB.

The application provides a foundation for exploring e-commerce workflows, frontend state management, REST API integration, authentication, and database operations.

## Tech Stack

### Frontend
- React
- React Router
- Redux Toolkit and React Redux
- Material UI (MUI)
- Axios
- React Hook Form
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB and Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- Cookie Parser
- Nodemailer

## Features

- Product listing and browsing
- Product search by title or description
- Brand and category filtering
- Product sorting and pagination
- REST API integration
- Authentication and database operations

## Project Structure

```text
Mern-Shop/
├── frontend/       # React client application
├── backend/        # Express API and database logic
├── LICENSE
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB connection
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/divyansh3369/Mern-Shop.git
cd Mern-Shop
```

### 2. Configure the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory and configure the environment variables required by the application.

Example configuration:

```env
MONGO_URI=your_mongodb_connection_string
ORIGIN=http://localhost:3000
SECRET_KEY=your_secret_key
PRODUCTION=false
```

Configure email-related variables if required by the application. Never commit real credentials or secrets.

Start the backend using the command configured in `backend/package.json`, for example:

```bash
npm start
```

### 3. Configure the Frontend

Open a second terminal:

```bash
cd frontend
npm install --legacy-peer-deps
```

Create a `.env` file in the `frontend` directory and set the API base URL expected by the application. For example:

```env
REACT_APP_BASE_URL=http://localhost:8000
```

Start the frontend:

```bash
npm start
```

Open the local URL displayed by the development server.

**Note:** Environment variable names, API paths, database settings, and ports must match the actual source-code configuration.

## My Contributions

The following enhancements have been made to the project:

- Added product search by title and description.
- Extended the backend product API to support case-insensitive search.
- Integrated search parameters with existing brand and category filters.
- Connected the frontend product listing to the updated search API.

## Development

Build the frontend for production:

```bash
cd frontend
npm run build
```

Run frontend tests if configured:

```bash
cd frontend
npm test
```

## Security Notes

- Keep `.env` files and credentials out of version control.
- Use strong, unique secrets outside local development.
- Never publish private database connection strings or email credentials.
- Review authentication, authorization, and input validation before deployment.

## Future Improvements

- Expand automated test coverage.
- Improve loading, empty, and error states.
- Strengthen input validation and API error handling.
- Improve responsive design and accessibility.
- Document API endpoints and deployment steps.

## License

This project includes the MIT License. See the [LICENSE](LICENSE) file for the applicable terms and required copyright notices.

## Maintainer

**Divyansh Dev Mishra**

GitHub: [@divyansh3369](https://github.com/divyansh3369)
