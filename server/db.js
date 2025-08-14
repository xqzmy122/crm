const {Pool} = require('pg')

const pool = new Pool({
  user: "postgres",
  password: "1111",
  host: "localhost",
  port: 5432,
  database: "crm_db",
})

module.exports = pool