import classes from "./BreedDetail.module.css";
import { Await, useLoaderData } from "react-router-dom";
import DetailsSection from "../components/breed_detail_page/DetailsSection";
import { Suspense } from "react";
import {BeatLoader} from "react-spinners";

const BreedDetail = () => {
  const res = useLoaderData() as any;
  return (
    <section className={classes.sectionContainer}>
      <Suspense fallback={
        <div className={classes.loadingContainer}>
          <BeatLoader/>
        </div>
      }>
        <Await
          resolve={res.breedData}
          errorElement={<p>Error loading data.</p>}
        >
          {(breedData) => (
            <>
              <div className={classes.detailContainer}>
                <div className={classes.left}>
                  <div className={classes.detailShape}></div>
                  <img
                    className={classes.detailImage}
                    src={breedData.data.identifiers.imageUrl}
                    alt={breedData.data.identifiers.name}
                  />
                </div>
                <DetailsSection
                  identifiers={breedData.data.identifiers}
                  details={breedData.data.details}
                  attributes={breedData.data.attributes}
                />
              </div>
              <h3 className={classes.photosHeader}>More Photos</h3>
            </>
          )}
        </Await>
        <Await
            resolve={res.imageResponse}
            errorElement={<p>Error loading data.</p>}
        >
          {(imageResponse) => (
              <div className={classes.morePhotosFlex}>
                {imageResponse.data.map((imageUrl: string) => {
                  return (
                      <img
                          className={classes.morePhotosImage}
                          src={imageUrl}
                          alt={`Photo ${imageResponse.data.indexOf(imageUrl)}`}
                      />
                  );
                })}
              </div>
          )}
        </Await>
      </Suspense>
    </section>
  );
};

export default BreedDetail;
