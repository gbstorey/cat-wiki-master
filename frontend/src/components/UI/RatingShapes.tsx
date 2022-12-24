import classes from "./RatingShapes.module.css"
import shortid from "shortid";
import React from "react";

type Detail = {
  string: string;
  value: string | number;
};

const RatingShapes: React.FC<{ attribute: Detail }> = ({ attribute }) => {
  let shapes = [];
  for (let i = 0; i < attribute.value; i++) {
    shapes.push(<div className={classes.shape} key={shortid.generate()}></div>);
  }
  for (let j = 0; j < 5 - +attribute.value; j++) {
    shapes.push(
      <div
        className={`${classes.shape} + ${classes.nullShape}`}
        key={shortid.generate()}
      ></div>
    );
  }
  return <div className={classes.shapeBox}>{shapes}</div>;
};

export default RatingShapes;
