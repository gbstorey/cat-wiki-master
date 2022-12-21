import React from "react";
import classes from "./RootLayout.module.css";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <nav className={classes.nav}>
        <a href={"/"}>
          <img src={"/images/cat_wiki_logo.svg"} alt={"Cat Wiki Logo"} />
        </a>
      </nav>
      <Outlet />
    </>
  );
};

export default RootLayout;
