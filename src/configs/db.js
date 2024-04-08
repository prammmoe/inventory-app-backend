import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

// Using createPool instead of createConnection for data flexibility
const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default connection;