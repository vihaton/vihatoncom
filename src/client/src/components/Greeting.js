import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fade } from "react-reveal";
// import glitterViliImg from "../assets/images/glitter-vili.jpg";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingBottom: "2vh",
    marginBottom: theme.spacing(8),
    minHeight: "400px",
  },
  image: {
    objectFit: "cover",
    margin: "auto",
    width: "100%",
    minHeight: "300px",
    maxHeight: "80vh", 
  },
  greeting: {
    position: "absolute",
    margin: "auto",
    paddingLeft: "10vw",
    color: theme.palette.secondary.main,
    minHeight: "4vh",
  },
  greetingText: {
    "@media (max-width:400px)": {
      fontSize: "0.5rem",
    },
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    background: "rgba(0, 0, 0, 0.3)",
    padding: "1em 3em 1em 2em",
    minWidth: "25vw",
    maxHeight: "50vh",
  },
}));

const image = {
  title: "Vili speaking into a microphone with glitter on his face.",
  src: "/img/glitter-vili.jpg",
};

export default function Greeting() {
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  const imgObject = (
    <img
      stlye={loading ? {} : { display: "none" }}
      className={classes.image}
      alt={image.title}
      src={process.env.PUBLIC_URL + image.src}
      onLoad={() => setLoading(false)}
    />
  );

  return (
    <div className={classes.root}>
      {loading ? (
        <Skeleton variant="rect" animation="wave" className={classes.image}>
          {imgObject}
        </Skeleton>
      ) : (
        imgObject
      )}
      <Fade bottom duration={1000} distance="10vh">
        <div className={classes.greeting}>
          <div className={classes.greetingText}>
            <h1> Vili Hätönen</h1>
            <h3>I speak. I code. I listen.</h3>
          </div>
        </div>
      </Fade>
    </div>
  );
}
