import { Category, findCategory, createCategory, updateCategory, deleteCategory } from '../controllers/category.js';
import { verifyToken } from '../middleware/jwt.js'; // Import the middleware function

export function categoryRoute(app) {
  app.route('/category').get(Category);
  app.route('/category/:id').get(findCategory);
  app.route('/category').post(verifyToken, createCategory);
  app.route('/category/:id').put(verifyToken, updateCategory);
  app.route('/category/:id').delete(verifyToken, deleteCategory);
}
