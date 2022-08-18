import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const ColorButton = styled(Button)({
  borderColor: "grey",
  backgroundColor: "black",
  color: "white",
  textTransform: "capitalize",
  "&:hover": {
    borderColor: "black",
    backgroundColor: "white",
    color: "black",
  },
});

const ProductSection = () => {
  const history = useNavigate();

  return (
    <>
      {/* Çelik Yapılar */}
      <Grid container sx={{ minHeight: "33em", backgroundColor: "#f8f9f9" }}>
        <Container sx={{ mt:5 }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", letterSpacing: "2px" }}
          >
            Ürünlerimiz
          </Typography>
          <hr></hr>

          <Grid container spacing={2}>
            {/* Çelik Yapılar */}
            <Grid item md={3} xs={12}>
              <Card sx={{ minWidth: "100%", height: "100%" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image="http://bergamaindustry.com/wp-content/uploads/2021/05/st2.jpg"
                  alt="çelik-yapı"
                />
                <CardContent sx={{ minHeight: "230px" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "center",
                      letterSpacing: "2px",
                      fontWeight: "bolder",
                    }}
                    gutterBottom
                  >
                    Çelik Yapılar
                  </Typography>
                  <Typography variant="body2" textAlign="center">
                    Bergama Sanayi, petrol ve gaz endüstrisi, petrokimya
                    tesisleri ve enerji santralleri için proses ekipmanları ve
                    yapısal çelik üreticisidir. Modern üretim altyapımız ve
                    deneyimli kadromuz sayesinde proje ihtiyaçlarınıza göre özel
                    tasarım ekipmanlar üretiyoruz.
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "center",
                    alignItems: "end",
                    alignContent: "space-between",
                  }}
                >
                  <ColorButton onClick={() => history('/celik')} variant="contained" size="small">
                    İncele
                  </ColorButton>
                </CardActions>
              </Card>
            </Grid>
            {/* Borular */}
            <Grid item md={3} xs={12}>
              <Card sx={{ minWidth: "100%", height: "100%" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image="http://bergamaindustry.com/wp-content/uploads/2021/05/ps2.jpg"
                  alt="boru hattı"
                />
                <CardContent sx={{ minHeight: "230px" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "center",
                      letterSpacing: "1px",
                      fontWeight: "bolder",
                    }}
                    gutterBottom
                  >
                    Boru Hattı Makaraları
                  </Typography>
                  <Typography variant="body2" textAlign="center">
                    Bergama Sanayi, Enerji, Petrol & Gaz ve Kimya Endüstrileri
                    için karbon çelik, alaşımlı çelik ve paslanmaz çelik olarak
                    boru makaraları üretmektedir.
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <ColorButton onClick={() => history('/boru')} variant="contained" size="small">
                    İncele
                  </ColorButton>
                </CardActions>
              </Card>
            </Grid>
            {/* Isı Değiştiriciler */}
            <Grid item md={3} xs={12}>
              <Card sx={{ minWidth: "100%", height: "100%" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image="http://bergamaindustry.com/wp-content/uploads/2021/05/ht1.png"
                />
                <CardContent sx={{ minHeight: "230px" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "center",
                      letterSpacing: "1px",
                      fontWeight: "bolder",
                    }}
                    gutterBottom
                  >
                    Isı Değiştiriciler
                  </Typography>
                  <Typography variant="body2" textAlign="center">
                    Isı eşanjörleri, ısıyı bir ortamdan diğerine aktarmak için
                    kullanılır. Bu ortamlar bir gaz, sıvı veya her ikisinin bir
                    kombinasyonu olabilir. Isı eşanjörleri, ihtiyaç duyulmayan
                    sistemlerden ısıyı yararlı olarak kullanılabilecek diğer
                    sistemlere aktararak bir sistemin enerji verimliliğini
                    iyileştirebilir.
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <ColorButton onClick={() => history('/isi')} variant="contained" size="small">
                    İncele
                  </ColorButton>
                </CardActions>
              </Card>
            </Grid>
            {/* Basınçlı kaplar */}
            <Grid item md={3} xs={12}>
              <Card sx={{ minWidth: "100%", height: "100%" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image="http://bergamaindustry.com/wp-content/uploads/2021/05/pv2.jpg"
                />
                <CardContent sx={{ minHeight: "230px" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "center",
                      letterSpacing: "1px",
                      fontWeight: "bolder",
                    }}
                    gutterBottom
                  >
                    Basınçlı Kaplar
                  </Typography>
                  <Typography variant="body2" textAlign="center">
                    Basınçlı kaplar, endüstriyel ve petrokimya proses
                    tesislerinde en önemli bileşenlerden biridir. Geniş anlamda
                    basınçlı kap terimi, çok çeşitli ünite ısı eşanjörleri,
                    reaktörler, depolama kapları, kolonlar, ayırma kapları vb.
                    kapsar.  
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center" }}>
                  <ColorButton onClick={() => history('/kap')} variant="contained" size="small">
                    İncele
                  </ColorButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>


          <Grid container sx={{my:4}} justifyContent='center' flexDirection='row' >
          <Grid item md={3.3} xs={12}>
              <Card sx={{ minWidth: "100%", height: "100%" }}>
                <CardMedia
                  component="img"
                  height="180"
                  image="https://img.archiexpo.com/images_ae/photo-g/53514-9587403.jpg"
                  alt="çelik-yapı"
                />
                <CardContent sx={{ minHeight: "190px" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "center",
                      letterSpacing: "2px",
                      fontWeight: "bolder",
                    }}
                    gutterBottom
                  >
                    Kablo Kanalları

                  </Typography>
                  <Typography variant="body2" textAlign="center">
                  Bergama Endüstri, ön galvaniz, sıcak daldırma galvaniz ve
                  paslanmaz çelik gibi farklı yüzeylere sahip metal tip kablo
                  kanalları ve ilgili destek sistemleri üretmektedir. Ürünlerimiz
                  IEC 61537 ve NEMA standartlarına göre üretilmekte ve
                  sertifikalandırılmaktadır.
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "center",
                    alignItems: "end",
                    alignContent: "space-between",
                  }}
                >
                  <ColorButton onClick={() => history('/celik')} variant="contained" size="small">
                    İncele
                  </ColorButton>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default ProductSection;
