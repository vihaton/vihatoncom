import React, { useState, useRef, useEffect } from "react";
import Headroom from "react-headroom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Headroom className={classes.root}>
      <div className={classes.main}>
        <p>vihaton.com</p>
      </div>
    </Headroom>
  );
};

export default Header;
