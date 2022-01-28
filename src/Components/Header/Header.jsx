import React, { useEffect } from "react";
import "./Header.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Aos from "aos";
import "aos/dist/aos.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { animateScroll as scroll , Element} from 'react-scroll'


const Header = () => {
  const scrollToContact = ()=>{
    scroll.scrollTo(4000)
  }
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {/* <h1>aksjfhoqwi</h1> */}
      <header>
        <Box sx={{ flexGrow: 1 }} class="flex" className="intro"
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-easing="ease-in-out-quart"
                data-aos-duration="1000">
          <Grid
            container
            spacing={1}
            // direction="column"
            justifyContent="center"
            alignItem="center"

          >
            <Grid item xs={10} md={5}>
              <div>
                <div id="myInfo">
                <h1 id="name">Hi all i'm Sameer <img id="hand" src="../../Images/hand.gif" alt="" /></h1>
                  I am a web developer from Pakistan
                  <img src="../../Images/flag.png" alt="" id="flag" /> 
                   doing Bachelor of Science in Information technology having an experience of building Web  applications with JavaScript / Reactjs / Material UI and some other cool libraries and frameworks🚀
                  <div className="Icons">
                    <a href="https://github.com/Sameer-472"><GitHubIcon id="github" /></a>
                    <a href="https://www.instagram.com/skywalker_sameer/"> <InstagramIcon id="instagram" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100009529212122"><FacebookIcon id="facebook" /></a>
                    <a href="https://twitter.com/Sameerkhan_45"><TwitterIcon id="twitter" /></a>
                    <a href="https://www.linkedin.com/in/muhammad-sameer-27ba2a172/"><LinkedInIcon id="linkedin" /></a>
                  </div>
                  <div className="btn">
                    <button className="mybtn" onClick={scrollToContact} duration={50} smooth={false}>Contact Me</button>
                   <a href=" https://drive.google.com/file/d/1dnKonHSbePTWtVMn77YFT7tipLn2Geio/view?usp=sharing"><button className="mybtn">My Resume</button></a>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={5} md={5} >
              <div>
                <img id="img" src="../../Images/example-scene-2.svg" alt="" />
              </div>
            </Grid>
          </Grid>
        </Box>
      </header>
    </>
  );
};

export default Header;
