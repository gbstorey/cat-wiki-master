import React from "react";
import classes from "./Attributes.module.css";
import shortid from "shortid";
import RatingShapes from "../UI/RatingShapes";
import {Detail} from "../../util/types";

const Attributes: React.FC<{attributes: Detail[]}> = ({attributes}) => {
        let elements = [];
        for (let attribute of attributes) {
            elements.push(
                <div className={classes.attrContainer} key={shortid.generate()}>
                    <div className={classes.attrDetails}>
                        <p className={classes.attrBody}>
                            <span className={classes.detailSpan}>{attribute.string}</span>
                        </p>
                    </div>
                    <RatingShapes attribute={attribute} />
                </div>
            );
        }
    return (
        <div className={classes.attrContainer}>
            {elements}
        </div>
    );
}

export default Attributes