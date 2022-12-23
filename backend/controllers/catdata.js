const Breed = require("../models/breed");

exports.getCatNames = (req, res) => {
  Breed.find()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
        res.send(err);
    });
};

exports.getSingleBreed = (req, res) => {
    const {breedId} = req.query
    Breed.findOne({id: breedId})
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err);
        })
}
