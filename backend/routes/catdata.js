const express = require("express");
const router = express.Router();
const {getCatNames} = require("../controllers/catdata")

// /data/names => GET
router.get("/names", getCatNames);

module.exports = router;