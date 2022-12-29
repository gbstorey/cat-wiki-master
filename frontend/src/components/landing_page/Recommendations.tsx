import RecommendationItem from "./RecommendationItem";
import classes from "./Recommendations.module.css"
import MiniHorizontalRule from "../UI/MiniHorizontalRule";
import {useLoaderData} from "react-router-dom";
import {BreedName} from "../../util/types";

const Recommendations = () => {
    const nameData = useLoaderData() as BreedName[]
    const sortedByViews = nameData
        .filter(cat => cat.views)
        .sort((a, b) => {
        return b.views - a.views
    })
    console.log(sortedByViews)
    return (
        <section id={"recommendations"}>
            <div className={classes.container}>
                <div className={classes.contentContainer}>
                    <h2 className={classes.subHeader}>Most Searched Breeds</h2>
                    <MiniHorizontalRule />
                </div>
                <div className={classes.contentContainer}>
                    <h1 className={classes.header}>66+ Breeds For you to discover</h1>
                    <a href={"/"} className={classes.seeMoreLink}>
                        <h3 className={classes.seeMoreText}>See More </h3>
                        <i className={`fa-solid fa-arrow-right ${classes.seeMoreIcon}`}></i>
                    </a>
                </div>
                <div className={`${classes.contentContainer} ${classes.flexContainer}`}>
                {sortedByViews.slice(0, 4).map(cat => {
                    return <RecommendationItem key={cat.id} name={cat.name} imageUrl={cat.image.url}/>
                })}
                </div>
            </div>
        </section>
    );
}

export default Recommendations;