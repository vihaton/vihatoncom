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
  },
  image: {
    minHeight: "100px",
    minWidth: "200px",
    maxWidth: "90vw",
    "@media (min-width:600px)": {
      maxWidth: "50vw",
    },
  },
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "200px",
  },
}));

const SectionText = ({ title, content }: SectionTextProps) => {
  const classes = useStyles();
  return (
    <Container
      className={classes.text}
      maxWidth="sm"
    >
      <Typography variant="h2">{title}</Typography>
      <Typography variant={"body1"}>{content}</Typography>
    </Container>
  );
};

const SectionImage = ({ image }: SectionImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const classes = useStyles();

  return (
    <Grid item>
      {loaded ? null : <Skeleton variant="rect" className={classes.image} />}
      <img
        style={loaded ? {} : { display: "none" }}
        className={classes.image}
        alt={image.alt}
        src={image.src}
        onLoad={() => setLoaded(true)}
      />
    </Grid>
  );
};

const Section = ({ title, content, image, textFirst }: SectionProps) => {
  const classes = useStyles();

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
