import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const ResponsiveGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up("xs")]: {
    textAlign: "center",
  },
}));

const NewsCard = () => {
  const history = useNavigate();

  return (
    <>
      <ResponsiveGrid item sm={4} xs={12} md={4}>
        <div class="my-card">
          <div class="box">
            <Grid container flexDirection="column">
              <Grid sx={{ mb: 1, marginTop: "-5em" }} item md={12} sm={12}>
                {" "}
                <img
                  style={{ width: "100%" }}
                  src="http://bergamaindustry.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-05-at-10.17.43-1-500x300.jpeg"
                ></img>
              </Grid>
              <Grid item sm={12}>
                <Typography gutterBottom color="white" variant="h6">
                  SOCAR Türkiye fabrikamızda
                </Typography>
              </Grid>
              <Grid item sm={12} sx={{ px: 1 }}>
                <Typography color="white" variant="body2">
                  SOCAR Türkiye teknik ve ticari ekibini fabrikamızda
                  ağırlamaktan mutluluk duyduk. Tedarikçi onay sürecinde bizimle
                  paylaştıkları değerli görüş ve önerileri için kendilerine
                  teşekkür ederiz.
                </Typography>
              </Grid>
              <Grid item sm={12}>
                {" "}
                <Button
                  variant="contained"
                  onClick={() => history('/haber-detay')}
                  sx={{ textTransform: "capitalize" }}
                >
                  Devamını Oku
                </Button>{" "}
              </Grid>
            </Grid>
          </div>
        </div>
      </ResponsiveGrid>
    </>
  );
};

export default NewsCard;
