import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components

import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import contactStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/contactStyle.js";
import { Schedule } from "@material-ui/icons";

const useStyles = makeStyles(contactStyle);

export default function ProductContact() {
  const classes = useStyles();
  return (
    <div className={classes.aboutUs}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classNames(classes.title, classes.textCenter)}>
            Book your Appointment!
          </h2>
          <h4 className={classNames(classes.description, classes.textCenter)}>
            Click the link below to schedule your first appointment and see why so many others love our services!
          </h4>
          <form>
            <GridContainer>
              <GridItem
                md={4}
                sm={4}
                className={classNames(
                  classes.mrAuto,
                  classes.mlAuto,
                  classes.textCenter
                )}
              >
                <Button 
                  href="http://www.google.com/" 
                  color="danger" 
                  target="_blank"
                  round
                >
                  <Schedule /> Book Now
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
