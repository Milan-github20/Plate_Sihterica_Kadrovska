const db = require("../database/database");

const prikaziLoginStranicu = async (req, res) => {
  try {
    await db.query(
      "SELECT * from login_i_registracija WHERE email=? AND sifra=?",
      [req.body.email, req.body.sifra],
      (error, response) => {
        if (error) {
          return res.status(500).json("Greska");
        } else if (response.length > 0) {
          req.session.korisnik = {
            korisnicko_ime: response[0].ime,
            sifra: response[0].sifra,
          };
          return res.status(200).json({
            status: "Uspjesno",
            korisnicko_ime: response[0].ime,
            sifra: response[0].sifra,
          });
        } else {
          return res.status(401).json("Neuspjelo");
        }
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const povuciKorisnickoIme = async (req, res) => {
  try {
    await db.query(
      `SELECT ime, sifra FROM login_i_registracija`,
      (error, response) => {
        if (error) return res.status(500).json(error);
        res.status(200).json(response);
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  prikaziLoginStranicu: prikaziLoginStranicu,
  povuciKorisnickoIme: povuciKorisnickoIme,
};
