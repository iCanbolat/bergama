import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  Typography,
  Container,
  Tab,
  Tabs,
  Fade,
} from "@mui/material";
import { Box, textAlign } from "@mui/system";
import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Services from "../components/Services";
import Products from "../components/Products";
import Quality from "../components/Quality";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Foto from "../images/fotoo.jpg"
import Loader from "../components/loader/Loader"
import 'aos/dist/aos.css'; 
import Aos from "aos";

const ResponsiveAbout = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    marginBottom: "12vh",
  },
  [theme.breakpoints.up("lg")]: {
    marginBottom: "14vh",
  },
  [theme.breakpoints.up("xl")]: {
    marginBottom: "2vh",
  },
}));
const StyledTyp = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    textAlign: "center",
    fontSize: "30px",
  },
  [theme.breakpoints.up("lg")]: {
    textAlign: "center",
    fontSize: "50px",
  },
}));

const ColorButton = styled(Button)({
  borderColor: "grey",
  "&:hover": {
    borderColor: "black",
    backgroundColor:'black',
    color:'white'
  },
});

const Home = () => {
  const [load, setLoad] = React.useState(true)
  const history = useNavigate();

  useEffect(() => {
    setLoad(false)
    Aos.init({
      duration:2000
    })
  }, [])

  return (
    <>
    {load ? (
      <Loader/>
    ): (
      <>
      <Fade in={!load} timeout={{enter: 1000}}>
      <Grid container>
        <Box sx={{backgroundColor:'#00000069',position:'absolute', width:'100%',height:'100%'}}></Box>
        <Grid
          item
          md={12}
          style={{
            height: "100vh",
            width: "100%",
            backgroundImage:
              `url(${Foto})`,
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
              height: "100%",
              flexDirection: "column",
              position:'relative'
            }}
          >
            <StyledTyp
              variant="h3"
              sx={{ color: "white" }}
              gutterBottom
              component="div"
            >
              BERGAMA INDUSTRY
            </StyledTyp>
          </Box>
        </Grid>
      </Grid>
      </Fade>
      {/* About */}
      <ResponsiveAbout sx={{ minHeight: "37em", paddingTop:'7em'  }}>
        <Grid container  >
          <Grid data-aos='fade-right' item md={6} sm={12} sx={{ position: "relative", textAlign:{ xs: 'center', md:'unset' } }}>
            <Grid container>
              <Grid item sm={12}>
                <Box
                  component="img"
                  className="responsive1"
                  src="https://media.istockphoto.com/photos/oil-refinery-chemical-petrochemical-plant-picture-id582256640?k=20&m=582256640&s=612x612&w=0&h=E7vwMZkuM7HHvUV9CHZvsRhrTymh0HBcGpxUU0toAPI="
                ></Box>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item sm={12}>
                <Box
                  component="img"
                  className="responsive2"
                  src="https://ehtmuhendislik.com/wp-content/uploads/2022/02/j3k5DMi0FWlhiFiptBrIFrjqumHa1LUhAuQM5chY-480x480.jpg"
                ></Box>
              </Grid>
            </Grid>

            <Grid container>
              <Grid item sm={12}>
                <Box
                  component="img"
                  className="responsive"
                  src="https://media.istockphoto.com/photos/sugar-factory-industry-line-production-cane-process-picture-id1195289766?k=20&m=1195289766&s=612x612&w=0&h=Z6m-XatZojcP_DsFJgnRncZ1DXxh42c4vbhN_qTz3Tc="
                ></Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid data-aos='fade-left' item md={6} sm={12} alignItems='center' flexDirection="column">
            <StyledTyp
              variant="h4"
              sx={{ color: "black", fontWeight: "bolder", mb: 3 }}
              gutterBottom
              component="div"
            >
              BERGAMA ENDÜSTRİ
            </StyledTyp>
            <Typography
              variant="body1"
              sx={{ color: "black", lineHeight: "2.2rem", mt:5 }}
              gutterBottom
              component="div"
            >
              Bergama Endüstri, petrol ve gaz, petrokimya, enerji santralleri ve
              diğer endüstriyel tesisler için çelik yapılar, ısı eşanjörleri,
              basınçlı kaplar, boru makaraları ve kablo kanalları tasarlar ve
              üretir. Bergama Sanayi 60.000 m2 alan üzerine kurulu toplam 15.000
              m2 kapalı ve 10.000 m2 stok alanına sahip modern üretim altyapısı
              ile müşterilerine hızlı ve zamanında ürün tedariği sağlayan
              güvenilir bir çözüm ortağıdır. Bergama Sanayi için kalite ve
              standartlar üretim felsefesinin vazgeçilmez bir parçası olup,
              ilgili standartlara uygunluk her aşamada titizlikle takip
              edilmekte ve belgelendirilmektedir.
            </Typography>

            <ColorButton
              sx={{
                mt: 4,
                color: "black",
                textTransform: "capitalize",
                px: 5,
                py: 1,
                
              }}
              onClick={() => {
                history("/hakkimizda");
                window.scroll(0, 0);
              }}
              variant="outlined"
            >
              Hakkımızda
            </ColorButton>
          </Grid>
        </Grid>
      </ResponsiveAbout>

      {/* Hizmetler */}
      <Services />

      {/* Ürünler */}
      <Products />

      {/* Kalite */}
      <Quality />
      </>
    )}
      
    </>
  );
};

export default Home;
