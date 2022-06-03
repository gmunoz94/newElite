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

export default function AreaRugDescription() {
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
            An area rug can really tie a room together, but it's a shame to see them stained and dirty from constantly being walked on. We are experts at rug cleaning and we have years of experience behind us. We understand what precautions and techniques needs to be utilized to safely and effectivly clean your rug. Rest assured that the cleaning solutions and products that we offer are pet and family safe.
            <br />
            <br />
            With Elite Home Solutions, we will come to you. Whether residential or commercial rug cleaning, we can help you restore your rug to its original beauty and look.
            <br />
            <br />
            Book now below to find out more!
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
