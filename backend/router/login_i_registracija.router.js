const express = require("express");
const login_i_registracijaController = require("../controller/login_i_registracija.controller");

const router = express.Router();

router.post("/novi_korisnik", login_i_registracijaController.registracija);
router.post("/prijava", login_i_registracijaController.prijava);
router.post("/provjera_tokena", login_i_registracijaController.provjeraTokena);
// router.post("/odjava", login_i_registracijaController.odjava);

module.exports = router;
