import classes from "./DetailsSection.module.css";
import Details from "./Details";
import Attributes from "./Attributes";
import React from "react";
import {Detail, Identifiers} from "../../util/types";

const DetailsSection: React.FC<{
    identifiers: Identifiers;
  details: Detail[];
  attributes: Detail[];
}> = ({identifiers, details, attributes}) => {
  return (
    <div className={classes.right}>
      <h1 className={classes.detailHeader}>{identifiers.name}</h1>
      <h2 className={classes.detailSubHeader}>{identifiers.description}</h2>
      <Details details={details} />
      <Attributes attributes={attributes} />
    </div>
  );
};

export default DetailsSection;
