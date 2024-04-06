import connection from '../configs/db.js';

function Category(req, res) {
  connection.query('SELECT * FROM category', function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        status: 200,
        error: false,
        message: 'Successfully get all products category!',
        data: results,
      });
    }
  });
}

function findCategory(req, res) {
  connection.query('SELECT * FROM category WHERE id = ?', req.params.id, function (err, results, fields) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        status: 200,
        error: false,
        message: 'Successfully get products category!',
        data: results,
      });
    }
  });
}

function createCategory(req, res) {
  const { name } = req.body;
  connection.query('INSERT INTO category (name) values (?)', [name], function (err, results) {
    if (err) {
      console.log(err);
      res.status(400).json({
        status: 400,
        message: 'Error add new category!',
      });
    } else {
      res.status(200).json({
        status: 200,
        error: false,
        message: 'Successfully add new category!',
        data: req.body,
      });
    }
  });
}

function updateCategory(req, res) {
  const { name } = req.body;

  if (!name) {
    res.status(300).json({
      status: 300,
      error: true,
      message: 'Name needed for update!',
    });
  } else {
    connection.query('UPDATE category SET name = ? where id = ?', [name, req.params.id], function (err, results) {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          status: 200,
          error: false,
          message: 'Successfully update category data with id: ' + req.params.id,
          data: req.body,
        });
      }
    });
  }
}

function deleteCategory(req, res) {
  connection.query('DELETE from category WHERE id = ?', [req.params.id], function (err, results) {
    if (err) {
      console.log(err);
    } else {
      if (results.affectedRows > 0) {
        res.status(200).json({
          status: 200,
          error: false,
          message: 'Succesfully delele category data with id: ' + req.params.id,
        });
      } else {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Cannot delete category data with id: ' + req.params.id,
        });
      }
    }
  });
}

export { Category, findCategory, createCategory, updateCategory, deleteCategory };