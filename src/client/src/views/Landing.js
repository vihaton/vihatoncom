import Container from "@material-ui/core/Container";
import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import Header from "../components/Header";
import StickyFooter from "../components/StickyFooter";
import Greeting from "../components/Greeting";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "space-between",
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Header />
      <Greeting />
      <Container className={classes.main} maxWidth="md">
        <LoremIpsum p={4} />
        <StickyFooter />
      </Container>
    </div>
  );
};

export default Landing;
