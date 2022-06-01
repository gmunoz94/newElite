import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import officeStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/officeStyle.js";

// office
import upholstery1 from "assets/img/servicePages/upholstery/upholstery1.jpg";
import upholstery2 from "assets/img/servicePages/upholstery/upholstery2.jpg";
import upholstery3 from "assets/img/servicePages/upholstery/upholstery3.jpg";
import upholstery4 from "assets/img/servicePages/upholstery/upholstery4.jpg";
import upholstery5 from "assets/img/servicePages/upholstery/upholstery5.jpg";

const useStyles = makeStyles(officeStyle);

export default function UpholsteryGallery() {
  const classes = useStyles();
  return (
    <div className={classes.office}>
      <GridContainer className={classes.textCenter}>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.title}>View our recent work!</h2>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={upholstery1}
            alt="upholstery1"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={upholstery2}
            alt="upholstery2"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={upholstery3}
            alt="upholstery3"
          />
        </GridItem>
        <GridItem md={6} sm={6}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={upholstery4}
            alt="upholstery4"
          />
        </GridItem>
        <GridItem md={6} sm={6}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={upholstery5}
            alt="upholstery5"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
