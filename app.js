import express, { urlencoded, json } from 'express';
import logger from 'morgan';
import cors from 'cors';
import { getAllProducts, findProducts, createProducts, updateProducts, deleteProducts, addReduce, IndexPage, notFound } from './src/controllers/product.js';

// Update other imports as needed (e.g., replace bodyParser with specific parsers)
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 5000;

// Controllers (assuming they are converted to ES modules as well)

// Routes (assuming they are converted to ES modules as well)
import { productRoute } from './src/routes/productRoute.js';
import { userRoute } from './src/routes/userRoute.js';
import { categoryRoute } from './src/routes/categoryRoute.js';

app.use(logger('dev'));
app.use(urlencoded({ extended: true })); // Assuming you're using express-body-parser
app.use(json());

const corsBaseUrl = 'http://localhost:3000';

app.use(
  cors({
    origin: corsBaseUrl,
    optionsSuccessStatus: 200,
  })
);

productRoute(app);
categoryRoute(app);
userRoute(app);

app.listen(port, () => {
  console.log(`Inventory App Backend is listening on port ${port}`);
});

// import express, { urlencoded, json } from 'express';
// import upload from './src/configs/multer.js';
// import pool from './src/configs/db.js';
// import cors from 'cors';
// // import { Product, getAllProducts, createProducts, updateProducts, deleteProducts } from './src/controllers/product.js';

// const app = express();
// const port = process.env.port || 5000;
// const corsBaseUrl = 'http://localhost:3000';

// app.use(
//   cors({
//     origin: corsBaseUrl,
//     optionsSuccessStatus: 200,
//   })
// );
// app.use(urlencoded({ extended: true }));
// app.use(json());

// // Main route
// app.get('/', (req, res) => {
//   res.send('<h1>Inventory App Backend</h1>');
// });

// // GET all barang
// app.get('/barang', (req, res) => {
//   pool.getConnection((err, connection) => {
//     if (err) throw err;
//     console.log(`connected as id ` + connection.threadId);
//     connection.query('SELECT * from barang', (err, rows) => {
//       connection.release();

//       if (!err) {
//         res.send(rows);
//       } else {
//         console.log(err);
//       }

//       console.log('The data from barang table are \n', rows);
//     });
//   });
// });

// // app.get('/barang', (req, res) => {
// //   pool.getConnection((err, connection) => {
// //     if (err) throw err;
// //     console.log(`connected as id ` + connection.threadId);
// //     Product(req, res);
// //     console.log(`The data from barang table are ${res.data}`);
// //   });
// // });

// // POST gambar
// app.post('/upload', upload.single('image'), (req, res) => {
//   if (req.file) {
//     const { filename } = req.file;

//     // Save filename to database
//     pool.query('INSERT INTO barang (gambar) VALUES (?)', [filename], (err, result) => {
//       if (err) {
//         res.json({
//           success: false,
//           message: 'Gagal menyimpan gambar ke database',
//         });
//       } else {
//         res.json({
//           success: true,
//           message: 'Gambar berhasil diunggah',
//           file: filename,
//         });
//       }
//     });
//   } else {
//     res.json({
//       success: 'false',
//       message: 'Gagal mengunggah file',
//     });
//   }
// });

// // POST barang
// app.post('/barang', upload.single('image'), (req, res) => {
//   if (req.file && req.body.id && req.body.nama && req.body.deskripsi) {
//     const { filename } = req.file;
//     const { id, nama, deskripsi } = req.body;

//     // Menyimpan data ke database
//     pool.query('INSERT INTO barang (id, nama, deskripsi, gambar) VALUES (?, ?, ?, ?)', [id, nama, deskripsi, filename], (err, result) => {
//       if (err) {
//         res.json({
//           success: false,
//           message: 'Gagal menyimpan data ke database',
//         });
//       } else {
//         res.json({
//           success: true,
//           message: 'Data berhasil disimpan',
//           file: filename,
//         });
//       }
//     });
//   } else {
//     res.json({
//       success: false,
//       message: 'Gagal mengunggah file atau data tidak lengkap',
//     });
//   }
// });

// // GET gambar
// app.get('/upload', (req, res) => {
//   pool.getConnection((err, connection) => {
//     if (err) throw err;
//     console.log(`connected as id ` + connection.threadId);
//     connection.query('SELECT gambar FROM barang', (err, rows) => {
//       connection.release();

//       if (!err) {
//         res.send(rows);
//       } else {
//         console.log(err);
//       }
//       console.log('The image are: \n', rows);
//     });
//   });
// });

// app.listen(port, () => {
//   console.log(`Inventory App Backend is listening on port ${port}`);
// });
