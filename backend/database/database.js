const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "plate_sihta_kadrovska",
});

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Uspjesna konekcija");
  }
});

module.exports = db;
