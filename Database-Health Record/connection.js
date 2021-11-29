const Pool = require('pg').Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "howareyou@17",
    database: "health"
})

module.exports = pool
