import classes from "./RecommendationItem.module.css"

interface catRecommendation {
    name: string;
    imageUrl: string;
}

const RecommendationItem = ({name, imageUrl}:catRecommendation) => {
    return (
      <div>
          <img className={classes.catImage} src={imageUrl} alt={name}/>
          <h2 className={classes.catName} >{name}</h2>
      </div>
    );
}

export default RecommendationItem;