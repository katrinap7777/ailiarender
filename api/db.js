const { Client } = require("pg");

let client = null;
async function pool() {
  if (client !== null) {
    return client;
  }

  client = new Client({ connectionString: process.env.DATABASE_URL });

  await client.connect();

  return client;
}

// module.exports = get_db

// const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "postgres",
//   password: "POSTGRES_PASSWORD",
//   host: "db",
//   port: 5432,
//   database: "postgres",
//   connectionString: process.env.DATABASE_URL,
// });

// const pool = new Pool({
//   user: process.env."PGUSER",
//   password: process.env."PGPASSWORD",
//   host: process.env.PGHOST,
//   port: process.env.PGPORT,
//   database: process.env.PGDATABASE,
// });

// const { Pool } = require("pg");
// const types = require("pg").types;
// // pg won't cast by default as may lose precision.
// types.setTypeParser(1700, function (val) {
//   return parseFloat(val);
// });

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: process.env.DATABASE_URL
//     ? {
//         rejectUnauthorized: false,
//       }
//     : false,
// });

// module.exports = {
//   query: (text, params, callback) => {
//     return pool.query(text, params, callback);
//   },
//   end: () => {
//     pool.end();
//   },
// };

module.exports = pool;
