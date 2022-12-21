import classes from "./AboutCats.module.css"
import MiniHorizontalRule from "../UI/MiniHorizontalRule";

const aboutHeadline = "Why should you have a cat?"
const aboutParagraph = "Having a cat around you can actually trigger the release of calming chemicals " +
    "in your body which lower your stress and anxiety levels."

const AboutCats = () => {
    return (
        <div className={classes.row}>
            <div className={`${classes.contentContainer} ${classes.aboutBlock}`}>
                <MiniHorizontalRule />
                <h1 className={classes.header}>{aboutHeadline}</h1>
                <p className={classes.body}>{aboutParagraph}</p>
                <a href={"/"} className={classes.link}>
                    <h3 className={classes.linkText}>Read More </h3>
                    <i className="fa-solid fa-arrow-right"></i>
                </a>
            </div>
                <div className={classes.column}>
                    <img className={classes.catImage2} src={"/images/about_cat2.png"} alt="image of cat"/>
                    <img className={classes.catImage1} src={"/images/about_cat1.png"} alt="image of cat"/>
                </div>
                <div className={classes.column}>
                    <img className={classes.catImage3} src={"/images/about_cat3.png"} alt="image of cat"/>
                </div>
        </div>
    );
}

export default AboutCats;