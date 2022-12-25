import axios from "axios";
import {defer, LoaderFunctionArgs} from "react-router-dom";

const BreedsLoader = async () => {
  const data = await axios.get("http://localhost:3000/api/names");
  return data.data;
};

const SingleBreedLoader = (request: LoaderFunctionArgs) => {
  const url = new URL(request.request.url);
  const breedId = url.searchParams.get("breedId");
  const breedResponse = axios.get(`http://localhost:3000/api/breed/?breedId=${breedId}`)
  const imageResponse = axios.get(`http://localhost:3000/api/breedImages/?breedId=${breedId}`)
  return defer({
      breedData: breedResponse,
      imageResponse: imageResponse
  });
}


export {
  BreedsLoader,
  SingleBreedLoader
};
