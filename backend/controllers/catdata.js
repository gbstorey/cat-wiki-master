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
  Breed.findOne({ id: breedId }).lean()
    .then(({
             adaptability,
             affection_level,
             cfa_url,
             child_friendly,
             description,
             grooming,
             health_issues,
             id,
             image,
             intelligence,
             life_span,
             name,
             origin,
             social_needs,
             stranger_friendly,
             temperament,
             vcahospitals_url,
             vetstreet_url
           }) => {
      const imageUrl = image.url;
      console.log(origin)
      const identifiers = {
        id: id,
        name: name,
        description: description,
        imageUrl,
        vcahospitals_url: vcahospitals_url,
        cfa_url: cfa_url,
        vetstreet_url: vetstreet_url,
      };
      const details = [
        {
          string: "Temperament: ",
          value: temperament,
        },
        {
          string: "Origin: ",
          value: origin,
        },
        {
          string: "Life Span: ",
          value: life_span,
        },
      ];
      const attributes = [
        {
          string: "Adaptability: ",
          value: adaptability,
        },
        {
          string: "Affection Level: ",
          value: affection_level,
        },
        {
          string: "Child Friendly: ",
          value: child_friendly,
        },
        {
          string: "Grooming: ",
          value: grooming,
        },
        {
          string: "Intelligence: ",
          value: intelligence,
        },
        {
          string: "Health Issues: ",
          value: health_issues,
        },
        {
          string: "Social Needs: ",
          value: social_needs,
        },
        {
          string: "Stranger Friendly: ",
          value: stranger_friendly,
        },
      ];
      console.log("DATA", { identifiers, details, attributes });
      res.send({ identifiers, details, attributes });
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
    .catch((err) => {
      res.send(err);
    });
};
