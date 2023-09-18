const db = require("../database/database");

const dodajRegistraciju = async (req, res) => {
  try {
    await db.query(
      "INSERT INTO login_i_registracija (ime, email, sifra) VALUES(?,?,?)",
      [req.body.ime, req.body.email, req.body.sifra],
      (error, response) => {
        if (error) return res.status(500).json(error);
        return res.status(200).json(response);
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  dodajRegistraciju: dodajRegistraciju,
};
