import React, { useState, useRef, useEffect } from 'react';
import Headroom from "react-headroom";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const Header = () => {
  return (
    <Headroom>
      <Container>
        <Typography variant='body1'>
          vihaton.com
        </Typography>
      </Container>
    </Headroom>
  )
}

export default Header