import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function PetStainOdorDescription() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h5 className={classes.description}>
            We're pet lovers too. We understand how accidents happen and the little messes that they might leave inside. We appreciate how cleaning up thoroughly after your pets can get quite tricky — especially when urine gets deep within the fibers of your carpet. Pets tend to like to lick and chew on anything, that's why we only use cleaning solutions that are child and pet-friendly — we don't bring anything into your pet's environment that hasn't been proven to be safe for them. With over a decade of cleaning experience, we've discovered and formulated safe solutions that get amazing results. After we have cleaned your flooring, it will smell, feel, and look clean — and you can be sure it is hygienic again.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
