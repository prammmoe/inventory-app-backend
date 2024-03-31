import { getAllProducts, findProducts, createProducts, updateProducts, deleteProducts, addReduce, IndexPage } from '../controllers/product.js';
import { verifyToken } from '../middleware/jwt.js';

export function productRoute(app) {
  app.route('/').get(IndexPage);

  // For the POST method, apply JWT middleware before the Controller
  app.route('/products').get(getAllProducts).post(verifyToken, createProducts); 

  app
    .route('/products/:id')
    .get(findProducts)
    .put(verifyToken, updateProducts) 
    .delete(verifyToken, deleteProducts); 

  app.route('/products/quantity/').get(verifyToken, addReduce); 
}
