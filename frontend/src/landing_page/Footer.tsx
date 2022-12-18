import classes from "./Footer.module.css"
import React from "react";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <a href={"/"}><img src={"/images/Catwikilogo.svg"} alt={"Cat Wiki Logo"}/></a>
            <div>
                <i className="fa-regular fa-copyright"></i>
                <p>created by </p>
                <p><a href={"https://github.com/gbstorey"}>garrett storey</a></p>
                <p> - devChallenge.io 2021</p>
            </div>
        </div>
    )
}

export default Footer