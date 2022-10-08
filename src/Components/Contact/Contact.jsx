import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import "./Contact.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Contact = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} class="flex" style={{marginTop: "-50px"}}>
        <h1 className="reach-out">React out to Me!</h1>
        <Grid
          container
          spacing={1}
          // direction="column"
          justifyContent="center"
          alignItem="center"
          data-aos="zoom-in-up"
          data-aos-delay="0"
          data-aos-easing="ease"
          data-aos-duration="2000"
          item
        >
          <Grid xs={10} md={8} order={{ xs: 3, md: 1 }} class="contact">
            <p>WANT TO WORK WITH ME SAY HELLO MY DM ARE OPEN FOR EVERYONE</p>
            <h2>Pakistani || Aspiring Software developer || Tech Guy</h2>
            <p>
              <AddLocationAltIcon /> Hyderabad , Pakistan
            </p>
            <h3>Open for work: Yes</h3>
            <div className="Icons">
              <a href="https://github.com/Sameer-472">
                <GitHubIcon id="github" className="social-media-icons" />
              </a>
              <a href="https://www.instagram.com/skywalker_sameer/">
                {" "}
                <InstagramIcon id="instagram" className="social-media-icons" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100009529212122">
                <FacebookIcon id="facebook" className="social-media-icons" />
              </a>
              <a href="https://twitter.com/Sameerkhan_45">
                <TwitterIcon id="twitter" className="social-media-icons" />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-sameer-27ba2a172/">
                <LinkedInIcon id="linkedin" className="social-media-icons" />
              </a>
            </div>
          </Grid>
          <Grid xs={10} md={2} order={{ xs: 1, md: 1 }}>
            <img src="../../Images/myprofile.jpeg" className="mydp" alt="" />
          </Grid>
        </Grid>
        <div className="footer">
          <p>Made with my 💜</p>
          <p>Developer Sameer</p>
        </div>
      </Box>
    </div>
  );
};
