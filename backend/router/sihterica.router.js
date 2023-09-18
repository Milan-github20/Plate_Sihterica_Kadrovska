const express = require("express");
const sihtericaController = require("../controller/sihterica.controller");

const router = express.Router();

router.get("/prikazi_sihtericu", sihtericaController.prikaziSihtericuData);

module.exports = router;
