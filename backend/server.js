const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "plate_sihta_kadrovska",
});

app.get("/", (re, res) => {
  return res.json("from asdadsasdasdasd");
});

app.get("/sihterica", (req, res) => {
  const sql = "SELECT * FROM sihterica";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/plate", (req, res) => {
  const sql = "SELECT * FROM plate";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.get("/kadrovska", (req, res) => {
  const sql = "SELECT * FROM kadrovska";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("Listening");
});
