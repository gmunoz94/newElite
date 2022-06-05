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
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page
import SectionPricing from "views/PresentationPage/Sections/SectionPricing.js";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";
import logo from '../../assets/img/Logo-TRANS.png'
import ServiceExamples from "./Sections/ServiceExamples";
import ProductContact from "views/ProductPages/Sections/Contact/ProductContact";

const useStyles = makeStyles(presentationStyle);

export default function ServicePage() {
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
          height: 400,
          color: "danger"
        }}
      />
      <Parallax
        image={require("../../assets/img/bg4.jpg")}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                 Other services we offer!
                </h1>
                <h3 className={classes.title}>
                  We are more than just a carpet cleaning company.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <ServiceExamples />
        <ProductContact />
      </div>
      <SectionPricing />
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
