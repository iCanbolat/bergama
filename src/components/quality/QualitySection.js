import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";


const QualitySection = () => {
  return (
    <>
      <Grid container sx={{ minHeight: "70vh" }}>
        <Container sx={{ my: 5 }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", letterSpacing: "2px" }}
          >
            Sertifikalarımız
          </Typography>
          <hr></hr>
          <Grid container spacing={4}>
            <Grid item  xs={12} sm={12} md={4}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ textAlign: "center", letterSpacing: "2px" }}
              >
                ISO
              </Typography>
              <AwesomeSlider style={{height:'25em'}} bullets={false}>
                <div data-src="http://bergamaindustry.com/wp-content/uploads/2014/08/14001-500x707.jpg" />
                <div data-src="http://bergamaindustry.com/wp-content/uploads/2014/08/45001-500x707.jpg" />
                <div data-src="http://bergamaindustry.com/wp-content/uploads/2014/08/45001-500x707.jpg" />
              </AwesomeSlider>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ textAlign: "center", letterSpacing: "2px" }}
              >
                ASME
              </Typography>
              <AwesomeSlider style={{height:'25em'}} bullets={false}>
                <div data-src="http://bergamaindustry.com/wp-content/uploads/2014/08/ASME-S-500x707.jpg" />
                <div data-src="http://bergamaindustry.com/wp-content/uploads/2014/08/ASME-U-500x707.jpg" />
                <div data-src="http://bergamaindustry.com/wp-content/uploads/2014/08/ASME-U2-500x707.jpg" />
              </AwesomeSlider>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ textAlign: "center", letterSpacing: "2px" }}
              >
                EN
              </Typography>
              <AwesomeSlider style={{height:'25em'}} bullets={false}>
                <div data-src="http://bergamaindustry.com/wp-content/uploads/2014/08/EN-1090-Certificate-EN-500x707.jpg" />
                <div data-src="http://bergamaindustry.com/wp-content/uploads/2014/08/EN-ISO-3834-Certificate-EN-500x707.jpg" />
              </AwesomeSlider>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default QualitySection;
