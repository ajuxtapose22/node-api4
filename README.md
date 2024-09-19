About Me - Node Project 4
This project is a basic API built using Node.js and Express, designed to demonstrate a simple server setup. It handles HTTP requests and provides a basic API endpoint to confirm that the server is functioning.

Key Features:
Express.js: Used as the core framework for handling routing and middleware.
CORS: Configured to handle cross-origin resource sharing for allowing requests from different domains.
dotenv: Used to load environment variables from a .env file.
Error Handling: A custom error handler that returns error messages and stack traces when the server encounters an issue.
API Endpoints:
GET /api/hello: Returns a JSON response { message: "api is working" } to verify that the API is functional.
*: A fallback route that returns a simple HTML message when a non-existing route is accessed.
