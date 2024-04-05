import mysql from "mysql";

// Using createPool instead of createConnection for data flexibility
const connection = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "pram",
  password: "IkhwanPramuditha05!",
  database: "inventorydb",
});

export default connection;