import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const QualitySection = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }
  return (
    <>
      <Grid container sx={{ minHeight: "70vh" }}>
        <Container sx={{ my: 5 }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", letterSpacing: "2px" }}
          >
            Sertifikalarımız
          </Typography>
          <hr></hr>
          <Grid container justifyContent="center" flexDirection="row">
            <Grid item>
              <Box
                sx={{
                  bgcolor: "transparent",
                  display: "flex",
                  height: "100%",
                  width: "50rem",
                }}
              >
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  sx={{
                    borderRight: 1,
                    borderColor: "divider",
                  }}
                >
                  <Tab label="ISO" {...a11yProps(0)} />
                  <Tab label="ASME" {...a11yProps(1)} />
                  <Tab label="EN" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                  <AwesomeSlider
                    style={{
                      height: "30em",
                      width: "20em",
                      left: "50%",
                    }}
                    bullets={false}
                  >
                    <div data-src="http://bergamaindustry.com/wp-content/uploads/2014/08/14001-500x707.jpg" />
                    <div data-src="http://bergamaindustry.com/wp-content/uploads/2014/08/45001-500x707.jpg" />
                    <div data-src="http://bergamaindustry.com/wp-content/uploads/2014/08/45001-500x707.jpg" />
                  </AwesomeSlider>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <AwesomeSlider
                    style={{
                      height: "30em",
                      width: "20em",
                      left: "50%",
                    }}
                    bullets={false}
                  >
                    <div data-src="http://bergamaindustry.com/wp-content/uploads/2014/08/ASME-S-500x707.jpg" />
                    <div data-src="http://bergamaindustry.com/wp-content/uploads/2014/08/ASME-U-500x707.jpg" />
                    <div data-src="http://bergamaindustry.com/wp-content/uploads/2014/08/ASME-U2-500x707.jpg" />
                  </AwesomeSlider>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <AwesomeSlider
                    style={{
                      height: "30em",
                      width: "20em",
                      left: "50%",
                    }}
                    bullets={false}
                  >
                    <div data-src="http://bergamaindustry.com/wp-content/uploads/2014/08/EN-1090-Certificate-EN-500x707.jpg" />
                    <div data-src="http://bergamaindustry.com/wp-content/uploads/2014/08/EN-ISO-3834-Certificate-EN-500x707.jpg" />
                  </AwesomeSlider>
                </TabPanel>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default QualitySection;
