import RecommendationItem from "./RecommendationItem";
import classes from "./Recommendations.module.css"
import MiniHorizontalRule from "../UI/MiniHorizontalRule";
const DUMMY_CATS = [
    {
        id: 1,
        name: 'Bengal',
        imageUrl: 'https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Bengal.1.jpg?h=1f9aeeea&itok=-betxrGH'
    },
    {
        id: 2,
        name: 'Savannah',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Savannah_Cat_portrait.jpg/1200px-Savannah_Cat_portrait.jpg'
    },
    {
        id: 3,
        name: 'Norwegian Forest Cat',
        imageUrl: 'https://www.thesprucepets.com/thmb/TxIPoTL58BiFEMblaWfBAnGzz9w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/norwegian-forest-cat-4170085-fe84aa86023446c4b64236ddfbdefd2b.jpg'
    },
    {
        id: 4,
        name: 'Selkirk Rex',
        imageUrl: 'https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/cat-care/images/selkirk-rex-on-brown-background.jpg'
    },
]

const Recommendations = () => {
    return (
        <section id={"recommendations"}>
            <div className={classes.container}>
                <div className={classes.contentContainer}>
                    <h2>Most Searched Breeds</h2>
                    <MiniHorizontalRule />
                </div>
                <div className={classes.contentContainer}>
                    <h1>66+ Breeds For you to discover</h1>
                    <a href={"/"}>
                        <h3>See More </h3>
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
                <div className={`${classes.contentContainer} ${classes.flexContainer}`}>
                {DUMMY_CATS.map(cat => {
                    return <RecommendationItem key={cat.id} name={cat.name} imageUrl={cat.imageUrl}/>
                })}
                </div>
            </div>
        </section>
    );
}

export default Recommendations;