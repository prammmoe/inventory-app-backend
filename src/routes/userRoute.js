const { home, notFound, login, register } = require("../controllers/user.js");

const userRoute = (app) => {
  app.route("/").get(home);
  app.route("/login").post(login);
  app.route("/register").post(register);
  app.route("*").get(notFound);
};

module.exports = userRoute;
