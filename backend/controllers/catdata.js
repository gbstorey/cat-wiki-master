const axios = require("axios");
const dotenv = require('dotenv');
dotenv.config()

exports.getCatNames = (req, res) => {
  axios.defaults.headers.common["x-api-key"] = process.env.CAT_API_KEY;
  axios
    .get(process.env.CAT_ENDPOINT)
    .then((result) => {
      const data = result.data
      const names = data.map(cat => {
        return {id: cat.id, name: cat.name}
      })
      res.send(names)
    })
    .catch((err) => {
      res.send(err)
    });
};
