import mysql from 'mysql';

// Using createPool instead of createConnection for data changing flexibility
const connection = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'inventorydb',
});

export default connection;
