import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../components/Navbar";
import ProductSection from "../components/product/ProductSection";
import { styled } from "@mui/material/styles";

const StyledTyp = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xs")]:{
    textAlign:'center',
    fontSize:'35px'
  },
  [theme.breakpoints.up("md")]:{
    textAlign:'center',
    fontSize:'2.5em'
  },
}));

const Product = () => {
  return (
    <>
      <Grid container>
        <Box component='div' sx={{width:'100%',position:'absolute',top:0,height:'70%',backgroundColor:'#00000047'}}></Box>
        <Grid
          item
          md={12}
          style={{
            height: "70vh",
            width: "100%",
            backgroundImage:
              "url(https://cdn-diedp.nitrocdn.com/MtkpqctDrKeXdcxTGYputYNqODjTEBHl/assets/static/optimized/rev-8644acb/wp-content/uploads/2019/05/banner-bg2-Copy.jpg)",
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
            <StyledTyp
              variant="h3"
              sx={{ color: "white", letterSpacing: "2px" }}
              gutterBottom
              component="div"
            >
              Ürünlerimiz
            </StyledTyp>
          </Box>
        </Grid>
        
        {/* Product Section */}
        <ProductSection/>
        
      </Grid>
    </>
  );
};

export default Product;
