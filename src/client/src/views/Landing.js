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

// import exampleIMG from "../assets/images/v-character.png";
import content from "../assets/text/content.en";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "space-between",
  },
  divider: {
    margin: theme.spacing(7, 0),
  },
}));

const Landing = () => {
  const classes = useStyles();

  console.log("section data", content.sections);
  return (
    <div className={classes.main}>
      <Header />
      <Greeting />
      <Container className={classes.main} maxWidth="lg">
        {content.sections.map((section, index) => (
          <React.Fragment key={index}>
            <Fade left duration={1000}>
              <Section
                title={section.title}
                content={section.content}
                image={section.image}
                textFirst={index % 2 === 0}
              />
            </Fade>
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
        {/* <LoremIpsum p={4} /> */}
        <StickyFooter />
      </Container>
    </div>
  );
};

export default Landing;
