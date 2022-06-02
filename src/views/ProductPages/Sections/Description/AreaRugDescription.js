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

export default function AreaRugDescription() {
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
            Your rug really makes a difference in your space. Our trained technicians are masters of rug steam cleaning with years of experience. We have an understanding of how to safely and effectively clean your rug so that we gently remove the grime while bringing back the beautiful color of your rug. You can also rest assured that the cleaning solutions we use on your rug are child and pet-safe. Long after you have had your rugs cleaned, you'll continue to benefit from our odor control treatment which kills bacteria and breaks down the cause of odors.
            At Master's Touch Steam Cleaning, we can clean at your location. This enables us to take the very best care of your rug and restore it back to being perfectly clean. Our experienced technicians will recognize the rug's construction and material types, which guides the rest of the cleaning process. We will also provide a dye-transfer to understand what will be the safest cleaning solution for your rug. We provide area rug cleaning for both residential and commercial customers in and around San Antonio, TX.
            If you would like to see your rug restored back to its original beauty, you can book our service online right or get in touch with us on one of the buttons below!
          </h5>
        </GridItem>
      </GridContainer>
    </div>
  );
}
