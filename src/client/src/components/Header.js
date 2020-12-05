import React, { useState, useRef, useEffect } from "react";
import Headroom from "react-headroom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

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
  link: {
    color: theme.palette.common.darkBlack,
    textDecoration: "none",
    "a:hover": {
      backgroundColor: theme.palette.common.darkGrey,
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Headroom className={classes.root}>
      <div className={classes.main}>
        <Grid container justify="space-between">
          <Grid item>
            <p>vihaton.com</p>
          </Grid>
          {/* <Grid item>
            <a className={classes.link} href="#public-speaking">
              public speaking
            </a>
          </Grid> */}
        </Grid>
      </div>
    </Headroom>
  );
};

export default Header;
