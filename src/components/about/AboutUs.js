import { Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    textAlign: "center",
    marginBottom: "8vh",
    marginTop: "8vh",
  },
  [theme.breakpoints.up("sm")]: {
    textAlign: "center",
    marginBottom: "8vh",
    marginTop: "8vh",
  },
  [theme.breakpoints.up("xs")]: {
    textAlign: "center",
    marginBottom: "10vh",
    marginTop: "10vh",
  },
}));

const AboutUs = () => {
  return (
    <Grid
      container
      justifyContent="center"
      direction="row"
      alignItems="center"
      sx={{ minHeight: "50vh", width: "100%" }}
    >
      <Container>
        <Grid container justifyContent="center" flexDirection="row">
          <Divider
            sx={{ backgroundColor: "#e82a2a", width: "1px" }}
            orientation="vertical"
            flexItem
          ></Divider>
          <StyledGrid item lg={5} md={10} xs={12} sx={{ px: 2 }}>
 
            <Typography variant="h5" sx={{ letterSpacing: "2px", mb:2 }} gutterBottom>
              Şirket Profili
            </Typography>
            <Typography variant="body1">
              Bergama Endüstri, petrol ve gaz, petrokimya, enerji santralleri ve
              diğer endüstriyel tesisler için çelik yapılar, ısı eşanjörleri,
              basınçlı kaplar, boru makaraları ve kablo kanalları tasarlar ve
              üretir. Bergama Sanayi 60.000 m2 alan üzerine kurulu toplam 15.000
              m2 kapalı ve 10.000 m2 stok alanına sahip modern üretim altyapısı
              ile müşterilerine hızlı ve zamanında ürün tedariği sağlayan
              güvenilir bir çözüm ortağıdır.
            </Typography>
          </StyledGrid>

          <Divider
            sx={{ backgroundColor: "#e82a2a", width: "1px" }}
            orientation="vertical"
            flexItem
          ></Divider>
          <StyledGrid item lg={5} md={10} xs={12} sx={{ px: 2 }}>
            <Typography variant="h5" sx={{ letterSpacing: "2px", mb:2 }} gutterBottom>
              Vizyon Misyon ve Değerlerimiz
            </Typography>
            <Typography variant="body1">
              ASME sertifikalı tesisatçılardan/kaynakçılardan oluşan ekibimiz,
              benzersiz çeşitlilikte kaynak işlemlerini (SMAW, SAW, TIG, MIG),
              malzemeleri (çelik, paslanmaz) ve küçük masa üstü imalatlardan
              büyük ASME basınçlı kaplara kadar uzanan ürünleri başarıyla
              üretebilir. Bergama Endüstri müşterilerine tasarım, tedarik,
              imalat, test ve dokümantasyon dahil komple çözümler sunmaktadır.
            </Typography>
          </StyledGrid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default AboutUs;
