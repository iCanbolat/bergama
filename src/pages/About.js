import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../components/Navbar";
import Standart from "../components/about/Standart";
import AboutUs from "../components/about/AboutUs";
import Image from "../images/ab.jpg";
import { styled } from "@mui/material/styles";

const StyledTyp = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    textAlign: "center",
    fontSize: "35px",
  },
  [theme.breakpoints.up("md")]: {
    textAlign: "center",
    fontSize: "2.2em",
  },
}));

const About = () => {
  return (
    <>
      <Grid container>
        <Box
          component="div"
          sx={{
            width: "100%",
            position: "absolute",
            top: 0,
            height: "70%",
            backgroundColor: "#00000047",
          }}
        ></Box>
        <Grid
          item
          md={12}
          style={{
            height: "70vh",
            width: "100%",
            backgroundImage: "url(http://bergamaindustry.com/wp-content/uploads/2021/05/6-scaled-e1622030246671-1000x400.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* Custom Header */}
          <Navbar />

          {/* Banner */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "70%",
              flexDirection: "column",
              position:'absolute',
              width:'100%'
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "white", letterSpacing:'2px' }}
              gutterBottom
              component="div"
            >
              Bergama Endüstri
            </Typography>
            <StyledTyp
              variant="h3"
              sx={{ color: "white", letterSpacing:'3px'  }}
              gutterBottom
              component="div"
            >
              Hakkımızda
            </StyledTyp>
          </Box>
        </Grid>
        {/* About Us */}
        <AboutUs />
        {/* Standarts */}
        <Standart />
      </Grid>
    </>
  );
};

export default About;
