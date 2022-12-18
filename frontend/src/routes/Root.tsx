import './Root.css'
import Navbar from "../components/landing_page/Navbar";
import Hero from "../components/landing_page/Hero";
import Recommendations from "../components/landing_page/Recommendations";
import AboutCats from "../components/landing_page/AboutCats";
import Footer from "../components/landing_page/Footer";

function Root() {

  return (
    <>
        <Navbar />
        <Hero />
        <Recommendations />
        <AboutCats />
        <Footer />
    </>
  )
}

export default Root
