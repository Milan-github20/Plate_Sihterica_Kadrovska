const db = require("../database/database");

const prikaziSihtericuData = async (req, res) => {
  try {
    await db.query(`SELECT * FROM sihterica`, (error, response) => {
      if (error) return res.status(500).json(error);
      res.status(200).json(response);
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  prikaziSihtericuData: prikaziSihtericuData,
};
