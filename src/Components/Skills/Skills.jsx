import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Aos from "aos";
import "aos/dist/aos.css";
import './Skills.css'

const Skills = () => {
  return (
    <>
      <div className="skills">
        <Box
          sx={{ flexGrow: 1 }}
          class="flex"
          className="intro"
        >
          <Grid
            container
            spacing={1}
            // direction="column"
            justifyContent="center"
            alignItem="center"
          >
            <Grid item xs={5} md={5} order={{xs: 2 , md: 1}}     data-aos="fade-up"
          data-aos-delay="0"
          data-aos-easing="ease"
          data-aos-duration="2000">
              <div>
                <img id="Skillimg" class="" src="../../Images/graph-man.svg" alt="" />
              </div>
            </Grid>
            <Grid item xs={10} md={5} order={{xs: 1 , md:1}}      data-aos="fade-right"
          data-aos-delay="0"
          data-aos-easing="ease"
          data-aos-duration="2000">
      <h1 id="myInfo" style={{marginTop: "40px"}}>WHAT I DO </h1>
      
              <div id="myInfo">
                <p>⚡ Crazy Front end Developer who always ready to explore every tech</p>
                <p>⚡ Develope highly interactive user interface for your web applications</p>
                <p>⚡ List of Skills that i have explored</p>
                <div className="skills-icons">
                {/* <i   class="devicon-html5-plain colored " ></i> */}
                <img src="https://img.icons8.com/color/50/000000/html-5.png"/>
                <img src="https://img.icons8.com/color/50/000000/javascript--v1.png"/>
                <img src="https://img.icons8.com/color/50/000000/css3.png"/>
                <img src="https://img.icons8.com/officel/50/000000/react.png"/>
                <img src="https://img.icons8.com/color/50/000000/material-ui.png"/>
                <img src="https://img.icons8.com/color/50/000000/bootstrap.png"/>
                <img src="https://img.icons8.com/color/48/000000/npm.png"/>
                <img src="https://img.icons8.com/color/50/000000/python.png"/>
          

                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Skills;
