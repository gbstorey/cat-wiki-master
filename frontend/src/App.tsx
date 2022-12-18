import './App.css'
import Navbar from "./landing_page/Navbar";
import Hero from "./landing_page/Hero";
import Recommendations from "./landing_page/Recommendations";
import AboutCats from "./landing_page/AboutCats";
import Footer from "./landing_page/Footer";

function App() {

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

export default App
