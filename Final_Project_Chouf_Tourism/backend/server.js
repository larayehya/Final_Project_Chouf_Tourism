const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const Routes = require("./routes/Routes");
dotenv.config();
const app = express();

//kl she app.use yaane kl she middleware bdna n3uzu
// Use CORS middleware
app.use(cors());

// Use body-parser middleware for JSON and URL-encoded request bodies
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// or
app.use(express.json());

// Routes
app.use("/api", Routes); // Assuming userRoutes handles user-related routes

app.listen(process.env.PORT, () => {
  //listen btshaghel lserver
  console.log(`Server is running on port ${process.env.PORT}`);
});