const db = require("../database/database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registracija = async (req, res) => {
  //Provjera da li korisnik postoji u bazi
  try {
    await db.query(
      `SELECT email FROM login_i_registracija WHERE email = ?`,
      [req.body.email],
      async (error, response) => {
        if (error) return res.status(500).json(error);
        if (response.length)
          return res.status(409).json("Korisnik već postoji");

        //Kreiranje novog korisnika sa kriptovanom sifrom
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.sifra, salt);

        await db.query(
          `INSERT INTO login_i_registracija (ime, email, sifra) VALUES(?,?,?)`,
          [req.body.ime, req.body.email, hashedPassword],
          (error, response) => {
            if (error) return res.status(500).json(error);
            return res.status(200).json("Korisnik je uspješno kreiran");
          }
        );
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const prijava = async (req, res) => {
  //Provjera da li postoji korisnik u bazi

  await db.query(
    `SELECT * FROM login_i_registracija WHERE email = ?`,
    [req.body.email],
    async (error, response) => {
      if (error) return res.status(500).json(error);
      if (response.length === 0)
        return res.status(404).json("Korisnik nije pronađen");

      const checkPassword = bcrypt.compareSync(
        req.body.sifra,
        response[0].sifra
      );

      if (!checkPassword)
        return res.status(400).json("Korisničko ime ili šifra nisu ispravni");

      // Kreiranje jwt tokena sa istekom od 1 minut
      const token = jwt.sign(
        {
          id: response[0].id,
          ime: response[0].ime,
          email: response[0].email,
        },
        "secretkey"
      );

      //Vrati sve podatke o korisniku osim sifre
      const { sifra, ...others } = response[0];

      res
        .cookie("accessToken", token, {
          httpOnly: false,
          sameSite: "None",
          secure: true,
        })
        .status(200)
        .json({ accessToken: token });

      // const tokenA = req.cookies.others;

      console.log(others);
    }
  );
};

const provjeraTokena = async (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json("Niste prijavljeni");
  }

  try {
    const decoded = jwt.verify(token, "secretkey");
    req.user = decoded;
    next();
    console.log(decoded);
  } catch (error) {
    // console.log(error.name);
    if (error.name === "TokenExpiredError") {
      // Token je istekao, odjavite korisnika
      res.clearCookie("accessToken");
      return res.status(401).json("Token je istekao. Prijavite se ponovno");
    }
    return res.status(401).json("Token nije valjan");
  }
};

module.exports = {
  registracija: registracija,
  prijava: prijava,
  provjeraTokena: provjeraTokena,
};
