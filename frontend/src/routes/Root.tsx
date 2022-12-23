import './Root.module.css'
import Hero from "../components/landing_page/Hero";
import Recommendations from "../components/landing_page/Recommendations";
import AboutCats from "../components/landing_page/AboutCats";
import classes from "./Root.module.css"

function Root() {

  return (
    <div className={classes.centralFrame}>
        <Hero />
        <Recommendations />
        <AboutCats />
    </div>
  )
}

export default Root
