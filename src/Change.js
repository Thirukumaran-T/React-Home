import React from 'react';
import { Button, Container, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Change = ({ title, showContent, NotActive, Submit }) => {
  return (
    <Container>
      <h1>{title}</h1>
      {showContent && (
        <>
          <TextField
            label="Name"
        variant="outlined"

            sx={{ marginTop: 2, display: 'block' }}
            disabled={NotActive} />
     <TextField
        label="Age"
        variant="outlined"
            sx={{ marginTop: 2, display: 'block' }}

            disabled={NotActive}/>
        </>
      )}
      <Button variant="contained" component={Link} to="/" sx={{ marginTop: 2 }}>Home</Button>
      {Submit && (<Button variant="contained" sx={{ marginTop: 2, marginLeft: 1 }}>Submit</Button>
      )}
</Container>
  );
};

export default Change;
