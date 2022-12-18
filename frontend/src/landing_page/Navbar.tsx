import React from "react";
import classes from "./Navbar.module.css"

const Navbar = () => {
    return <nav className={classes.nav}>
        <a href={"/"}><img src={"/images/cat_wiki_logo.svg"} alt={"Cat Wiki Logo"}/></a>
    </nav>
}

export default Navbar;