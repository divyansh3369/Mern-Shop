# Mern Shop — Full-Stack E-Commerce Application

A full-stack e-commerce web application built using React, Redux Toolkit, Material UI, Node.js, Express.js, and MongoDB.

This project provides a foundation for exploring e-commerce workflows, frontend state management, REST API integration, authentication, and database operations.

## Tech Stack

### Frontend
- React
- React Router
- Redux Toolkit
- React Redux
- Material UI (MUI)
- Axios
- React Hook Form
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- Cookie Parser
- Nodemailer

## Features

- Product listing and browsing
- Product search by title or description
- Case-insensitive product search
- Brand and category filtering
- Product sorting and pagination
- REST API integration
- Database operations
- Authentication support

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

### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory. Configure the environment variables required by the source code.

Example configuration:

```env
MONGO_URI=your_mongodb_connection_string
ORIGIN=http://localhost:3000
SECRET_KEY=your_secret_key
PRODUCTION=false
```

Use the exact variable names expected by the backend. Configure email-related variables if required. Never commit real credentials or secrets.

Start the backend using the command defined in `backend/package.json`. For example:

```bash
npm start
```

### 3. Set Up the Frontend

Open a second terminal:

```bash
cd frontend
npm install --legacy-peer-deps
```

Create a `.env` file inside the `frontend` directory and configure the API base URL expected by the application.

Example:

```env
REACT_APP_BASE_URL=http://localhost:8000
```

Start the frontend using the script configured in `frontend/package.json`:

```bash
npm start
```

Open the local URL displayed by the development server.

**Note:** Environment variable names, API paths, and port numbers must match the actual project configuration.

## My Contributions

The following enhancements have been made to the project:

- Implemented product search by title and description.
- Extended the backend product API to support case-insensitive searching.
- Integrated search parameters with existing brand and category filters.
- Updated the frontend product API to pass search parameters to the backend.
- Integrated search functionality into the product listing interface.

## Development

### Production Build

```bash
cd frontend
npm run build
```

### Run Tests

```bash
cd frontend
npm test
```

These commands depend on the scripts configured in the frontend `package.json`.

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

This project includes the MIT License. Refer to the [LICENSE](LICENSE) file for the applicable terms and required copyright notices.

## Maintainer

**Divyansh Dev Mishra**

GitHub: [@divyansh3369](https://github.com/divyansh3369)
