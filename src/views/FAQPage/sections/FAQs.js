/* eslint-disable */
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Help from "@material-ui/icons/Help";
import Code from "@material-ui/icons/Code";
import Dashboard from "@material-ui/icons/Dashboard";
import Timeline from "@material-ui/icons/Timeline";
import Group from "@material-ui/icons/Group";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import Muted from "components/Typography/Muted.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Badge from "components/Badge/Badge.js";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";

import office2 from "assets/img/examples/office2.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import cardProject1 from "assets/img/examples/card-project1.jpg";
import cardProject2 from "assets/img/examples/card-project2.jpg";
import cardProject3 from "assets/img/examples/card-project3.jpg";
import cardProject4 from "assets/img/examples/card-project4.jpg";
import cardProject5 from "assets/img/examples/card-project5.jpg";
import cardProject6 from "assets/img/examples/card-project6.jpg";

const useStyles = makeStyles(projectsStyle);

export default function FAQs({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Project 4 START */}
      <div className={classes.projects + " " + classes.projects4}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>
                What is Carpet Cleaning?
              </h2>
              <div className={classes.sectionSpace} />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <Card
                background
                className={classes.card4}
                style={{ backgroundImage: `url(${cardProject2})` }}
              >
                <CardBody background className={classes.cardBody4}>
                  <div>
                    <h3 className={classes.cardTitle + " " + classes.hidden}>Beautiful Project</h3>
                    <p className={classes.cardDescription + " " + classes.hidden}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <InfoArea
                className={classes.info4}
                title="Do you move the furniture?"
                description="Yes we do. All light to medium furniture will be moved by our technicians, and then replaced to original position on completion. Some furniture will be on styrofoam blocks or other protectors. These must be removed by the customer after 24 hours. Heavy furniture that can't be moved safely by our technicians must be moved before they arrive. Or exposed carpeting will be cleaned around heavy furniture."
                icon={Help}
                iconColor="info"
              />
              <InfoArea
                className={classes.info4}
                title="How soon can I walk on it?"
                description="As soon as it is finished it is safe for you to walk on, but doing so will not give the best results for your carpet. As the carpet dries, it retains its open state. Walking on it early risks unnecessary compaction. The more moisture remaining in the carpet, the more easily dirt will stick to it. So certainly in the first 6 hours, use shoe covers or wear clean white socks. After 24 hours, the carpet can be used normally."
                icon={Help}
                iconColor="info"
              />
              <InfoArea
                className={classes.info4}
                title="Do I need to do anything special after the cleaning?"
                description="While we do as much as we can to make after-cleaning care simple, there are some things to keep in mind for the first 24 hours. This is how long it will take for your carpet to get so dry that it can be treated as normal. Remember that as it dries, stepping from carpet onto hard surfaces may be slippery. Also, be aware that while it dries, dirt will stick to it more easily, so keep the traffic minimal and clean. After 24 hours, you can then remove the blocks and enjoy your renewed carpets."
                icon={Help}
                iconColor="info"
              />
            </GridItem>
          </GridContainer>
          <hr />
          <GridContainer>
            <GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
              <InfoArea
                className={classes.info4}
                title="Can you get all stains out?"
                description="It is true that some spots and stains are not able to be removed. Our cleaning solutions, and the process we use gives you the best chance of getting it out that can be offered. Our technicians also know a lot about this and will give you their honest opinion before starting. If you know exactly what caused the stain, ask us about it when you call."
                icon={Help}
                iconColor="info"
              />
              <InfoArea
                className={classes.info4}
                title="What about indentations from heavy furniture?"
                description="Using high temperature steam and focusing on these locations with specialized equipment can significantly improve indentations. But there is a limit to how much can be lifted due to the backing being crushed and the type of carpet involved. Our skilled technicians have the best equipment to recover as much as is possible."
                icon={Help}
                iconColor="info"
              />
              <InfoArea
                className={classes.info4}
                title="Do you offer a guarantee?"
                description="Yes, your complete satisfaction is very important to us. We want to know if there is anything that you are not happy with. If there is anything we can do, we'll come back free of charge and correct the problem."
                icon={Help}
                iconColor="info"
              />
            </GridItem>
            <GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
              <Card
                background
                className={classes.card4}
                style={{ backgroundImage: `url(${cardProject5})` }}
              >
                <CardBody background className={classes.cardBody4}>
                  <div>
                    <h3 className={classes.cardTitle + " " + classes.hidden}>Another One</h3>
                    <p className={classes.cardDescription + " " + classes.hidden}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Project 4 END */}
    </div>
  );
}
