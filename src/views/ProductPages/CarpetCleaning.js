/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionServices from "views/AboutUsPage/Sections/SectionServices.js";
import SectionOffice from "views/AboutUsPage/Sections/SectionOffice.js";

import aboutUsStyle from "assets/jss/material-kit-pro-react/views/aboutUsStyle.js";
import CarpetCleaningDescription from "./Sections/Description/CarpetCleaningDescription";
import ProductContact from "./Sections/Contact/ProductContact";
import CarpetCleaningGallery from "./Sections/Gallery/CarpetCleaningGallery";
import Filler from "./Sections/Contact/Filler";

const useStyles = makeStyles(aboutUsStyle);

export default function CarpetCleaning() {
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
          height: 150,
          color: "dark"
        }}
      />
      <Parallax image={require("assets/img/sections/mainPage/carpetCleaning.jpg")} filter="dark" small>
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
              <h1 className={classes.title}>Steam Carpet Cleaning</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <CarpetCleaningDescription />
          <Filler />
          <CarpetCleaningGallery />
          <ProductContact />
        </div>
      </div>
      <Footer
        content={
          <div>
            {/* <div className={classes.left}>
              <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                  <a
                    href="/"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
              </List>
            </div> */}
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
