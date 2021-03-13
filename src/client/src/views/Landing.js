import Container from "@material-ui/core/Container";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fade } from "react-reveal";
import { Divider } from "@material-ui/core";

import content from "../assets/text/content.en";

import Section from "../components/templates/Section";
import Header from "../components/Header";
import StickyFooter from "../components/StickyFooter";
import Greeting from "../components/Greeting";
import Contact from "../components/Contact";
import MediaCard from "../components/MediaCard";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "space-between",
  },
  divider: {
    margin: theme.spacing(10, 0),
  },
}));

const Landing = () => {
  const classes = useStyles();

  // console.log("section data", content.sections);
  return (
    <div className={classes.main}>
      <Header />
      <Greeting />
      <Contact />
      <Container className={classes.main} maxWidth="lg">
        <MediaCard />
        {content.sections.map((section, index) => (
          <React.Fragment key={index}>
            <Fade left duration={1000}>
              <Divider className={classes.divider} />
              <Section
                title={section.title}
                content={section.content}
                image={section.image}
                textFirst={index % 2 === 0}
              />
            </Fade>
          </React.Fragment>
        ))}
        <StickyFooter />
      </Container>
    </div>
  );
};

export default Landing;
