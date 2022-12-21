import classes from "./Footer.module.css"
import React from "react";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footerContent}>
                <a href={"/"}><img src={"/images/cat_wiki_logo.svg"} alt={"Cat Wiki Logo"}/></a>
                <div>
                    <i className="fa-regular fa-copyright"></i>
                    <p>created by </p>
                    <p><a href={"https://github.com/gbstorey"}>garrett storey</a></p>
                    <p> - devChallenge.io 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Footer