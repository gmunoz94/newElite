import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle";
import lounge1 from "assets/img/sections/lounge1.jpg";
import { Looks3, Looks4, LooksOne, LooksTwo } from "@material-ui/icons";

const useStyles = makeStyles(featuresStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classes.features4}>
    <GridContainer>
      <GridItem
        xs={12}
        sm={8}
        md={8}
        className={
          classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
        }
      >
        <h2 className={classes.title}>Allow us to make your life easier</h2>
        <h5 className={classes.description}>
          With our high quality tools and equipment we will leave your house the way it was the day you moved in. We have years of experience in industry and with leading practices we can ensure a satisfactory job EVERY TIME.
        </h5>
      </GridItem>
    </GridContainer>
    <GridContainer>
      <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mlAuto}>
        <InfoArea
          icon={LooksOne}
          title="First, we will come and meet with you personally. We want to figure out what your expectations are so we can make sure that we meet them."
          iconColor="info"
        />
        <InfoArea
          icon={LooksTwo}
          title="After this, we will provide you with a quote. We will clearly explain why we want to use certain cleaning methods to take care of your carpets. That way, you know exactly what will happen."
          iconColor="danger"
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={12} lg={4}>
        <div className={classes.phoneContainer}>
          <img src={lounge1} alt="..." />
        </div>
      </GridItem>
      <GridItem xs={12} sm={12} md={12} lg={3} className={classes.mrAuto}>
        <InfoArea
          icon={Looks3}
          title="Next, our team will complete the cleaning job. We will treat your carpets like they are our own, protecting your carpets, your property, and the rest of your building."
          iconColor="primary"
        />
        <InfoArea
          icon={Looks4}
          title="When we are done, we will give you a chance to review the work to make sure you are happy. If you are unhappy with our work, we will go back and do it again, making sure you are satisfied."
          iconColor="success"
        />
      </GridItem>
    </GridContainer>
  </div>
  );
}
