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

export default function TileAndGroutDescription() {
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
            
          </h5>
          <h5 className={classes.description}>
            Over time, it is natural that your tiles get a build-up of grime. Even when you try to clean them regularly, it's easy to forget how bright and clean they were from the start. The hard surface of tiles and the groves of porous grout can collect a coating of grime that is very hard to remove — especially without the right tools. But even with the best equipment and cleaning solutions, it takes experience to get the best possible results. Using the power of true steam and the use of specially formulated cleaning solutions, we are able to restore your tiles back to their original beauty. Our trained and certified technicians then apply their experience to get the results you can be proud of. But we also do a job that lasts. Especially if you request to have the sealant applied, you'll be able to enjoy your new tile look for long after we've finished. We provide tile and grout cleaning for both residential and commercial customers in and around San Antonio, TX.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
