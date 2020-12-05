import React, { useState, useRef, useEffect } from "react";
import Headroom from "react-headroom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
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
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
    textDecoration: "none",
    color: theme.palette.common.darkBlack,
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
      <a href="" className={classes.main}>
        <img src={vImg} className={classes.logo} />
        <p>ihaton.com</p>
      </a>
    </Headroom>
  );
};

export default Header;
