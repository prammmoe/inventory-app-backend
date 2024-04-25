const {
  Category,
  findCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category.js");
const verifyToken = require("../middleware/jwt.js");

const categoryRoute = (app) => {
  app.route("/categories").get(Category);
  app.route("/categories/:id").get(findCategory);
  app.route("/categories").post(verifyToken, createCategory);
  app.route("/categories/:id").put(verifyToken, updateCategory);
  app.route("/categories/:id").delete(verifyToken, deleteCategory);
};

module.exports = categoryRoute;
