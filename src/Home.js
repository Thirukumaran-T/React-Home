// src/Home.js
import React from 'react';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <Button variant="contained" component={Link} to="/page1" sx={{margin: 1}}>Page 1</Button>

      <Button variant="contained" component={Link}  to="/page2" sx={{margin: 1}}>Page 2</Button>
      <Button variant="contained" component={Link} to="/page3" sx={{margin: 1}}>Page 3</Button>
    </Container>
  );
}

export default Home;
