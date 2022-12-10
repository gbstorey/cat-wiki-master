import React from "react";
import classes from "./Navbar.module.css"

const Navbar = () => {
    return <nav className={classes.nav}>
        <a href={"/"}><img src={"/images/Catwikilogo.svg"} alt={"Cat Wiki Logo"}/></a>
    </nav>
}

export default Navbar;