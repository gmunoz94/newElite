import React from "react";
// nodejs library that concatenates classes
import { makeStyles } from "@material-ui/core/styles";


import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.js";

const useStyles = makeStyles(servicesStyle);

export default function SectionServices() {
  const classes = useStyles();
  return (
    <div className={classes.services}>
      
    </div>
  );
}
