const response = require("../configs/res.js");
const db = require("../configs/db");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const home = (req, res) => {
  response.ok("Welcome! Please login.", res);
};

const notFound = (req, res) => {
  res.send("404 Not Found!");
};

const login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.query(
    "SELECT * FROM users WHERE email = ?",
    email,
    function (err, results, fields) {
      if (err) {
        res.send({
          code: 400,
          failed: "error",
        });
      } else {
        if (res.length > 0) {
          if (res[0].password == password) {
            jwt.sign(
              { email, password },
              process.env.JWT_SECRET,
              { expiresIn: process.env.JWT_EXP },
              (err, token) => {
                console.log(token);
                console.log(process.env.JWT_SECRET);
                res.json({
                  code: 200,
                  success: "Login success",
                  token: token,
                });
              }
            );
          } else {
            res.send({
              code: 204,
              success: "Email and password does not match.",
            });
          }
        } else {
          res.send({
            code: 204,
            success: "Email and password needed.",
          });
        }
      }
    }
  );
};

const register = (req, res) => {
  const { username, password, email } = req.body;
  let valid = "'SELECT * FROM users email = '" + email + "'";
  db.query(valid, function (err, results, fields) {
    if (results.length > 0) {
      res.send({
        code: 400,
        message: "Error add data, username or email is already exists",
      });
    } else {
      db.query(
        "INSERT INTO users (username, password, email) values (?,?,?)",
        [username, password, email],
        function (err, results) {
          if (err) {
            console.log(err);
            res.status(400).json({
              status: 400,
              message: "Error add new users.",
            });
          } else {
            res.status(200).json({
              status: 200,
              error: false,
              message: "Register success.",
              data: req.body,
            });
          }
        }
      );
    }
  });
};

module.exports = { home, notFound, login, register };
