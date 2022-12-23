import './Root.module.css'
import RootLayout from "../components/UI/RootLayout";
import Hero from "../components/landing_page/Hero";
import Recommendations from "../components/landing_page/Recommendations";
import AboutCats from "../components/landing_page/AboutCats";
import Footer from "../components/landing_page/Footer";
import classes from "./Root.module.css"

function Root() {

  return (
    <div className={classes.centralFrame}>
        <Hero />
        <Recommendations />
        <AboutCats />s
    </div>
  )
}

export default Root
