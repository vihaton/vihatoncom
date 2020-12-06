import React, { useState, useRef, useEffect } from "react";
import Headroom from "react-headroom";
import { makeStyles } from "@material-ui/core/styles";
import vImg from "../assets/images/v-character.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "0px !important",
    "@media (max-width:400px)": {
      fontSize: "0.6rem",
    },
    "@media (min-width:600px)": {
      fontSize: "1.2rem",
    },
  },
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    background: theme.palette.common.darkGrey,
  },
  link: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: theme.palette.common.darkBlack,
    textDecoration: "none",
  },
  logo: {
    maxWidth: "30px",
    maxHeight: "30px",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Headroom className={classes.root}>
      <div className={classes.main}>
        <a href="" className={classes.link}>
          <img src={vImg} className={classes.logo} />
          <p>ihaton.com</p>
        </a>
      </div>
    </Headroom>
  );
};

export default Header;
