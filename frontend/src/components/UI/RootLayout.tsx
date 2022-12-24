import React from "react";
import classes from "./RootLayout.module.css";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <section className={classes.layout}>
      <nav className={classes.nav}>
        <a href={"/"}>
          <img src={"/images/cat_wiki_logo.svg"} alt={"Cat Wiki Logo"} />
        </a>
      </nav>
      <Outlet />
        <Footer />
    </section>
  );
};

export default RootLayout;
