﻿import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Fade } from "react-reveal";
import glitterViliImg from "../assets/images/glitter-vili.jpg";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingBottom: "2vh",
    marginBottom: "3vh",
  },
  image: {
    objectFit: "cover",
    margin: "auto",
    width: "100%",
    minHeight: "200px",
    maxHeight: "50vh",
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
    // background: theme.palette.primary.light,
    padding: "1em 3em 1em 2em",
    minWidth: "25vw",
    maxHeight: "50vh",
  },
}));

const image = {
  title: "Vili speaking into a microphone with glitter on his face.",
  src: glitterViliImg,
};

export default function Greeting() {
  const [loaded, setLoaded] = useState(false);
  const classes = useStyles();

  return (
    <Fade bottom duration={1000} distance="1em">
      <div className={classes.root}>
        {loaded ? null : <Skeleton variant="rect" className={classes.image} />}
        <img
          className={classes.image}
          alt={image.title}
          src={image.src}
          stlye={loaded ? {} : { display: "none" }}
          onLoad={() => setLoaded(true)}
        />
        <div className={classes.greeting}>
          <div className={classes.greetingText}>
            <h1> Vili Hätönen</h1>
            <h3>I speak. I code. I listen.</h3>
          </div>
        </div>
        {/* <Button text="Contact me" href="#contact" /> */}
      </div>
    </Fade>
  );
}
