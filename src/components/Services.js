import React, { useEffect } from "react";
import { Grid, Typography, Container, Box, Fade, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import 'aos/dist/aos.css'; 
import Aos from "aos";

const StyledButton = styled(Button)(({ theme }) => ({
  textAlign: "center",
  color: 'white',
  marginTop:'3vh',
  "&:hover": {
    backgroundColor: "white",
    color:'black',
    borderColor:'white'
  },
}));

const items = [
  {
    id:1,
    image:'https://cdn-diedp.nitrocdn.com/MtkpqctDrKeXdcxTGYputYNqODjTEBHl/assets/static/optimized/rev-8644acb/wp-content/uploads/2019/05/banner-bg2-Copy.jpg'
  },
  {
    id:2,
    image:'http://www.socar.com.tr/images/default-source/default-album/petkim-web1.jpg?sfvrsn=44c997ac_0'
  },
  {
    id:3,
    image:'https://medyascope.tv/wp-content/uploads/2020/01/termik-santral.jpg'
  },
  {
    id:4,
    image:'https://www.trigonmekatronik.com/wp-content/uploads/2019/08/atik-su-aritma-otomasyonu.png'
  }
]

const Services = () => {
  const [show, setShow] = React.useState(false);
  const [image , setImage] = React.useState('')

  useEffect(() => {
    Aos.init({
      duration: 2000
    })
  }, [])
  

  const history = useNavigate();

  const handleImage = (id) =>{
    const image = items.find(item => item.id == id)
    setImage(image.image)
    setShow(true)
}

  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{ backgroundColor: "#1a1d1f", minHeight: "45em" }}
      >
        <Grid item sx={{ width: "50%", marginTop:'4em' }}>
          <Typography
            variant="h5"
            component="div"
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bolder",
              marginBottom: "6vh",
            }}
          >
            HİZMET VERİLEN BAŞLICA SEKTÖRLER
          </Typography>
          <Box
            sx={
              show
                ? {
                    height: "100%",
                    width: "100%",
                    position: "relative",
                  }
                : { height: "100%", width: "100%", position: "relative" }
            }
          >
            {show ? (

            <Fade in={show} timeout={{ exit: 500, enter: 500 }}>
              <Box
                sx={
                  show
                    ? {
                        backgroundImage:
                          `url(${image})`,
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'cover',
                        height: "70%",
                        width: "100%",
                        position: "relative",
                      }
                    : { height: "70%", width: "100%", position: "relative" }
                }
              ></Box>
            </Fade>
            ) :(
              <Box
                sx={
             {
              backgroundImage:`url(https://cdn-diedp.nitrocdn.com/MtkpqctDrKeXdcxTGYputYNqODjTEBHl/assets/static/optimized/rev-8644acb/wp-content/uploads/2019/05/banner-bg2-Copy.jpg)`,
              backgroundRepeat:'no-repeat',
              backgroundSize:'cover',
              height: "70%",
              width: "100%",
              position: "relative",
          }
                }
              ></Box>
              
            )}
            <Container sx={{ mt: 5, position: "absolute", top: 0 }}>
              <Grid container flexDirection="column">
                <Grid data-aos='fade-right' item md={5} sx={{ mt: 5 }}>
                  <Typography
                    variant="h4"
                    color="white"
                    sx={{
                      cursor: "pointer",
                      marginBottom: "30%",
                      letterSpacing: "2px",
                    }}
                    onMouseEnter={() => handleImage(items[0].id)}
                    onMouseLeave={() => setShow(false)}
                  >
                    PETROL & GAZ
                  </Typography>
                </Grid>

                <Grid data-aos='fade-left' item md={12}>
                  <Typography
                    variant="h4"
                    color="white"
                    sx={{
                      cursor: "pointer",
                      textAlign: "end",
                      marginBottom: "30%",
                      letterSpacing: "2px",
                    }}
                    onMouseEnter={() => handleImage(items[1].id)}
                    onMouseLeave={() => setShow(false)}
                  >
                    PETROKİMYA
                  </Typography>
                </Grid>
                <Grid item md={6} data-aos='fade-right'>
                  <Typography
                    variant="h4"
                    color="white"
                    sx={{
                      cursor: "pointer",
                      marginBottom: "30%",
                      letterSpacing: "2px",
                    }}
                    onMouseEnter={() => handleImage(items[2].id)}
                    onMouseLeave={() => setShow(false)}
                  >
                    ENERJİ SANTRALİ
                  </Typography>
                </Grid>
                <Grid item md={12} data-aos='fade-left'>
                  <Typography
                    variant="h4"
                    color="white"
                    sx={{
                      cursor: "pointer",
                      textAlign: "end",
                      letterSpacing: "2px",
                    }}
                    onMouseEnter={() => handleImage(items[3].id)}
                    onMouseLeave={() => setShow(false)}
                  >
                    SU ARITMA TESİSLERİ
                  </Typography>
                </Grid>
              </Grid>
              
            </Container>
            
            <Grid item sx={{ textAlign: "center" }}>
              <StyledButton
                variant="outlined"
                onClick={() => history('/urunler')}
                size="large"
                sx={{ color: "white", borderColor: "white", textTransform:'capitalize' }}
              >
                Tümünü Gör
              </StyledButton>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
