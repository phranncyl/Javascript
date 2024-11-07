Here's a **README.md** file for your Git repository:

```markdown
# Lab3 - JS Frameworks

This project demonstrates simple HTTP operations (GET, POST, PUT, DELETE) using the Express.js framework in Node.js. It consists of three applications that showcase different types of requests, including sending HTML, JSON data, and performing CRUD operations.

## Project Structure

- **app1.js**: A basic Express app that handles a simple GET request, returning an HTML message.
- **app2.js**: An Express app that serves JSON data using the GET method.
- **app3.js**: An Express app demonstrating CRUD operations with POST, GET, PUT, and DELETE methods.
- **package.json**: Manages project dependencies and settings.
- **employees.json**: Sample JSON data containing employee information.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Lab3-JS-frameworks.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Lab3-JS-frameworks
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application using Nodemon:

   ```bash
   npm start
   ```

## Usage

### 1. app1.js - Basic GET Request

- Starts a server on `http://localhost:3000/`
- Handles a GET request at the root URL `/`, responding with an HTML message:
  - **Response**: `<h1>Hello, we are group11!</h1>`

### 2. app2.js - Serving JSON Data

- Uses data from `employees.json`
- Starts a server on `http://localhost:3000/`
- Handles a GET request at `/employees`, responding with JSON data:
  - **Response**: Array of employee objects in JSON format

### 3. app3.js - CRUD Operations

- Starts a server on `http://localhost:3000/`
- Handles CRUD operations on the `/crud` endpoint:
  - **POST** `/crud`: Returns a message indicating a Create operation.
  - **GET** `/crud`: Returns a message indicating a Read operation.
  - **PUT** `/crud`: Returns a message indicating an Update operation.
  - **DELETE** `/crud`: Returns a message indicating a Delete operation.

## Example Responses

- **GET** `/` (app1.js): `<h1>Hello, we are group11!</h1>`
- **GET** `/employees` (app2.js): JSON array of employee data
- **POST** `/crud` (app3.js): `"Create using post() method"`
- **GET** `/crud` (app3.js): `"Read using read() method"`
- **PUT** `/crud` (app3.js): `"Update using put() method"`
- **DELETE** `/crud` (app3.js): `"Delete using delete() method"`

## Dependencies

- **Express**: Framework for building web applications

## License

This project is licensed under the ISC License.

## Author

[Your Name]
```

This README explains your project structure, setup instructions, usage, and sample responses for each endpoint.
