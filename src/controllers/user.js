import dotenv from 'dotenv';

dotenv.config();
import response from '../res.js';
import connection from '../configs/db.js';
import jwt from 'jsonwebtoken';

function home(req, res) {
  response.ok('Welcome! Please login.', res);
}

function notFound(req, res) {
  res.send('404 Not Found!');
}

function login(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  connection.query('SELECT * FROM users WHERE email = ?', email, function (err, results, fields) {
    if (err) {
      res.send({
        code: 400,
        failed: 'error',
      });
    } else {
      if (res.length > 0) {
        if (res[0].password == password) {
          jwt.sign({ email, password }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXP }, (err, token) => {
            console.log(token);
            console.log(process.env.JWT_SECRET);
            res.json({
              code: 200,
              success: 'Login success',
              token: token,
            });
          });
        } else {
          res.send({
            code: 204,
            success: 'Email and password does not match.',
          });
        }
      } else {
        res.send({
          code: 204,
          success: 'Email and password needed.',
        });
      }
    }
  });
}

function register(req, res) {
  const { username, password, email } = req.body;
  let valid = "'SELECT * FROM users email = '" + email + "'";
  connection.query(valid, function (err, results, fields) {
    if (results.length > 0) {
      res.send({
        code: 400,
        message: 'Error add data, username or email is already exists',
      });
    } else {
      connection.query('INSERT INTO users (username, password, email) values (?,?,?)', [username, password, email], function (err, results) {
        if (err) {
          console.log(err);
          res.status(400).json({
            status: 400,
            message: 'Error add new users.',
          });
        } else {
          res.status(200).json({
            status: 200,
            error: false,
            message: 'Register success.',
            data: req.body,
          });
        }
      });
    }
  });
}

export { home, notFound, login, register };