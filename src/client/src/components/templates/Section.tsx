import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  SectionProps,
  SectionTextProps,
  SectionImageProps,
} from "../../models/Models";
import { Container, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: theme.spacing(2),
    margin: theme.spacing(12, 0, 8, 0),
  },
  image: {
    minHeight: "100px",
    minWidth: "200px",
    maxWidth: "90vw",
    "@media (min-width:600px)": {
      maxWidth: "600px",
    },
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "200px",
    margin: theme.spacing(5, 0),
  },
}));

const SectionText = ({ title, content }: SectionTextProps) => {
  const classes = useStyles();
  return (
    <Container className={classes.text} maxWidth="sm">
      <Typography align="center" variant="h2">
        {title}
      </Typography>
      <br />
      <Typography align="justify" variant={"body1"}>
        {content}
      </Typography>
    </Container>
  );
};

const SectionImage = ({ image }: SectionImageProps) => {
  const [loaded, setLoaded] = useState(true);
  const classes = useStyles();

  console.log(image.src);

  return (
    <Grid item>
      {loaded ? null : <Skeleton variant="rect" className={classes.image} />}
      <img
        style={loaded ? {} : { display: "none" }}
        className={classes.image}
        alt={image.alt}
        src={process.env.PUBLIC_URL + image.src}
        onLoad={() => setLoaded(true)}
      />
    </Grid>
  );
};

const Section = ({ title, content, image, textFirst }: SectionProps) => {
  const classes = useStyles();

  console.log("image", image);

  return (
    <Grid
      direction={"row"}
      container
      className={classes.section}
      justify={"space-around"}
    >
      {textFirst ? (
        <React.Fragment>
          <SectionText title={title} content={content} />
          <SectionImage image={image} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <SectionImage image={image} />
          <SectionText title={title} content={content} />
        </React.Fragment>
      )}
    </Grid>
  );
};

export default Section;
