const {
  Category,
  findCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.js");
const verifyToken = require("../middleware/jwt.js");

const categoryRoute = (app) => {
  app.route("/categories").get(Category).post(verifyToken, createCategory);
  app
    .route("/categories/:id")
    .get(findCategory)
    .put(verifyToken, updateCategory)
    .delete(verifyToken, deleteCategory);
};

module.exports = categoryRoute;