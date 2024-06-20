import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import "./Experience.css";
import Aos from "aos";
import transviti from "../../Assets/companyLogos/transviti.jpeg"
import softsyncDev from "../../Assets/companyLogos/softsyncdev.jpeg"
import smit from "../../Assets/companyLogos/smit.jpeg"
import gbs from "../../Assets/companyLogos/gbsinn_logo.jpeg"

export const Experience = () => {
  const experienceArr = [
    {
      companyName: "Transviti",
      designation: "Front end developer",
      img: transviti,
      techStack: "React , Material UI , Tailwind CSS , Chart.js , Axios , Swagger , Git",
      startDate: "August 2023",
      endDate: "Present"
    },
    {
      companyName: "SoftsyncDev",
      designation: "Front end developer and Blockchain Developer",
      img: softsyncDev,
      techStack: "React , Solidity , Remix , Hardhat , Openzeppline  , Javascript ",
      startDate: "May 2023",
      endDate: "July 2023"
    },
    {
      companyName: "SMIT",
      designation: "MERN Stack Trainer",
      img: smit,
      techStack: "Javascript , HTML5 , CSS3 , Github",
      startDate: "February 2023",
      endDate: "May 2023"
    },
    {
      companyName: "Ghani Business Solutions",
      designation: "Blockchain Developer Intern",
      img: gbs,
      techStack: "Solidity , Hardhat , truffle , Openzeppline , Remix and React",
      startDate: "Dec 2022",
      endDate: "March 2023"
    },
  ]
  return (
    <>
      <div className="">
        <Box sx={{ flexGrow: 1 }} class="flex">
          <Grid
            container
            spacing={1}
            // direction="column"
            justifyContent=""
            alignItem=""
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-easing="ease"
            data-aos-duration="2000"
            item
          >

            <Grid xs={10} md={12} >
              <div className="text-2xl my-5 font-semibold text-start">My Work Experience</div>
              {experienceArr?.map(({ img, companyName, designation, endDate, startDate, techStack }, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center">
                    <img className="uniLogo" src={img} alt="" />
                    <h4>{startDate} - {endDate}</h4>
                  </div>
                  <div className="text-lg font-semibold">{companyName}</div>
                  <h3>{designation}</h3>
                  <p>Tech Stack: {techStack}</p>
                  <div id="divider"></div>
                </div>
              ))}
            </Grid>

          </Grid>
        </Box>
      </div>
    </>
  );
};
