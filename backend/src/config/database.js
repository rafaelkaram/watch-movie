require("dotenv").config()

const dbName = process.env.DB_NAME; 
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

module.exports ={
  dialect: 'mysql',
  host: dbHost,
  username: dbUser,
  password: dbPassword,
  database: dbName,
  define: {
    timestamp: true,
    uderscored: true,
  }
}