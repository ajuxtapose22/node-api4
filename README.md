# About Me - Node Project 4

This project is a basic API built using **Node.js** and **Express**, designed to demonstrate a simple server setup. It handles HTTP requests and provides a basic API endpoint to confirm that the server is functioning.

## Key Features:
- **Express.js**: Used as the core framework for handling routing and middleware.
- **CORS**: Configured to handle cross-origin resource sharing for allowing requests from different domains.
- **dotenv**: Used to load environment variables from a `.env` file.
- **Error Handling**: A custom error handler that returns error messages and stack traces when the server encounters an issue.

## API Endpoints:
- `GET /api/hello`: Returns a JSON response `{ message: "api is working" }` to verify that the API is functional.
- `*`: A fallback route that returns a simple HTML message when a non-existing route is accessed.

## How to Run:
1. Ensure that `Node.js` is installed on your machine.
2. Install dependencies by running `npm install`.
3. Create a `.env` file with a `PORT` variable to set your server port, or it will default to `9000`.
4. Run the server using `node index.js` or `nodemon` if installed.
5. The server will be live at `http://localhost:9000`, or the specified port in the `.env` file.
