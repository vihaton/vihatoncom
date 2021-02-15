import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      <Link color="secondary" href="https://vihaton.com/">
        vihaton.com
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 3),
    marginTop: theme.spacing(12),
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  icon: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 21,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 28,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 34,
    },
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container direction="row" justify="space-between">
        <Grid item xs={6}>
          <Typography variant="body1">Hate less, hateless, vihaton.</Typography>
          <Copyright />
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2} flex-direction="row" justify="flex-end">
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
    </footer>
  );
}
