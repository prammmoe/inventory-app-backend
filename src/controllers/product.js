const response = require("../res.js");
const db = require("../configs/db");

const Product = (req, res) => {
  db.query("SELECT * from products", function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        status: 200,
        error: false,
        message: "Successfully get all products data!",
        data: results,
      });
    }
  });
};

const getAllProducts = (req, res) => {
  var sort = req.query.sort || "ASC";
  var sortBy = req.params.sortBy || "id";
  var limit = req.query.limit || 8;
  var page = (req.query.page - 1) * limit || 0;
  const search = `%${req.query.search}%`;

  var query =
    "SELECT products.id, products.name, description, image, category.name as category, quantity, date_added, date_update FROM products INNER JOIN category on category.id = products.id_category";

  if (req.query.search) {
    db.query(
      query +
        `WHERE products.name LIKE ?` +
        ` ORDER BY ${sortBy} ${sort} LIMIT ${page}, ${limit}`,
      search,
      function (err, results) {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            status: 200,
            error: false,
            message: "Successfully get product data!",
            data: results,
          });
        }
      }
    );
  } else {
    db.query(
      query + ` ORDER BY ${sortBy} ${sort} LIMIT ${page}, ${limit}`,
      function (err, results) {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            status: 200,
            error: false,
            message: "Successfully get all products data!",
            data: results,
          });
        }
      }
    );
  }
};

const findProducts = (req, res) => {
  db.query(
    "SELECT id, name, description, image, (select name from category where products.id_category = category.id) as category, quantity, date_added, date_update from products WHERE id = ?",
    req.params.id,
    function (err, results, fields) {
      if (err) {
        console.log(err);
      } else {
        if (results.length > 0) {
          res.status(200).json({
            status: 200,
            error: false,
            message: "Successfully get single product data.",
            data: results,
          });
        } else {
          res.status(400).json({
            status: 400,
            error: true,
            message: "No data found",
            data: results,
          });
        }
      }
    }
  );
};

const createProducts = (req, res) => {
  const { name, description, image, id_category, quantity } = req.body;
  const date = new Date();

  if (!name || !description || !image || !id_category || !quantity) {
    res.status(300).json({
      status: 300,
      error: true,
      message: "The values cant be null!",
    });
  } else {
    db.query(
      "INSERT INTO products (name, description, image, id_category, quantity, date_added, date_update) values (?, ?, ?, ?, ?, ?, ?)",
      [name, description, image, id_category, quantity, date, date],
      function (err, results) {
        if (err) {
          console.log(err);
          res.status(400).json({
            status: 400,
            message: "Error adding data!",
          });
        } else {
          res.status(200).json({
            status: 200,
            error: false,
            message: "Successfully added new product!",
            data: req.body,
          });
        }
      }
    );
  }
};

const updateProducts = (req, res) => {
  const { name, description, image, id_category, quantity, date } = req.body;

  if (!name || !description || !image || !id_category || !quantity) {
    res.status(300).json({
      status: 300,
      error: true,
      message: "Field needed for an update!",
    });
  } else {
    db.query(
      "UPDATE products SET name = ?, description = ?, image = ?, id_category = ?, quantity = ?, date_update = ?, where id = ?",
      [name, description, image, id_category, quantity, date, req.params.id],
      function (err, results) {
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({
            status: 200,
            error: false,
            message:
              "Successfully update products data with id: " + req.params.id,
            data: req.body,
          });
        }
      }
    );
  }
};

const deleteProducts = (req, res) => {
  db.query(
    "DELETE from products WHERE id = ?",
    [req.params.id],
    function (err, results) {
      if (err) {
        console.log(err);
      } else {
        if (results.affectedRows > 0) {
          res.status(200).json({
            status: 200,
            error: false,
            message:
              "Successfully delete product data with id: " + req.params.id,
          });
        } else {
          res.status(400).json({
            status: 400,
            error: true,
            message: "Data with id : " + req.params.id + "not found",
          });
        }
      }
    }
  );
};

const addReduce = (req, res) => {
  const id = req.body.id;
  const act = req.body.act;
  const value = req.body.value;

  if (act == "add") {
    var query = `UPDATE products SET quantity = quantity+${value} WHERE +${id}`;
  } else if (act == "reduce") {
    var query = `UPDATE products SET quantity = quantity-${value} WHERE +${id} AND quantity >= ${value}`;
  }
  db.query(query, [req.params.id], function (err, results) {
    if (err) {
      console.log(err);
    } else {
      if (results.affectedRows == 0) {
        res.status(350).json({
          status: 350,
          error: true,
          message: "Value cannot be less than quantity: " + req.body.id,
          data: results,
        });
      } else {
        res.status(200).json({
          status: 200,
          error: false,
          message: "Successfully change quantity with id:" + req.body.id,
        });
      }
    }
  });
};

const IndexPage = (req, res) => {
  response("Hello, welcome!", res);
};

const notFound = (req, res) => {
  res.send("404 Not Found!");
};

module.exports = {
  Product,
  getAllProducts,
  findProducts,
  createProducts,
  updateProducts,
  deleteProducts,
  addReduce,
  IndexPage,
  notFound,
};
