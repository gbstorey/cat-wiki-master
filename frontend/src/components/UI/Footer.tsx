import classes from "./Footer.module.css"
import React from "react";

const Footer = () => {
    return (
        <div className={classes.footer}>
            <div className={classes.footerContent}>
                <a href={"/"}><img className={classes.footerLogo} src="/images/cat_wiki_logo.svg" alt={"Cat Wiki Logo"}/></a>
                <div>
                    <i className={`fa-regular fa-copyright ${classes.footerIcon}`}></i>
                    <p className={classes.footerText}>created by </p>
                    <p className={classes.footerText}><a href={"https://github.com/gbstorey"} className={classes.footerLink}>garrett storey</a></p>
                    <p className={classes.footerText}> - devChallenge.io 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Footer