import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "../images/news.png";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)({
    borderColor: "grey",
    "&:hover": {
      borderColor: "black",
      backgroundColor:'white',
      color:'black'
    },
  });

const NewsDetails = () => {
  const history = useNavigate();

  return (
    <>
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
            position: "absolute",
            width: "100%",
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

      <Grid container>
        <Container>
          <Grid
            container
            sx={{ minHeight: "30em" , my:3 }}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={12} sx={{ textAlign: "center" }}>
              <Box
                component="img"
                src="http://bergamaindustry.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-05-at-10.17.43-1-500x300.jpeg"
              ></Box>
            </Grid>
            <Grid item md={12}>
              <Typography variant="h5" textAlign='center' sx={{mb:4}}>
                SOCAR Türkiye Fabrikamızda
              </Typography>
              <Typography variant="body1">
                SOCAR Türkiye teknik ve ticari ekibini fabrikamızda ağırlamaktan
                mutluluk duyduk. Tedarikçi onay sürecinde bizimle paylaştıkları
                değerli görüş ve önerileri için kendilerine teşekkür ederiz.
              </Typography>
              <Box sx={{width:'100%',textAlign:'center', mt:3}}>
              <ColorButton onClick={() => history('/haberler')} sx={{backgroundColor:'black',textTransform:'capitalize' }} variant="contained" startIcon={<ChevronLeftIcon />}>Haberlere Dön</ColorButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default NewsDetails;
