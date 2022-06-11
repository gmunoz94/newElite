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
import rug1 from "assets/img/servicePages/rug/rug1.jpg";
import rug2 from "assets/img/servicePages/rug/rug2-W.jpg";
import rug3 from "assets/img/servicePages/rug/rug3.jpg";
import rug4 from "assets/img/servicePages/rug/rug4.jpg";
import rug5 from "assets/img/servicePages/rug/rug5.jpg";

const useStyles = makeStyles(officeStyle);

export default function AreaRugGallery() {
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
            src={rug1}
            alt="rug1"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={rug2}
            alt="rug2"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
            )}
            src={rug3}
            alt="rug3"
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
            src={rug4}
            alt="rug4"
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
            src={rug5}
            alt="rug5"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
