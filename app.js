const express = require("express");
const logger = require("morgan");
const cors = require("cors");

// Instantiate base app and port
const app = express();
const port = process.env.PORT || 5000;

// Import routing (controller will also implicitly imported in this routing)
const productRoute = require("./src/routes/productRoute.js");
const userRoute = require("./src/routes/userRoute.js");
const categoryRoute = require("./src/routes/categoryRoute.js");

// Define using middleware function
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to front-end using CORS
const corsBaseUrl = process.env.PORT || 3000;

// CORS middleware
app.use(
  cors({
    origin: corsBaseUrl,
    optionsSuccessStatus: 200,
  })
);

// Define routing
productRoute(app);
categoryRoute(app);
userRoute(app);

app.listen(port, () => {
  console.log(`Inventory App Backend is listening on http://localhost:${port}`);
});

module.exports = app;