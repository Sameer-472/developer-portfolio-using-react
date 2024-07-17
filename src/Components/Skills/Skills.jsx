import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import "aos/dist/aos.css";
import './Skills.css'
import { ThemeContext } from "../../ThemeProvider";
import nextJs from "../../Assets/next.png"

const Skills = () => {
  const [state, setstate] = useState("frontend");

  const frontEnd = [
    {
      image:
        "https://img.icons8.com/officel/50/000000/react.png",
      name: "React",
    },
    {
      image:
        "	https://img.icons8.com/color/50/000000/javascript--v1.png",
      name: "Javascript",
    },
    {
      image:
        "https://img.icons8.com/color/50/000000/css3.png",
      name: "CSS",
    },
    {
      image:
        "	https://img.icons8.com/color/50/000000/html-5.png",
      name: "HTML5",
    },
    {
      image:
        "https://img.icons8.com/color/48/000000/npm.png",
      name: "NPM",
    },
    {
      image:
        "https://img.icons8.com/color/50/000000/material-ui.png",
      name: "Material UI",
    },
    {
      image: nextJs,
      name: "Next.js",
    },
    {
      image:
        "https://img.icons8.com/color/48/null/redux.png",
      name: "Redux",
    },
  ];

  const backEnd = [
    {
      image:
        "https://img.icons8.com/color/48/null/nodejs.png",
      name: "Node.js",
    },
    {
      image:
        "https://img.icons8.com/color/48/mongo-db.png",
      name: "MongoDB",
    },
    {
      image:
        "https://img.icons8.com/ios/50/null/express-js.png",
      name: "Express",
    },
    // {
    //   image: "https://www.halo-lab.com/images/services/services-icons/aws.svg",
    //   name: "AWS",
    // },
  ];

  const blockChain = [
    {
      image:
        "https://img.icons8.com/color/48/null/solidity.png",
      name: "Solidity",
    },
    {
      image:
        "https://63fc7c9577441906b1298d03--skywalkersameer.netlify.app/Images/hardhat.svg",
      name: "Hardhat",
    },
    {
      image:
        "https://docs.ethers.org/v5/static/logo.svg",
      name: "Ether.js",
    },
    // {
    //   image: "https://www.halo-lab.com/images/services/services-icons/aws.svg",
    //   name: "AWS",
    // },
  ];

  const { isDarkMode } = useContext(ThemeContext)

  function CardRenders() {
    if (state === "frontend") {
      return (
        <>
          {frontEnd.map((item) => {
            return (
              <>
                <div className={`max-w-lg p-6 w-[180px] bg-[#ffffff52] rounded-lg shadow-md flex justify-center flex-col items-center`}
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-easing="ease-in-out-quart"
                  data-aos-duration="500"
                >
                  <img
                    src={item.image}
                    width={60}
                    alt=""
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500"
                  />
                  <div

                    className="font-semibold"
                  >
                    {item.name}
                  </div>
                </div>
              </>
            );
          })}
          ;
        </>
      );
    } else if (state === "backend") {
      return (
        <>
          {backEnd.map((item) => {
            return (
              <>
                <div id="" className="max-w-lg p-6 w-[180px] bg-[#ffffff52] rounded-lg shadow flex justify-center flex-col items-center"
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-easing="ease-in-out-quart"
                  data-aos-duration="500">
                  <img
                    src={item.image}
                    width={60}
                    alt=""
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500"
                  />
                  <div>
                    {item.name}
                  </div>
                </div>
              </>
            );
          })}
        </>
      );
    } else {
      return (
        <>
          {blockChain.map((item) => {
            return (
              <>
                <div className="max-w-lg p-6 w-[180px] bg-[#ffffff52] rounded-lg shadow-md flex justify-center flex-col items-center"
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-easing="ease-in-out-quart"
                  data-aos-duration="500">
                  <img
                    src={item.image}
                    width={60}
                    alt=""
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500"
                  />
                  <div>
                    {item.name}
                  </div>
                </div>
              </>
            );
          })}
        </>
      );
    }
  }

  return (
    <>
      <div className="skills">
        <div className="text-2xl my-5 font-semibold text-center">Tools and Technologies I know 💻</div>
        <Box
          sx={{ flexGrow: 1 }}
          className="flex justify-center intro"
        // className="intro"
        >
          <div id="technologies" >
            <div className="flex flex-row justify-center space-x-4 my-5">
              <div className={`${isDarkMode ? "text-white" : "text-black"} font-semibold option ${state === 'frontend' ? "active" : "in-active"} text-sm`} onClick={() => setstate("frontend")}>
                Frontend
              </div>
              <div className={`${isDarkMode ? "text-white" : "text-black"} font-semibold option ${state === 'backend' ? "active" : "in-active"} text-sm`} onClick={() => setstate("backend")}>
                Backend
              </div>
              <div className={`${isDarkMode ? "text-white" : "text-black"} font-semibold option ${state === 'blockchain' ? "active" : "in-active"} text-sm`} onClick={() => setstate("blockchain")}>
                Blockchain
              </div>
            </div>
            <div id="technolgiesCards">
              <CardRenders />
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default Skills;
