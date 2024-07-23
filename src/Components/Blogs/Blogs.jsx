import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "aos/dist/aos.css";
import "./Blogs.css";
import {Tooltip } from "@mui/material";
import { ThemeContext } from "../../ThemeProvider";
// import Tooltip from '@mui/material/Tooltip';


export const Blogs = () => {
  // const [state, setstate] = useState("frontend");
  const { isDarkMode } = useContext(ThemeContext)

  const iconColor = !isDarkMode ? '#000000' : '#A7A7A7';
  const textColor = !isDarkMode ? 'text-black' : 'text-[#D9D9D9]';

  const projectData = {
    reactProject: [
      {
        name: "Expense Tracker App with PWA",
        img: "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fiuixn0s0spkymwse1y6r.png",
        details: "In this article you will learn how you can upload files on IPFS using react",
        demo: "https://dev.to/sameer472/how-to-upload-files-on-ipfs-infuraio-using-react-56g",
        code: "https://github.com/Sameer-472/expense-tracker-rebuild",
        tech: ["Javascript", "React", "IPFS", "Infura.io", "web3"]
      },
      {
        name: "Expense Tracker App with PWA",
        img: "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fpk9yj1x2hii78j4c8vfh.jpg",
        details: "Quick overview of layer 2 solutions in blockchain",
        demo: "https://dev.to/sameer472/quick-guide-about-layer-2-scaling-solutions-5d9p",
        code: "https://github.com/Sameer-472/expense-tracker-rebuild",
        tech: ["Blockchain", "Research", "web3"]
      },
    ]
  };



  const { reactProject } = projectData;

  function CardRenders() {
    if (true) {
      return (
        reactProject.map(({  details, demo,  tech, img }) => {
          return (
            <>
              <Grid
                item
                xs={10}
                md={5}
                data-aos="fade-up"
                data-aos-delay="0"
                data-aos-easing="ease"
                data-aos-duration="500"
              // style={{backgroundColor: "green"}}
              >
                <div variant="outlined" className="max-w-lg p-6  bg-[#ffffff52] rounded-lg shadow-md flex justify-center flex-col items-center" >
                  <div className='flex justify-end items-center w-[100%]'>
                    <div className='flex space-x-3'>


                      <Tooltip title="Read Blog" placement="top">
                        <a href={demo} target='_blank' rel='noreferrer'>
                          <span
                            className={`material-symbols-outlined ${!isDarkMode ? 'text-black' : 'text-[#A7A7A7]'
                              } w-7 h-7 font-medium cursor-pointer`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill={iconColor} x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48"> <path d="M 35.484375 5.984375 A 1.50015 1.50015 0 0 0 34.439453 8.5605469 L 36.878906 11 L 35.5 11 C 23.64339 11 14 20.64339 14 32.5 A 1.50015 1.50015 0 1 0 17 32.5 C 17 22.26461 25.26461 14 35.5 14 L 36.878906 14 L 34.439453 16.439453 A 1.50015 1.50015 0 1 0 36.560547 18.560547 L 41.431641 13.689453 A 1.50015 1.50015 0 0 0 41.423828 11.302734 L 36.560547 6.4394531 A 1.50015 1.50015 0 0 0 35.484375 5.984375 z M 12.5 6 C 8.9280619 6 6 8.9280619 6 12.5 L 6 35.5 C 6 39.071938 8.9280619 42 12.5 42 L 35.5 42 C 39.071938 42 42 39.071938 42 35.5 L 42 27.5 A 1.50015 1.50015 0 1 0 39 27.5 L 39 35.5 C 39 37.450062 37.450062 39 35.5 39 L 12.5 39 C 10.549938 39 9 37.450062 9 35.5 L 9 12.5 C 9 10.549938 10.549938 9 12.5 9 L 20.5 9 A 1.50015 1.50015 0 1 0 20.5 6 L 12.5 6 z"></path> </svg>
                          </span>
                        </a>
                      </Tooltip>
                    </div>
                  </div>
                  <img src={img} alt="article cover pic"/>
                  <p
                    className={`${textColor} mt-2 ${!isDarkMode && 'opacity-60'
                      } text-base md:text-lg w-11/12 mb-4`}
                  >
                    {details}
                  </p>
                  <div className='flex flex-wrap mt-auto mb-6'>
                    {tech.map((tech) => (
                      <span
                        key={tech}
                        className=" rounded px-2 mr-2 py-1  bg-[#ffffff52] shadow-md flex justify-center flex-col items-center font-menlo text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Grid>
            </>
          );
        })
      )

    } 
  }

  return (
    <>
      <div className="px-16">
        <div className="text-2xl my-5 font-semibold text-start">Articles i wrote✍</div>

        <Box sx={{}}>
          {/* <div id="technologies" >
            <div className="flex flex-row justify-center space-x-4 my-5">
              <Tooltip title="Click to viw React projects" placement="top">
                <div className={` ${isDarkMode ? "text-white" : "text-black"} font-semibold  option ${state == 'frontend' ? "active" : "in-active"} text-sm`} onClick={() => setstate("frontend")}>
                  React
                </div>
              </Tooltip>
              <Tooltip title="Click to view Blockchain or web3 projects" placement="top">
                <div className={`${isDarkMode ? "text-white" : "text-black"} font-semibold option ${state == 'backend' ? "active" : "in-active"} text-sm`} onClick={() => setstate("backend")}>
                  Blockchain
                </div>
              </Tooltip>
            </div>
          </div> */}
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            item
          >
            <CardRenders />
          </Grid>
        </Box>
      </div>
    </>
  );
};
