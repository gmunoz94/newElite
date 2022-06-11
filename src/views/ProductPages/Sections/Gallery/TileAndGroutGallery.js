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
import tile1 from "assets/img/servicePages/tile/tile1.jpg";
import tile2 from "assets/img/servicePages/tile/tile2.jpg";
import tile3 from "assets/img/servicePages/tile/tile3.jpg";
import tile4 from "assets/img/servicePages/tile/tile4.jpg";
import tile5 from "assets/img/servicePages/tile/tile5.jpg";

const useStyles = makeStyles(officeStyle);

export default function TileAndGroutGallery() {
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
            src={tile1}
            alt="tile1"
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
            src={tile2}
            alt="tile2"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <img
            className={classNames(
              classes.imgRaised,
              classes.imgFluid,
              classes.rounded
              )}
            src={tile3}
            alt="tile3"
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
            src={tile4}
            alt="tile4"
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
            src={tile5}
            alt="tile5"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
