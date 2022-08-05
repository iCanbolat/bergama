import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary:{
      main: blueGrey['A700']
    }
  }
})

const Contact = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        {/* Banner & Header */}
        <Box component='div' sx={{width:'100%',position:'absolute',top:0,height:'70%',backgroundColor:'#00000047'}}></Box>
        <Grid
          item
          md={12}
          style={{
            height: "30em",
            width: "100%",
            position:'relative'
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
              height: "105%",
              flexDirection: "column",
              position:'absolute',
              width:'100%',
              marginTop:'-7px'

            }}
          >
            <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12025.172156983046!2d28.98444199573974!3d41.1062907812753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf4fdb750a4f31745!2sBta!5e0!3m2!1str!2str!4v1658735122146!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  sx={{ border: "none", position:'absolute' }}
                  loading="lazy"
                ></iframe>
          </Box>
        </Grid>

        {/* Contact */}
        <Grid container  sx={{ minHeight: "80vh", py:4, backgroundColor: "#f8f9f9" }}>
          <Container>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{ height: "100%" }}
              
            >
              <Grid item textAlign="center" sx={{justifyContent:'center'}} sm={12} md={12}>
    
                <Card className="shadow" sx={{ width: "100%", height: "100%", p:1.7, borderRadius:'2%' }}>
                  <CardContent>
                    <Grid container>
                      <Grid item md={6} sm={12}>
                        <Typography sx={{my:3 , color:'black', fontWeight:'bolder'}} variant="h5">İletişim Kanalları</Typography>
                        <Typography  sx={{my:3 , color:'black', fontWeight:'bolder'}} gutterBottom variant="body1">
                          <LocationOnIcon fontSize="10px" /> Ayazağa, Vadistanbul, Azerbaycan Cd. 3B
                          D:1B Blok, 34485 Sarıyer/İstanbul
                        </Typography>
                        <Typography sx={{my:3 , color:'black', fontWeight:'bolder'}} gutterBottom variant="body1"><EmailIcon fontSize="10px"/> info@bergamaindustry.com</Typography>
                        <Typography sx={{my:3 , color:'black', fontWeight:'bolder'}} gutterBottom variant="body1"><LocalPhoneIcon fontSize="10px"/> +90 (212) 232 3030</Typography>
                      </Grid>
                  <Grid item md={6} sm={12} sx={{borderRadius:'90%',pl:2}}>
                    <Card sx={{ width: "100%", height: "100%", backgroundColor:'white',borderRadius:'3%'}}>
                      <CardContent>
                      <Typography
                      gutterBottom
                      variant="h6"
                      sx={{ letterSpacing: "2px", fontWeight:'bolder' }}
                      component="div"
                    >
                      İletişime Geçin
                    </Typography>
                    <FormControl sx={{ mt: 2 , width:'80%'}} fullWidth>
                      <TextField
                        sx={{ mb: 2 }}
                        label="Adınız"
                        color="primary"
                      />
                      <TextField
                        sx={{ mb: 2 }}
                        label="E-mailiniz"
                        color="primary"
                      />
                      <TextField
                        sx={{ mb: 2 }}
                        label="Konu"
                        color="primary"
                      />
                      <TextField
                        id="outlined-multiline-static"
                        label="Mesajınız"
                        color=""
                        multiline
                        rows={4}
                      />
                    </FormControl>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button fullWidth variant="contained" sx={{color:'white',backgroundColor:'#1a1d1f', width:'83%', textTransform:'capitalize'}} endIcon={<SendIcon />}>
                      Gönder
                    </Button>
                  </CardActions>
                      </CardContent>
                    </Card>              
                  </Grid>
                  </Grid>
                  </CardContent>
                </Card>
              </Grid>
           
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Contact;
