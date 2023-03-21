// const express = require("express");
// const app = express();
// const cors = require("cors");
// const pool = require("./db");

// app.use(cors());
// app.use(express.json());

// const makeApp = (repository) => {
//   const app = express();
//   app.use(cors());
//   app.use(express.json());

//   app.get("/courses", async (req, res, next) => {
//     try {
//       const courses = await pool.query(
//         `SELECT name, description, price, image, buyLink FROM courses WHERE status ='active'`
//       );

//       res.json(courses.rows);
//     } catch (err) {
//       next(err);
//     }
//   });

//   return app;
// };

// module.exports = {
//   makeApp,
// };

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

// app.get("/courses", async (req, res, next) => {
//   try {
//     const courses = await pool.query(
//       `SELECT name, description, price, image, buyLink FROM courses WHERE status ='active'`
//     );
//     return res.status(200).json(courses.rows);
//   } catch (err) {
//     next(err);
//   }
// });

app.get("/courses", async (req, res, next) => {
  try {
    const courses = await pool.query(`SELECT * FROM courses`);
    res.json(courses.rows);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
