const express = require("express");
const router = express.Router();
const {getCatNames, getSingleBreed} = require("../controllers/catdata")

// /data/names => GET
router.get("/names", getCatNames);
router.get("/breed", getSingleBreed);

module.exports = router;