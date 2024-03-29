import express, { urlencoded, json } from "express";
import logger from "morgan";
import cors from "cors";

// Instantiate base app and port
const app = express();
const port = process.env.PORT || 5000;

// Import routing (controller will also implicitly imported in this routing)
import { productRoute } from "./src/routes/productRoute.js";
import { userRoute } from "./src/routes/userRoute.js";
import { categoryRoute } from "./src/routes/categoryRoute.js";

// Define using middleware function
app.use(logger("dev"));
app.use(urlencoded({ extended: true }));
app.use(json());

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
