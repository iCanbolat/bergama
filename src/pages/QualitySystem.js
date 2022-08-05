import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Navbar from "../components/Navbar";
import QualitySection from "../components/quality/QualitySection";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { styled } from "@mui/material/styles";
import Kalite from "../images/kalite.jpg"

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

const QualitySystem = () => {
  return (
    <>
        <Grid container>
        <Box component='div' sx={{width:'100%',position:'absolute',top:0,height:'70%',backgroundColor:'#00000067'}}></Box>
        <Grid
          item
          md={12}
          style={{
            height: "70vh",
            width: "100%",
            backgroundImage:
              `url(${Kalite})`,
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
              position:'absolute',
              width:'100%',
              flexDirection: "column",
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
              Kalite Sistemleri
            </StyledTyp>
          </Box>
        </Grid>
        
        {/* Product Section */}
        <Grid container sx={{ minHeight: "40vh" }}>
        <Container sx={{ my: 5 }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", letterSpacing: "2px" }}
          >
            Kalite Sistemleri
          </Typography>
          <hr></hr>
          <Grid container>
            <Grid item md={3}>
              <AwesomeSlider  >
                <div data-src="https://asmirabelgelendirme.com/upload/images/iso-45001-6167.jpg" />
                <div data-src="https://www.devirpatent.com/boyutlandir.php?src=upload/icerik/055b61b55c859f0792bf.jpg&w=620&h=260" />
                <div data-src="https://www.tuv.at/wp-content/uploads/2021/10/tuv-austria-group-600x600px.png" />
                <div data-src="https://www.eurolab.com.tr/images/spesifik/iec-test-laboratuvari.jpg" />
              </AwesomeSlider>
            </Grid>
            <Grid item sx={{ px: 5 }} md={9}>
              <Typography variant="body1">
                Dinamik yapı ve modern üretim altyapısı, Bergama Industry'nin
                karmaşık projeleri esnek ve çok yönlü bir şekilde yönetmesine
                olanak tanımaktadır. Teslimat sürelerinde ve maliyetlerde
                optimizasyon sağlayarak sunulan hizmetin kalitesini
                arttırmaktadır. Hizmet kalitesine ve çevresel etkinin
                azaltılması odak noktamızır. Bu sebeple üretim performansının
                iyileştirilmesinin her şeyden önce hem çalışanları hem de
                çevreyi korumaktan geldiğine inanıyoruz. Bergama Endüstri,
                mevcut mevzuata uygun entegre bir kalite, sağlık ve güvenlik
                yönetim sistemi geliştirmiştir. İlgili sertifikalar EN ISO 9001,
                ISO14001 ve ISO 45001.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        </Grid>
        
        {/* Products */}
        <QualitySection/>

      </Grid>
    </>
  )
}

export default QualitySystem