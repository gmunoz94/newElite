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
import carpet1 from "assets/img/servicePages/carpet/carpet1.jpg";
import carpet2 from "assets/img/servicePages/carpet/carpet2.jpg";
import carpet3 from "assets/img/servicePages/carpet/carpet3.jpg";
import carpet4 from "assets/img/servicePages/carpet/carpet4.jpg";
import carpet5 from "assets/img/servicePages/carpet/carpet5.jpg";

const useStyles = makeStyles(officeStyle);

export default function CarpetCleaningGallery() {
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
          <h5 className={classes.title}>Before</h5>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={carpet1}
            alt="carpet1"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <h5 className={classes.title}>After</h5>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={carpet2
          }
            alt="carpet2
          "
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <h5 className={classes.title}>Night and Day Difference</h5>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={carpet3}
            alt="carpet3"
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
            src={carpet4}
            alt="carpet4"
          />
        </GridItem>
        <GridItem md={6} sm={6}>
          <h5 className={classes.title}>After</h5>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={carpet5}
            alt="carpet5"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
