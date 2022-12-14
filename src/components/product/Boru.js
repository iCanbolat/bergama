import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { styled } from "@mui/material/styles";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


const ResponsiveGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    marginBottom: "15vh",
  },
}));

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

const ColorButton = styled(Button)({
  borderColor: "grey",
  backgroundColor:'black',
  color:'white',
  textTransform:'capitalize',
  "&:hover": {
    borderColor: "black",
    backgroundColor:'white',
    color:'black'
  },
});

const Boru = () => {
  const history = useNavigate();

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
              Bergama End??stri
            </Typography>
            <StyledTyp
              variant="h3"
              sx={{ color: "white", letterSpacing: "2px" }}
              gutterBottom
              component="div"
            >
              Boru Hatt?? Makaralar??
            </StyledTyp>
          </Box>
        </Grid>

        {/* Boru */}
        <Grid container sx={{ minHeight: "29em" }}>
        <Container sx={{ mt: 4 }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", letterSpacing: "2px" }}
          >
            Boru Hatt?? Makaralar??
          </Typography>
          <hr></hr>
          <Grid container>
            <ResponsiveGrid item md={6} sm={12}>
              <AwesomeSlider>
                <div data-src="http://bergamaindustry.com/wp-content/uploads/2021/05/ps2.jpg" />
                <div data-src="http://bergamaindustry.com/wp-content/uploads/2021/05/ps4.jpg" />
                <div data-src="http://bergamaindustry.com/wp-content/uploads/2021/05/ps3.jpg" />
              </AwesomeSlider>
            </ResponsiveGrid>
            <Grid item sx={{ px: 5 }} md={6}>
              <Typography variant="body1">
                Boru makaralar??n??n Shop Prefabrikasyonu, ??retilen ??r??nlerde en
                y??ksek kaliteyi sa??larken saha kurulum maliyetlerini d??????rmenin
                kan??tlanm???? bir yoludur. Boru makaralar??, di??er makaralara
                ba??lant??y?? kolayla??t??rmak i??in genellikle flan??l??d??r. Bu
                makaralar??n imalat??, gerekli altyap??ya sahip uzman imalat
                firmalar?? taraf??ndan yap??lmal??d??r.<br></br>
                ???Bergama Sanayi, Enerji, Petrol & Gaz ve Kimya End??strileri i??in
                karbon ??elik, ala????ml?? ??elik ve paslanmaz ??elik olarak boru
                makaralar?? ??retmektedir.
              </Typography>
              <Typography variant="body1">
                Bile??enler,
                <ul>
                  <li>
                    Karbon ??elikleri, Standart, D??????k S??cakl??k ve ??htisas (A516,
                    A105, A333, LF2, vb.)
                  </li>
                  <li>Paslanmaz ??elik 316/L</li>
                  <li>Paslanmaz ??elik 304/L</li>
                  <li>Paslanmaz ??elikler 321/H, 316H, 304H</li>
                  <li>Duplex UNS 31803, 2205</li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{width : '100%', justifyContent:'center',display:'flex',my:3}}>
            <ColorButton onClick={() => history('/urunler')} startIcon={<ChevronLeftIcon/>} variant="contained">??r??nlerimiz</ColorButton>
            </Box>
        </Container>
         </Grid>

      </Grid>
    </>
  )
}

export default Boru