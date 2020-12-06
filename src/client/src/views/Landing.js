import Container from "@material-ui/core/Container";
import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { makeStyles } from "@material-ui/core/styles";

import Section from "../components/templates/Section";
import Header from "../components/Header";
import StickyFooter from "../components/StickyFooter";
import Greeting from "../components/Greeting";
import { Fade } from "react-reveal";

import { Divider } from "@material-ui/core";

import exampleIMG from "../assets/images/v-character.png";

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
      <Container className={classes.main} maxWidth="lg">
        <Fade left duration={1000}>
          <Section
            title="Section 1"
            content="And its content."
            image={{ src: exampleIMG, alt: "alt" }}
            textFirst={true}
          />
        </Fade>
        <Divider />
        <Fade left duration={2000}>
          <Section
            title="Section 2"
            content="And its content."
            image={{ src: exampleIMG, alt: "alt" }}
            textFirst={false}
          />
        </Fade>
        <Divider />
        <LoremIpsum p={4} />
        <StickyFooter />
      </Container>
    </div>
  );
};

export default Landing;
