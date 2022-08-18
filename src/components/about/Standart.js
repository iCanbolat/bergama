import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../../images/endustri.jpg";

const Standart = () => {
  return (
    <Grid
      container
      justifyContent="center"
      direction="row"
      alignItems="center"
      sx={{ minHeight: "80vh", width: "100%" }}
    >
      <Container>
        <Grid container justifyContent='center' flexDirection='row'>

          <Grid item sx={{p:3}}>
            <video width='100%' height='100%' controls autoPlay>
                <source type="video/mp4" src='http://bergamaindustry.com/wp-content/uploads/2014/08/June_Bergama-industry_low-quality-1.mp4'></source>
            </video>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Standart;
