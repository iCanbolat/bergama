import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { styled } from "@mui/material/styles";
import Navbar from "../Navbar";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useNavigate } from "react-router-dom";


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

const Celik = () => {
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
              ??elik Yap??lar
            </StyledTyp>
          </Box>
        </Grid>

        {/* ??elik ????erik */}
        <Grid container sx={{ minHeight: "29em" }}>
          <Container sx={{ mt: 4 }}>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", letterSpacing: "2px" }}
            >
              ??elik Yap??lar
            </Typography>
            <hr></hr>
            <Grid container>
              <ResponsiveGrid item md={6} sm={12}>
                <AwesomeSlider>
                  <div data-src="http://bergamaindustry.com/wp-content/uploads/2021/05/st00.jpg" />
                  <div data-src="http://bergamaindustry.com/wp-content/uploads/2021/05/st2.jpg" />
                  <div data-src="http://bergamaindustry.com/wp-content/uploads/2021/05/st3.jpg" />
                </AwesomeSlider>
              </ResponsiveGrid>
              <Grid item sx={{ px: 5 }} md={6}>
                <Typography variant="body1">
                  Bergama Sanayi, petrol ve gaz end??strisi, petrokimya tesisleri
                  ve enerji santralleri i??in proses ekipmanlar?? ve yap??sal ??elik
                  ??reticisidir. Modern ??retim altyap??m??z ve deneyimli kadromuz
                  sayesinde proje ihtiya??lar??n??za g??re ??zel tasar??m ekipmanlar
                  ??retiyoruz.
                  <br />
                  Plaka i??leri ve k??????k ??l??ekli ??elik yap??
                  <ul>
                    <li>Y??????nlar ve bacalar</li>
                    <li>Hazneler</li>
                    <li>Bunkerler ve aksesuarlar</li>
                    <li>Depolama tanklar??</li>
                    <li>Alt, ??at?? ve kabuk plakalar??</li>
                  </ul>
                  Custom designed steel structures
                  <ul>
                    <li>Build up sections</li>
                  </ul>
                  Teknolojik ve mekanik bile??enler
                  <ul>
                    <li>Tank ve boru destek yap??lar??</li>
                    <li>Kanal</li>
                    <li>Yatay veya dikey de??irmenler</li>
                    <li>HRSG</li>
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
  );
};

export default Celik;
