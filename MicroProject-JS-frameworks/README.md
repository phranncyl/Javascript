# Prime Auto Hub

Prime Auto Hub is a car inventory web application that displays car details such as make, model, price, year, and image. It uses a REST API to serve car data stored in a JSON file and dynamically renders the data on the webpage.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Overview

This project demonstrates how to fetch and display car data from a backend API using asynchronous JavaScript. The data is stored in a JSON file and served via an Express server running locally. Users can click a button to load car information dynamically into an HTML table on the `API Demo` page.

## Features

- Display car inventory with details such as ID, make, model, price, year, and image.
- Fetch car data asynchronously using JavaScript's `fetch` API and display it in a table format.
- API endpoint for car data (`/api/cars`) using Express.
- Static homepage with navigation and an API demo.

## Technologies

This project was built with:

- **Node.js** and **Express** for backend API.
- **JavaScript (ES6)** with `async/await` for data fetching.
- **HTML** and **CSS** for frontend design.
- **JSON** to store car data.

## Setup

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/microproject-js-frameworks.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd microproject-js-frameworks
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

5. **View the application:**

   Open `http://localhost:3000` in your browser to access the API health check page, or go to `http://localhost:3000/website` to view the static website.

## Usage

1. **API Endpoint**  
   Access the car data API at `http://localhost:3000/api/cars`.

2. **Frontend Interaction**  
   Navigate to `api.html` and click the **Get Car Data With Async/Await** button to fetch and display car data in a table format.

## File Structure

Here's an overview of the core files and their purposes:

- **app.js**  
  The main server file that initializes the Express application, sets up routes, and serves static files.

- **script.js**  
  Contains JavaScript code that fetches car data from the backend API and displays it in a dynamically generated HTML table.

- **api.html**  
  The API demo page where car data is displayed in a table. Contains a button to fetch data using asynchronous JavaScript.

- **public/css/styles.css**  
  The stylesheet for styling the application, including layout and table styling.

- **data/cars.json**  
  JSON file containing car data used by the Express server to serve data via an API endpoint.

## Future Enhancements

- **External API Integration**  
  Replace the local JSON file with an external API to fetch real-time car data for better scalability.

- **Enhanced Search and Filter**  
  Add search and filter functionality to help users browse car listings more efficiently.

## License

This project is licensed under the ISC License.
```

Make sure to copy and paste this directly into your `README.md` file. It should render properly on GitHub or any Markdown viewer.
