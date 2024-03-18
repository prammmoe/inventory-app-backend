import { getAllProducts, findProducts, createProducts, updateProducts, deleteProducts, addReduce, IndexPage } from '../controllers/product.js';
import { verifyToken } from '../middleware/jwt.js'; // Import the middleware function

export function productRoute(app) {
  app.route('/').get(IndexPage);

  app.route('/products').get(getAllProducts).post(verifyToken, createProducts); // Apply middleware before routes

  app
    .route('/products/:id')
    .get(findProducts)
    .put(verifyToken, updateProducts) // Apply middleware before routes
    .delete(verifyToken, deleteProducts); // Apply middleware before routes

  app.route('/products/quantity/').get(verifyToken, addReduce); // Apply middleware before route
}
