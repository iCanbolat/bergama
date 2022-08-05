import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "../images/news.png";
import Navbar from "../components/Navbar";
import NewsCard from "../components/news/NewsCard";

const News = () => {
  return (
    <>
        <Box component='div' sx={{width:'100%',position:'absolute',top:0,height:'70%',backgroundColor:'#00000047'}}></Box>
      <Grid
        item
        md={12}
        style={{
          height: "70vh",
          width: "100%",
          backgroundImage: "url(" + Image + ")",
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
            sx={{ color: "white", letterSpacing: "2px" }}
            gutterBottom
            component="div"
          >
            Bergama Endüstri
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: "white", letterSpacing: "2px" }}
            gutterBottom
            component="div"
          >
            Haberler
          </Typography>
        </Box>
      </Grid>

      {/* News */}

      <Grid container sx={{ minHeight: "80vh" }}>
        <Container>
          <Grid container spacing={2} sx={{ my: 5 }}>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default News;
