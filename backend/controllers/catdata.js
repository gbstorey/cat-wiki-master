const Breed = require("../models/breed");

exports.getCatNames = (req, res) => {
  Breed.find()
    .then((data) => {
      const breeds = data.map((cat) => {
          const {id, name, vcahospitals_url, cfa_url, vetstreet_url} = cat;
          return {id, name, vcahospitals_url, cfa_url, vetstreet_url};
      });
      res.send(breeds);
    })
    .catch((err) => {
        res.send(err);
    });
};
