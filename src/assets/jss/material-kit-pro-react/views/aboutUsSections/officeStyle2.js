import {
  description,
  mrAuto,
  mlAuto
} from "assets/jss/material-kit-pro-react.js";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.js";

const imgRaised = imagesStyles.imgRaised;
const rounded = imagesStyles.imgRounded;
const imgFluid = imagesStyles.imgFluid;

const servicesStyle = {
  title: {
    color: "#3C4858",
    textDecoration: "none",
    fontWeight: "700",
    marginTop: "30px",
    marginBottom: "-15px",
    minHeight: "32px",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`
  },
  sectionTitle: {
    color: "#3C4858",
    textDecoration: "none",
    fontWeight: "700",
    marginTop: "30px",
    marginBottom: "25px",
    minHeight: "32px",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`
  },
  description,
  mrAuto,
  mlAuto,
  textCenter: {
    textAlign: "center!important"
  },
  office: {
    "& img": {
      margin: "20px 0px"
    }
  },
  imgRaised,
  rounded,
  imgFluid
};

export default servicesStyle;
