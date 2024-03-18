import pool from './src/configs/db.js';

const getAllBarang = (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ` + connection.threadId);
    connection.query('SELECT * from barang', (err, rows) => {
      connection.release();

      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }

      console.log('The data from barang table are \n', rows);
    });
  });
};

const getGambar = (app, pool) => {
  app.get('/upload', (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) throw err;
      console.log(`connected as id` + connection.threadId);
      connection.query('SELECT gambar FROM barang', (err, rows) => {
        connection.release();

        if (!err) {
          res.send(rows);
        } else {
          console.log(err);
        }
        console.log('The image are: \n', rows);
      });
    });
  });
};

const postBarang = (app, pool) => {
  app.post('/barang', upload.single('image'), (req, res) => {
    if (req.file && req.body.id && req.body.nama && req.body.deskripsi) {
      const { filename } = req.file;
      const { id, nama, deskripsi } = req.body;

      pool.getConnection((err, connection) => {
        if (err) {
          return res.json({
            success: false,
            message: 'Gagal terhubung ke database',
          });
        }

        try {
          console.log(`connected as id ${connection.threadId}`);
          connection.query('INSERT INTO barang (id, nama, deskripsi, gambar) VALUES (?, ?, ?, ?)', [id, nama, deskripsi, filename], (err, result) => {
            if (err) {
              res.json({
                success: false,
                message: 'Gagal menyimpan data ke database',
                error: err.message, // Menambah detail error
              });
            } else {
              res.json({
                success: true,
                message: 'Data berhasil disimpan',
                file: filename,
              });
            }
          });
        } finally {
          connection.release();
          console.log('The data inserted into barang table is \n', { id, nama, deskripsi, filename });
        }
      });
    } else {
      res.json({
        success: false,
        message: 'Gagal mengunggah file',
      });
    }
  });
};
