const {
  getAllProducts,
  findProducts,
  createProducts,
  updateProducts,
  deleteProducts,
  addReduce,
  IndexPage,
} = require("../controllers/product.js");
const verifyToken= require("../middleware/jwt.js");

const productRoute = (app) => {
  app.route("/").get(IndexPage);

  // For the POST method, apply JWT middleware before the Controller
  app.route("/products").get(getAllProducts).post(verifyToken, createProducts);

  app
    .route("/products/:id")
    .get(findProducts)
    .put(verifyToken, updateProducts)
    .delete(verifyToken, deleteProducts);

  app.route("/products/quantity/").get(verifyToken, addReduce);
};

module.exports = productRoute;
