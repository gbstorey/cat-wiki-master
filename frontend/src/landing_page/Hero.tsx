import React, {useRef} from "react";
import classes from "./Hero.module.css"

const Hero = () => {
    const breedRef = useRef(null);
    return <section className={classes.hero} id={"hero"}>
        <div className={classes.heroBlock}>
            <img src={"/images/Catwikilogo.svg"} alt={"Cat Wiki Logo"}/>
            <h2>Get to know more about your cat breed</h2>
            <div className={classes.inputIcons}>
                <input type={"text"} name={"breed"} id={"breed"} placeholder={"Enter your breed"} ref={breedRef}/>
                <i className={`fa-solid fa-magnifying-glass ${classes.icon}`}></i>
            </div>
        </div>
    </section>
}

export default Hero;