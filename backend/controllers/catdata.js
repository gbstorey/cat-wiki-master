const Breed = require("../models/breed");
const axios = require("axios");

exports.getCatNames = (req, res) => {
  Breed.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getSingleBreed = (req, res) => {
  const { breedId } = req.query;
  Breed.findOne({ id: breedId })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.getSingleBreedImages = (req, res) => {
  const { breedId } = req.query;
  const CAT_API_KEY = process.env.CAT_API_KEY;
  axios
    .get(
      `https://api.thecatapi.com/v1/images/search?limit=8&breed_ids=${breedId}&api_key=${CAT_API_KEY}`
    )
    .then((breedImages) => {
      const imageUrls = breedImages.data.map((breed) => {
        return breed.url;
      });
      res.send(imageUrls);
    })
      .catch(err => {
          res.send(err);
      });
};
