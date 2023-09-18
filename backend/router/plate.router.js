const express = require("express");
const plateContoller = require("../controller/plate.controller");

const router = express.Router();

router.get("/prikazi_plate", plateContoller.prikaziPlateData);

module.exports = router;
