// 1) Import the express module to set up a web server
import express from 'express';

// 2) Import the mongoose module for working with MongoDB
import mongoose from 'mongoose';

// 3) Import "dotenv" for environment variables
import dotenv from 'dotenv';

//Load environment variables from .env file
dotenv.config();

// Create an instance of an Express application and initialize it
const app = express();

// Define the port number where the server will listen for requests
const port = process.env.PORT || 3000;

// Retrieve MongoDB URI from environment variables
const mongoURI = process.env.MONGO_URI;


// Check if MongoDB URI exists in environment variables
if (!mongoURI) {
    // Error message in case of MongoDB URI not exist in environment variables. 
    console.error('MONGO_URI is not defined in environment variables.');
    
    // Exit the process if the MONGO_URI is missing
    process.exit(1); 
}

// MongoDB connection using async/await based on Mongoose documentation
async function main() {
    try {
        await mongoose.connect(mongoURI, {
            // To use new URL string parser
            useNewUrlParser: true,
            
            // To avoid deprecation warnings
            useUnifiedTopology: true,
        });
        //To show that the connection is established
        console.log('Connected to MongoDB Atlas');

    } catch (err) {
        //Showing error message in case of connection failed
        console.error('MongoDB connection error:', err);

        // Exit the process if the connection fails
        process.exit(1); 
    }
}

// Connect to the MongoDB database and handle any errors
main().catch(err => console.log('MongoDB connection error:', err));

//Middleware Setup (Handling JSON bodies)
// Parse incoming JSON payloads
app.use(express.json()); 

// Root Route ('/'): Define a route for the root URL
app.get('/', (req, res) => {
    res.send('MongoDB, Express, and Node.js are working!');
});

app.use((err, req, res, next) => {
    //logs the error stack trace to the console
     console.error(err.stack);
    
     //sends a response to the client with an HTTP status code of 500
     res.status(500).send('Something broke!');
});

// Start the Express server, listening on the specified port (3000)
app.listen(port, () => {
    // Log a message when the server is running
    console.log(`Server running at http://localhost:${port}/`);
}).on('error', (err) => {
    // Log server errors if any
    console.error('Error starting server:', err);
});
