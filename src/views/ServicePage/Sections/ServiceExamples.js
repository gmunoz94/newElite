import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import examplesStyle from "assets/jss/material-kit-pro-react/views/presentationSections/examplesStyle.js";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.js";

import carpentry from "assets/img/servicePages/other/carpentry.jpg"
import drywall from "assets/img/servicePages/other/drywall.jpg"
import electrical from "assets/img/servicePages/other/electrical.jpg"
import painting from "assets/img/servicePages/other/painting.jpg"
import plumbing from "assets/img/servicePages/other/plumbing.jpg"
import pressureWashing from "assets/img/servicePages/other/pressureWashing.jpg"


const styles = {
  ...examplesStyle,
  ...imagesStyles
};

const useStyles = makeStyles(styles);

export default function ServiceExamples() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section, classes.sectionDark)}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem md={6} sm={6} xs={12}>
            <h4 className={classes.title}>Pressure Washing</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={pressureWashing}
                alt="Pressure Washing"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Plumbing</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={plumbing}
                alt="Tile & Grout Cleaning"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Electrical</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={electrical}
                alt="Upholstery"
                className={classes.imgCard}
              />
            </Card>
          </GridItem>
          <GridItem md={6} sm={6} xs={12}>
            <h4 className={classes.title}>Drywall</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={drywall}
                alt="Area Rug Cleaning"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Carpentry</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={carpentry}
                alt="Pet Stain & Odor Treatment"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Painting</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={painting}
                alt="Pet Stain & Odor Treatment"
                className={classes.imgCard}
              />
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
