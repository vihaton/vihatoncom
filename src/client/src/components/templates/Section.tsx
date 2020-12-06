import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  SectionProps,
  SectionTextProps,
  SectionImageProps,
} from "../../models/Models";
import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "1rem",
    // justifyContent: "space-around",
  },
  image: {
    minHeight: "100px",
    minWidth: "200px",
    // alignItems: "stretch",
    maxWidth: "90vw",
    "@media (min-width:600px)": {
      maxWidth: "50vw",
    },
  },
  text: {
    minWidth: "200px",
  },
}));

const SectionText = ({ title, content }: SectionTextProps) => {
  const classes = useStyles();
  return (
    <Grid item className={classes.text}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant={"body1"}>{content}</Typography>
    </Grid>
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
    <div>
      {textFirst ? (
        <Grid
          direction={"row"}
          container
          className={classes.section}
          justify={"space-around"}
        >
          <SectionText title={title} content={content} />
          <SectionImage image={image} />
        </Grid>
      ) : (
        <Grid
          direction={"row"}
          container
          className={classes.section}
          justify={"space-around"}
        >
          <SectionImage image={image} />
          <SectionText title={title} content={content} />
        </Grid>
      )}
    </div>
  );
};

export default Section;
