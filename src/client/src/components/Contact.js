import React from "react";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";

const Contact = () => {
  return (
    <Grid container justify="center" maxWidth="lg">
      <Grid item xs={11} style={{ margin: "12px" }}>
        <Typography align="center" variant="h3">
          Contact
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Grid container direction="row" justify="center" spacing={6}>
          <Grid item>
            <Link
              align="center"
              color="inherit"
              href="https://www.linkedin.com/in/vili-hatonen/"
            >
              <LinkedInIcon style={{ fontSize: 36 }} />
            </Link>
          </Grid>
          <Grid item>
            <Link color="inherit" href="mailto:vili.hato@gmail.com">
              <EmailIcon style={{ fontSize: 36 }} />
            </Link>
          </Grid>
          <Grid item>
            <Link color="inherit" href="https://twitter.com/vihaton">
              <TwitterIcon style={{ fontSize: 36 }} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
