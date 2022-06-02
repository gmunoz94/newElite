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

export default function UpholsteryDescription() {
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
            It is true that our furniture is an important part of our lives but one that often goes unnoticed. Think about how often you sit on your sofa. It is natural that it won't be as clean as it was when you first got it — and that's okay. But a good vacuum is not enough to do a thorough, deep-clean. Once Master's Touch Steam Cleaning has thoroughly cleaned a piece of your furniture, you'll certainly notice the difference. Don't be surprised if you find yourself feeling a lot more comfortable and cozy using your furniture — that's the power of a quality clean done with the industry's best equipment. We understand that there is a wide variety of furniture types and designs. Our technicians are equipped with a collection of professional tools for the job and have received hands-on training to be able to understand the best tricks and techniques to provide the best possible results for your cleaning project.
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
