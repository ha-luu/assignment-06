const { Pool } = require('pg')

const pool = new Pool({
  user: "haluu",
  host: "localhost",
  port: 5432,
  database: "haluu",
  password: ""
})

module.exports = {
  query: (text, params) => pool.query(text, params),
}