import axios from "axios";
import {LoaderFunctionArgs} from "react-router-dom";

const BreedsLoader = async () => {
  const data = await axios.get("http://localhost:3000/api/names");
  return data.data;
};

const SingleBreedLoader = async (request: LoaderFunctionArgs) => {
  const url = new URL(request.request.url);
  const breedId = url.searchParams.get("breedId");
  const data = await axios.get(`http://localhost:3000/api/breed/?breedId=${breedId}`)
  return data.data;
}


export {
  BreedsLoader,
  SingleBreedLoader
};
