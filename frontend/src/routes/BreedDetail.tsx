import classes from "./BreedDetail.module.css";
import { useLoaderData } from "react-router-dom"
import shortid from "shortid"

type Breed = {
  id: string;
  name: string;
  description: string;
  temperament: string;
  origin: string;
  life_span: string;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  grooming: number;
  intelligence: number;
  health_issues: number;
  social_needs: number;
  stranger_friendly: number;
  image: {
    url: string;
  };
  vcahospitals_url: string;
  cfa_url: string;
  vetstreet_url: string;
};
type Detail = {
  string: string;
  value: string | number;
};
type Data = {
  breedData: Breed,
  imageResponse: string[]
}

function constructDetailElements(details: Detail[]) {
  let elements = [];
  for (let detail of details) {
    elements.push(
      <p className={classes.detailBody} key={shortid.generate()}>
        <span className={classes.detailSpan}>{detail.string}</span>
        {detail.value}
      </p>
    );
  }
  return elements;
}

function constructAttributeElements(attributes: Detail[]) {
  let elements = [];
  for (let attribute of attributes) {
    let shapes = [];
    for (let i = 0; i < attribute.value; i++) {
      shapes.push(<div className={classes.shape} key={shortid.generate()}></div>);
    }
    for (let j = 0; j< 5-(+attribute.value); j++) {
      shapes.push(<div className={`${classes.shape} + ${classes.nullShape}`} key={shortid.generate()}></div>);
    }
    elements.push(
      <div className={classes.attrContainer} key={shortid.generate()}>
        <div className={classes.attrDetails}>
          <p className={classes.attrBody}>
            <span className={classes.detailSpan}>{attribute.string}</span>
          </p>
        </div>
        <div className={classes.shapeBox}>
          {shapes}
        </div>
      </div>
    );
  }
  return elements;
}

const BreedDetail = () => {
  function getBreedData() {
    return useLoaderData() as Data;
  }
  const data = getBreedData()
  console.log(data)
  const breed = data.breedData
  const imageUrls = data.imageResponse
  const details = [
    {
      string: "Temperament: ",
      value: breed.temperament,
    },
    {
      string: "Origin: ",
      value: breed.origin,
    },
    {
      string: "Life Span: ",
      value: breed.life_span,
    },
  ];
  const attributes = [
    {
      string: "Adaptability: ",
      value: breed.adaptability,
    },
    {
      string: "Affection Level: ",
      value: breed.affection_level,
    },
    {
      string: "Child Friendly: ",
      value: breed.child_friendly,
    },
    {
      string: "Grooming: ",
      value: breed.grooming,
    },
    {
      string: "Intelligence: ",
      value: breed.intelligence,
    },
    {
      string: "Health Issues: ",
      value: breed.health_issues,
    },
    {
      string: "Social Needs: ",
      value: breed.social_needs,
    },
    {
      string: "Stranger Friendly: ",
      value: breed.stranger_friendly,
    },
  ];
  return (
    <section className={classes.sectionContainer} id={breed.name}>
      <div className={classes.detailContainer}>
        <div className={classes.left}>
          <div className={classes.detailShape}>
          </div>
          <img
            className={classes.detailImage}
            src={breed.image.url}
            alt={breed.name}
          />
        </div>
        <div className={classes.right}>
          <h1 className={classes.detailHeader}>{breed.name}</h1>
          <h2 className={classes.detailSubHeader}>{breed.description}</h2>
          {constructDetailElements(details)}
          <div className={classes.attrContainer}>
            {constructAttributeElements(attributes)}
          </div>
        </div>
      </div>
      <h3 className={classes.photosHeader}>More Photos</h3>
      <div className={classes.morePhotosFlex}>
        {imageUrls.map(imageUrl => {
          return <img className={classes.morePhotosImage}
              src={imageUrl} alt={`${breed.name} Photo ${imageUrls.indexOf(imageUrl)}`}/>
        })}
      </div>
    </section>
  );
};

export default BreedDetail;
