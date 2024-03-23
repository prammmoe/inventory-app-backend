import { home, notFound, login, register } from '../controllers/user.js';

export function userRoute(app) {
  app.route('/').get(home);
  app.route('/login').post(login);
  app.route('/register').post(register);
  app.route('*').get(notFound);
}
