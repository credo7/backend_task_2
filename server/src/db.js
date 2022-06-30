const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.POSTGRES_USER || "admin",
  password: process.env.POSTGRES_PASSWORD || "admin1234",
  host: process.env.POSTGRES_HOST || "db",
  port: 5432,
  database: process.env.POSTGRES_DB || "cinema",
});

module.exports = pool;
