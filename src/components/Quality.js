import React from "react";
import {
  Button,
  Grid,
  Toolbar,
  Typography,
  Container,
  Box,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const StyledButton = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: "white",
  },
  textTransform: "capitalize",
}));

const Quality = () => {
  const history = useNavigate();

  return (
    <Container>
      <Grid container sx={{ height: "30em", paddingY: "5em" }}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            color="black"
            sx={{ fontWeight: "bold", textAlign: "center" }}
            variant="h6"
          >
            Kalite Sistemleri
          </Typography>
        </Grid>
        <Grid container sx={{ py: 5 }}>
          <Grid item md={2} sm={3} xs={12}>
            <Box
              sx={{
                width: "100%",
                height: 200,
                backgroundColor: "#f7f7f7",
                position: "relative",
              }}
            >
              <Box
                component="img"
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: 120,
                  top: "20%",
                }}
                src="https://floragardenhotels.com/beach/wp-content/uploads/2019/11/iso-14001.png"
              ></Box>
            </Box>
          </Grid>
          <Grid item md={8} sm={6} xs={12} sx={{ textAlign: "start", px: 5, }}>
            <Typography variant="h5" gutterBottom component="div">
              ISO Sertifikaları
            </Typography>
            <Typography variant="body2" gutterBottom component="div">
              Dinamik yapı ve modern üretim altyapısı, Bergama Endüstri'nin
              karmaşık projeleri çok yönlülük ve esneklikle yönetmesine olanak
              tanıyarak, müşterilere verilen hizmetin kalitesini yansıtan
              teslimat sürelerinin ve rekabetçi maliyetlerin optimizasyonunu
              sağlar.
            </Typography>
          </Grid>
          <Grid sx={{ textAlign: "end" }} item md={2} sm={2} xs={8}>
            <StyledButton onClick={() => history('/kalite-sistemleri')} variant="text" endIcon={<ArrowRightAltIcon />}>
              Tümünü gör
            </StyledButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Quality;
