import classes from "./BreedDetail.module.css";
import { useLoaderData } from "react-router-dom";
import DetailsSection from "../components/breed_detail_page/DetailsSection";
import { Data } from "../util/types";

const BreedDetail = () => {
  function getBreedData() {
    return useLoaderData() as Data;
  }
  const data = getBreedData();
  console.log("Data", data)
  const breed = data.breedData;
  const imageUrls = data.imageResponse;
  return (
    <section className={classes.sectionContainer} id={breed.identifiers.name}>
      <div className={classes.detailContainer}>
        <div className={classes.left}>
          <div className={classes.detailShape}></div>
          <img
            className={classes.detailImage}
            src={breed.identifiers.imageUrl}
            alt={breed.identifiers.name}
          />
        </div>
        <DetailsSection
          identifiers={breed.identifiers}
          details={breed.details}
          attributes={breed.attributes}
        />
      </div>
      <h3 className={classes.photosHeader}>More Photos</h3>
      <div className={classes.morePhotosFlex}>
        {imageUrls.map((imageUrl) => {
          return (
            <img
              className={classes.morePhotosImage}
              src={imageUrl}
              alt={`${breed.identifiers.name} Photo ${imageUrls.indexOf(
                imageUrl
              )}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default BreedDetail;
