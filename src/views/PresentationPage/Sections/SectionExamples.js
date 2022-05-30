import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import examplesStyle from "assets/jss/material-kit-pro-react/views/presentationSections/examplesStyle.js";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.js";

import areaRug from "assets/img/sections/mainPage/areaRug.jpg"
import carpetCleaning from "assets/img/sections/mainPage/carpetCleaning.jpg"
import petStain from "assets/img/sections/mainPage/petStain.jpg"
import tileGrout from "assets/img/sections/mainPage/tileGrout.jpg"
import upholstery from "assets/img/sections/mainPage/upholstery.jpg"

const styles = {
  ...examplesStyle,
  ...imagesStyles
};

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section, classes.sectionDark)}>
      <div className={classes.container}>
        <GridItem md={8} className={classNames(classes.mrAuto, classes.mlAuto)}>
          <div className={classes.sectionDescription}>
            <h2 className={classes.title}>Our Services</h2>

          </div>
        </GridItem>
        <GridContainer>
          <GridItem md={6} sm={6} xs={12}>
            <h4 className={classes.title}>Steam Carpet Cleaning</h4>
            <Card className={classes.imgCardExtended}>
              <Link to={"/carpet-cleaning"}>
                <img
                  src={carpetCleaning}
                  alt="Steam Carpet Cleaning"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
            <h4 className={classes.title}>Tile & Grout Cleaning</h4>
            <Card className={classes.imgCardExtended}>
              <Link to={"/tile-grout"}>
                <img
                  src={tileGrout}
                  alt="Tile & Grout Cleaning"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
            <h4 className={classes.title}>Upholstery</h4>
            <Card className={classes.imgCardExtended}>
              <Link to={"/upholstery"}>
                <img
                  src={upholstery}
                  alt="Upholstery"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
          </GridItem>
          <GridItem md={6} sm={6} xs={12}>
            <h4 className={classes.title}>Area Rug Cleaning</h4>
            <Card className={classes.imgCardExtended}>
              <Link to={"/area-rug"}>
                <img
                  src={areaRug}
                  alt="Area Rug Cleaning"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
            <h4 className={classes.title}>Pet Stain & Odor Treatment</h4>
            <Card className={classes.imgCardExtended}>
              <Link to={"/pet-stain-odor"}>
                <img
                  src={petStain}
                  alt="Pet Stain & Odor Treatment"
                  className={classes.imgCard}
                />
              </Link>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
