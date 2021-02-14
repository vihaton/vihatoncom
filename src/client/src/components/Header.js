import React from "react";
import Headroom from "react-headroom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";

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
    padding: theme.spacing(1, 0),
    margin: theme.spacing(0, 3),
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
        <Link href="/" className={classes.link}>
          <img
            src={process.env.PUBLIC_URL + "/img/v-character.png"}
            className={classes.logo}
            alt="v-char"
          />
          <Typography variant="body1">ihaton.com</Typography>
        </Link>
        <Link
          href="https://blog.vihaton.com"
          color="inherit"
          className={classes.link}
        >
          <Typography variant="body1">Blog</Typography>
        </Link>
      </div>
    </Headroom>
  );
};

export default Header;
