const { Pool } = require('pg');

// Connect to pool
const pool = new Pool({
  user: "postgres",
  database: "todos_db",
  // password: "",
  host: "localhost",
  port: "5432",
});

module.exports = pool;
