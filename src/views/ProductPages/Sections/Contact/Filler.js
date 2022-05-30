import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import servicesStyle from "assets/jss/material-kit-pro-react/views/aboutUsSections/servicesStyle.js";

const useStyles = makeStyles(servicesStyle);

export default function Filler() {
  const classes = useStyles();
  return (
    <div className={classes.services}>
      
    </div>
  );
}
