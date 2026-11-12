# Mern Shop — Full-Stack E-Commerce Application

A full-stack e-commerce web application built with React, Redux Toolkit, Material UI, Node.js, Express, and MongoDB.

The project provides a foundation for exploring common e-commerce workflows, frontend state management, REST API integration, authentication, and database operations.

## Tech Stack

**Frontend**
- React 18
- React Router
- Redux Toolkit and React Redux
- Material UI (MUI)
- Axios
- React Hook Form
- React Toastify

**Backend**
- Node.js
- Express.js
- MongoDB and Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- Cookie Parser
- Nodemailer

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

### 1. Clone the repository

```bash
git clone https://github.com/divyansh3369/Mern-Shop.git
cd Mern-Shop
```

### 2. Configure the backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory. Add the environment variables required by the backend configuration, using the names expected by the source code.

Typical configuration values may include:

```env
MONGO_URI=your_mongodb_connection_string
ORIGIN=http://localhost:3000
SECRET_KEY=your_secret_key
PRODUCTION=false
```

If email functionality is enabled, configure the required email variables as well. Never commit credentials, API keys, or real secrets.

Start the backend:

```bash
npm start
```

### 3. Configure the frontend

Open a second terminal:

```bash
cd frontend
npm install --legacy-peer-deps
```

Create a `.env` file in the `frontend` directory and set the API base URL expected by the application. For example, if the backend runs on port 8000:

```env
REACT_APP_BASE_URL=http://localhost:8000
```

Start the React development server:

```bash
npm start
```

Open `http://localhost:3000` in your browser.

**Note:** Environment variable names, API paths, database settings, and email configuration must match the implementation in the source code. The commands above assume the backend runs on port 8000.

## Development

Build the frontend for production:

```bash
cd frontend
npm run build
```

Run frontend tests:

```bash
cd frontend
npm test
```

## Security Notes

- Keep `.env` files and credentials out of version control.
- Use strong, unique secrets outside local development.
- Do not publish private database connection strings or email credentials.
- Review authentication, authorization, and input validation before deploying.

## Future Improvements

- Improve automated test coverage.
- Add clearer loading, empty, and error states.
- Strengthen input validation and API error handling.
- Improve responsive design and accessibility.
- Document API endpoints and deployment steps.

## License

This repository includes the MIT License. See the [LICENSE](LICENSE) file for its terms and required notices.

## Maintainer

**Divyansh Dev Mishra**

GitHub: [@divyansh3369](https://github.com/divyansh3369)
