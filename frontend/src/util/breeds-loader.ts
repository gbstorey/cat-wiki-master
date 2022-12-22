import axios from "axios";

const BreedsLoader = async () => {
  const data = await axios.get("http://localhost:3000/api/names");
  return data.data;
};

export default BreedsLoader;
