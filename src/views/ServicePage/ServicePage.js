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
import SectionDescription from "views/PresentationPage/Sections/SectionDescription.js";
import SectionExamples from "views/PresentationPage/Sections/SectionExamples.js";
import SectionPricing from "views/PresentationPage/Sections/SectionPricing.js";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";
import logo from '../../assets/img/Logo-TRANS.png'
import ServiceExamples from "./Sections/ServiceExamples";

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
      </div>
      <SectionPricing />
      <Footer
        theme="white"
        content={
          <div>
            <div className={classes.left}>
              <a
                href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkpr-presentation"
                target="_blank"
                className={classes.footerBrand}
              >
                Elite Home Solutions
              </a>
            </div>
            <div className={classes.pullCenter}>
              &copy; {1900 + new Date().getYear()} , made by{" "}
              <a
                href="https://www.munoz-web.dev"
                target="_blank"
              >
                Munoz WebDev
              </a>
            </div>
            <div className={classes.rightLinks}>
              <ul>
                <li>
                  <Button
                    href="https://www.facebook.com/elitehomesolutionsllc.sa"
                    target="_blank"
                    color="facebook"
                    justIcon
                    simple
                  >
                    <i className="fab fa-facebook-f" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://www.google.com/search?q=Elite+Home+Solutions+sa"
                    target="_blank"
                    color="google"
                    justIcon
                    simple
                  >
                    <i className="fab fa-google" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://instagram.com/"
                    target="_blank"
                    color="instagram"
                    justIcon
                    simple
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  );
}
