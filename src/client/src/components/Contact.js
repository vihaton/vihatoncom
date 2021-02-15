import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  header: {
    margin: theme.spacing(3)
  },
  icon: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 36,
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={11} className={classes.header}>
        <Typography align="center" variant="h3">
          Contact
        </Typography>
      </Grid>
      <Grid item xs={11}>
        <Grid container direction="row" justify="center" spacing={6}>
          <Grid item>
            <Link
              color="inherit"
              href="https://www.linkedin.com/in/vili-hatonen/"
            >
              <LinkedInIcon className={classes.icon} />
            </Link>
          </Grid>
          <Grid item>
            <Link color="inherit" href="mailto:vili.hato@gmail.com">
              <EmailIcon className={classes.icon} />
            </Link>
          </Grid>
          <Grid item>
            <Link color="inherit" href="https://twitter.com/vihaton">
              <TwitterIcon className={classes.icon} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
