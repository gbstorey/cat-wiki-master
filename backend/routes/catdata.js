const express = require("express");
const router = express.Router();
const {getCatNames, getSingleBreed, getSingleBreedImages} = require("../controllers/catdata")

// /data/names => GET
router.get("/names", getCatNames);
router.get("/breed", getSingleBreed);
router.get("/breedImages", getSingleBreedImages)

module.exports = router;