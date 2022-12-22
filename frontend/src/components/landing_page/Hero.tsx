import React from "react";
import classes from "./Hero.module.css";
import BreedSearch from "./BreedSearch";

const Hero = () => {
  return (
    <section className={classes.hero} id={"hero"}>
      <div className={classes.heroBlock}>
        <img className={classes.catBackground} src={"/images/cat_wiki_logo.svg"} alt={"Cat Wiki Logo"} />
        <h2 className={classes.heroSubHeader}>Get to know more about your cat breed</h2>
        <BreedSearch />
      </div>
    </section>
  );
};

export default Hero;
