const express = require("express");
const registracijaController = require("../controller/registracija.controller");

const router = express.Router();

router.post("/dodaj_registraciju", registracijaController.dodajRegistraciju);

module.exports = router;
