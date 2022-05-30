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

export default function CarpetCleaningDescription() {
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
            We provide a carpet cleaning experience that saves you time, energy, and money!
          </h5>
          <h5 className={classes.description}>
            With Elite Home Solutions you will receive personalized services that cater specifically to your homes needs. With our team of professionals we can ensure a quality clean every time. We will have your carpets looking brand new just like they did the day you moved in. 
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
