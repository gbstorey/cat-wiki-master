const Breed = require("../models/breed");

exports.getCatNames = (req, res) => {
  Breed.find()
    .then((data) => {
      const breeds = data.map((cat) => {
          const {id, name, vcahospitals_url: link} = cat;
          return {id, name, link};
      });
      res.send(breeds);
    })
    .catch((err) => {
        res.send(err);
    });
};
