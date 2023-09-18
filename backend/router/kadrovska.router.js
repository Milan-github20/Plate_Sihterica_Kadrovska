const express = require("express");
const kadrovskaController = require("../controller/kadrovska.controller");

const router = express.Router();

router.get("/prikazi_kadrovsku", kadrovskaController.prikaziKadrovskuData);

module.exports = router;
