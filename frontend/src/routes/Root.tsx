import './Root.css'
import RootLayout from "../components/UI/RootLayout";
import Hero from "../components/landing_page/Hero";
import Recommendations from "../components/landing_page/Recommendations";
import AboutCats from "../components/landing_page/AboutCats";
import Footer from "../components/landing_page/Footer";

function Root() {

  return (
    <>
        <Hero />
        <Recommendations />
        <AboutCats />
        <Footer />
    </>
  )
}

export default Root
