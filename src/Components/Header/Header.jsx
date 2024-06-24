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
import { animateScroll as scroll } from 'react-scroll'
import Resume from "../../Assets/Sameer Resume.pdf"


const Header = () => {
  const scrollToContact = () => {
    scroll.scrollTo(4000)
  }
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {/* <h1>aksjfhoqwi</h1> */}
      <div className="mt-10">
        <Box sx={{ flexGrow: 1 }} class="flex" className="intro"
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-easing="ease-in-out-quart"
          data-aos-duration="1000">
          <Grid
            container
            spacing={1}
            // direction="column"
            justifyContent="space-evenly"
            alignItem="center"
          >
            <Grid item xs={10} md={5}>
              <div>
                <div id="myInfo" className="mt-10">
                  <div className="flex flex-row justify-center" id="name">Hi all i&apos;m Sameer</div>
                  I am a Front end & web3 developer completed my graduation in Information technology & having expertise in various Front end technologies JavaScript / Reactjs / Typescript /Material UI / ShadeCn. I also worked with Ethereum , solidity , Ethers.js and knowledge of Dapps and some other cool libraries and frameworks🚀
                  <div className="Icons">
                    <a href="https://github.com/Sameer-472"><GitHubIcon id="github" className="social-media-icons" /></a>
                    <a href="https://www.instagram.com/skywalker_sameer/"> <InstagramIcon id="instagram" className="social-media-icons" /></a>
                    <a href="https://www.facebook.com/profile.php?id=100009529212122"><FacebookIcon id="facebook" className="social-media-icons" /></a>
                    <a href="https://twitter.com/Sameerkhan_45"><TwitterIcon id="twitter" className="social-media-icons" /></a>
                    <a href="https://www.linkedin.com/in/muhammad-sameer-27ba2a172/"><LinkedInIcon id="linkedin" className="social-media-icons" /></a>
                  </div>
                  <div className="mt-10 space-x-4 flex flex-row justify-center">
                    <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={scrollToContact} duration={50} smooth={false} variant="contained">Contact Me</button>
                    <a href={Resume} target="_blank" rel="noreferrer">
                      <button type="button" class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Resume</button>
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={5} md={5} className="flex justify-end items-center">
              <img className="rounded-full w-[50%]" id="img" src="../../Images/profile.jpg" alt="profile" />
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Header;
