import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Grid } from '@mui/material';

const Loader = () => {
  return (
    <>
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight:'50vh' }}
    >
      <CircularProgress color='primary'/>
    </Grid>
  </>)
}

export default Loader
