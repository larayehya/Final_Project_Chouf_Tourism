// Import required packages
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

// Create an instance of Express
const app = express();

// Middleware for enabling CORS
app.use(cors());
app.use(express.json());
// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define a sample route
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// Get the PORT environment variable, or default to 3000
// const port = process.env.PORT || 3000;
