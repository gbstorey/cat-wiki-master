import axios from "axios";
import {LoaderFunctionArgs} from "react-router-dom";

const BreedsLoader = async () => {
  const data = await axios.get("http://localhost:3000/api/names");
  return data.data;
};

const SingleBreedLoader = async (request: LoaderFunctionArgs) => {
  const url = new URL(request.request.url);
  const breedId = url.searchParams.get("breedId");
  const breedResponse = await axios.get(`http://localhost:3000/api/breed/?breedId=${breedId}`)
  const imageResponse = await axios.get(`http://localhost:3000/api/breedImages/?breedId=${breedId}`)
  console.log(breedResponse)
  console.log(imageResponse)
  return {
    breedData: breedResponse.data,
    imageResponse: imageResponse.data
  };
}


export {
  BreedsLoader,
  SingleBreedLoader
};
