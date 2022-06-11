import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import officeStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/officeStyle2.js";

// office
import pet1 from "assets/img/servicePages/petStain/pet1.jpg";
import pet2 from "assets/img/servicePages/petStain/pet2.jpg";
import pet3 from "assets/img/servicePages/petStain/pet3.jpg";
import pet4 from "assets/img/servicePages/petStain/pet4.jpg";
import pet5 from "assets/img/servicePages/petStain/pet5.jpg";

const useStyles = makeStyles(officeStyle);

export default function PetStainOdorGallery() {
  const classes = useStyles();
  return (
    <div className={classes.office}>
      <GridContainer className={classes.textCenter}>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classes.sectionTitle}>View our recent work!</h2>
        </GridItem>
      </GridContainer>
      <GridContainer className={classes.textCenter}>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={pet1}
            alt="pet1"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={pet2}
            alt="pet2"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={pet3}
            alt="pet3"
          />
        </GridItem>
        <GridItem md={6} sm={6}>
          <h5 className={classes.title}>Before</h5>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={pet4}
            alt="pet4"
          />
        </GridItem>
        <GridItem md={6} sm={6}>
          <h5 className={classes.title}>Before</h5>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={pet5}
            alt="pet5"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
