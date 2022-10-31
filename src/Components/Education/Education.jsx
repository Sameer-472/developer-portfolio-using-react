import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import "./Education.css";
import Aos from "aos";

export const Education = () => {
  return (
    <>
      <div className="global-container">
        <Box sx={{ flexGrow: 1 }} class="flex">
          <Grid
            container
            spacing={1}
            // direction="column"
            justifyContent="center"
            alignItem="center"
            data-aos="flip-left"
            data-aos-delay="0"
            data-aos-easing="ease"
            data-aos-duration="2000"
            item
          >
            <Grid xs={10} md={10}>
              <h1>Education</h1>
              <img className="uniLogo" src="../../Images/gcu.jpeg" alt="" />
              <h2>
                <b>Goverment College University</b>
              </h2>
              <h3>Intermediate in Pre-Engineering</h3>
              <h5>January 2015 - December 2017</h5>
              <div id="divider"></div>
              <img className="uniLogo" src="../../Images/sindh.png" alt="" />
              <h2>
                <b>University of Sindh</b>
              </h2>
              <h3>Bachelor of science in Inforamtion technology</h3>
              <h5>January 2019 - Expected 2022</h5>
              <div id="divider"></div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};
