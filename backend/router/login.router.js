const express = require("express");
const loginController = require("../controller/login.controller");

const router = express.Router();

router.post("/prikazi_pocetnu_stranicu", loginController.prikaziLoginStranicu);
router.get("/povuci_korisnicko_ime", loginController.povuciKorisnickoIme);

module.exports = router;
