/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";
import Filler from "views/ProductPages/Sections/Contact/Filler";

const useStyles = makeStyles(aboutUsStyle);

export default function CouponPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Elite Home Solutions"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "danger"
        }}
      />
      <Parallax image={require("assets/img/sections/mainPage/areaRug.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>Page Under Construction</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Filler />
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-about-us"
                    className={classes.block}
                    target="_blank"
                  >
                    About us
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made by{" "}
              <a
                href="https://www.munoz-web.dev"
                target="_blank"
              >
                Munoz WebDev
              </a>
            </div>
          </div>
        }
      />
    </div>
  );
}
