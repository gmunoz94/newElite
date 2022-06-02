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
            When it comes to cleaning your carpets, many people are surprised to find out just how much of a difference a deep steam clean can make. With the experience of our technicians combined with the use of professional, truck-mounted equipment and effective cleaning solutions that are pet and child-safe, you can expect results that are nothing short of amazing.
            You may not realize the difference that a truck-mounted system makes. But once you discover just how quickly the carpet dries after treatment, and then you can feel and smell the results — you know that you made the right choice. The higher temperature combined with the more powerful suction will remove more dirt, odors, and allergens than you can imagine.
            We provide carpet cleaning for both residential and commercial customers in and around San Antonio, TX.
          </h5>
          <h5 className={classes.description}>
            With Elite Home Solutions you will receive personalized services that cater specifically to your homes needs. With our team of professionals we can ensure a quality clean every time. We will have your carpets looking brand new just like they did the day you moved in. 
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
