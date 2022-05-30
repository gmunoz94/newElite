import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import pricingStyle from "assets/jss/material-kit-pro-react/views/presentationSections/pricingStyle.js";

const useStyles = makeStyles(pricingStyle);

export default function SectionPricing() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
    </div>
  );
}
