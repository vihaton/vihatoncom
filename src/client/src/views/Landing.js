import Container from '@material-ui/core/Container';
import React from 'react'
import StickyFooter from '../components/StickyFooter';
import { makeStyles } from '@material-ui/core/styles';
import { LoremIpsum } from 'react-lorem-ipsum'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'space-between'
  },
}))

const Landing = () => {
  const classes = useStyles()

  return (
    <Container className={classes.main} maxWidth='md'>

      {/* <Header /> */}

      <Typography variant='h2' >
        {'Vili Hätönen'}
      </Typography>
      <LoremIpsum p={4} />
      <StickyFooter />
    </Container>
  )
}

export default Landing