import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./Experience.css";
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
      startDate: "Jun 2022",
      endDate: "August 2023"
    },
    {
      companyName: "SMIT",
      designation: "MERN Stack Trainer",
      img: smit,
      techStack: "Javascript , HTML5 , CSS3 , Github",
      startDate: "February 2022",
      endDate: "May 2022"
    },
    {
      companyName: "Ghani Business Solutions",
      designation: "Blockchain Developer Intern",
      img: gbs,
      techStack: "Solidity , Hardhat , truffle , Openzeppline , Remix and React",
      startDate: "Sept 2021",
      endDate: "Feb 2022"
    },
  ]
  return (
    <>
      <div className="px-16">
        <div className="text-2xl my-5 font-semibold text-start">My Work Experience 🔰</div>
        <div id="divider"></div>
        <div className="grid gap-3 md:grid-cols-2 grid-cols-1 w-100">
          {experienceArr?.map(({ img, companyName, designation, endDate, startDate, techStack }, index) => (
            <div data-aos="fade-up"
              data-aos-delay="0"
              data-aos-easing="ease"
              data-aos-duration="2000" key={index} className="border-solid border-2 border-zinc-400 rounded-md w-100 p-5 hover:bg-[grey] transition">
              <div className="w-100">
                <div className="flex justify-between items-center">
                  <img className="uniLogo" src={img} alt="" />
                  <h4>{startDate} - {endDate}</h4>
                </div>
                <div className="text-lg font-semibold">{companyName}</div>
                <h3>{designation}</h3>
                <p>Tech Stack: {techStack}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
