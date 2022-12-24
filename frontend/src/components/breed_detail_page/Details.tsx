import React from "react";
import classes from "./Details.module.css";
import shortid from "shortid";
import {Detail} from "../../util/types";

const Details: React.FC<{ details: Detail[] }> = ({ details }) => {
  let elements = [];
  for (let detail of details) {
    elements.push(
      <p className={classes.detailBody} key={shortid.generate()}>
        <span className={classes.detailSpan}>{detail.string}</span>
        {detail.value}
      </p>
    );
  }
  return <div>{elements}</div>;
};

export default Details;
