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
      description: `<p>• Developed & managed a variety of projects including social media applications and enterprise solutions.</p>
      <p>• Built a dynamic dashboard based on the latest plots and charts using g2plots, allowing users to dynamically change the layout.</p>
      <p>• Built a dynamic dashboard based on the latest plots and charts using g2plots, allowing users to dynamically change the layout.</p><p>• Guided interns in frontend development best practices, providing mentorship and technical support.</p>`,
      img: transviti,
      techStack: "React , Material UI , Tailwind CSS , Chart.js , Axios , Swagger , Git",
      startDate: "August 2023",
      endDate: "Present"
    },
    {
      companyName: "SoftsyncDev",
      designation: "Front end developer and Blockchain Developer",
      description: `<p>• Integrated Openzeppelin libraries for enhanced security, including reentrancy guards and access control mechanisms.</p>
      <p>• Achieved 30% faster contract testing and deployment by utilizing Hardhat for automation.</p>
      <p>• Developed and deployed secure Ethereum-based smart contracts using Solidity</p><p>• Implemented blockchain interactions and integrations using Ether.js.</p>`,
      img: softsyncDev,
      techStack: "React , Solidity , Remix , Hardhat , Openzeppline  , Javascript ",
      startDate: "Jun 2022",
      endDate: "August 2023"
    },
    {
      companyName: "SMIT",
      designation: "MERN Stack Trainer",
      description: `<p>• Providing guidance and support to students throughout the training program. Developing course content and curriculum for MERN stack
 training programs. Assessing student performance and progress and providing feedback to help them improve. </p> <p> • Responsible for conducting training sessions for individuals or groups of learners. This includes delivering lectures, leading hands-on
 coding exercises, conducting workshops, and facilitating discussions to ensure effective knowledge transfer and skill development.</p>`,
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
      description: `<p> • Developed and deployed smart contracts using Solidity.</p><p> • Utilized Hardhat for testing, compiling, and deploying smart contracts. </p> <p> • Integrated OpenZeppline libraries, including reentrancy guards, to enhance contract security and functionality </p>`,
      endDate: "Feb 2022"
    },
  ]
  return (
    <>
      <div className="px-16">
        <div className="text-2xl my-5 font-semibold text-start">My Work Experience 🔰</div>
        <div id="divider"></div>
        <div className="grid gap-3 md:grid-cols-2 grid-cols-1 w-100">
          {experienceArr?.map(({ img, companyName, designation, endDate, startDate, techStack, description }, index) => (
            <div data-aos="fade-up"
              data-aos-delay="0"
              data-aos-easing="ease"
              data-aos-duration="2000" key={index} className="relative border-solid border-2 border-zinc-400 rounded-md w-100 p-5 hover:bg-[grey] transition job-card">
              <div className="w-100">
                <div className="flex justify-between items-center">
                  <img className="uniLogo" src={img} alt="" />
                  <h4>{startDate} - {endDate}</h4>
                </div>
                <div className="text-lg font-semibold">{companyName}</div>
                <h3>{designation}</h3>
                <p>Tech Stack: {techStack}</p>
              </div>
              <div className="w-100 absolute job-description">
                <div key={index} dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
