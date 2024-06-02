import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Aos from "aos";
import "aos/dist/aos.css";
import './Skills.css'
import { ThemeContext } from "../../ThemeProvider";

const Skills = () => {
  const [state, setstate] = useState("frontend");

  const frontEnd = [
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/react-js.svg",
      name: "React",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/next-js.svg",
      name: "Next.js",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/gatsby.svg",
      name: "Gatsby.js",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/redux.svg",
      name: "Redux",
    },
    {
      image: "https://www.halo-lab.com/images/services/services-icons/mobx.svg",
      name: "MobX",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/webpack.svg",
      name: "Webpack",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/graph-ql.svg",
      name: "GraphQL",
    },
  ];

  const backEnd = [
    {
      image:
        "	https://www.halo-lab.com/images/common/technologies/interpretators/node.svg",
      name: "Node.js",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/mongodb.svg",
      name: "MongoDB",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/express.svg",
      name: "Express",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/fastify.svg",
      name: "Fastify",
    },
    {
      image: "https://www.halo-lab.com/images/services/services-icons/aws.svg",
      name: "AWS",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/nest-js.svg",
      name: "Nest.js",
    },
    {
      image:
        "	https://www.halo-lab.com/images/services/services-icons/rabbit-mq.svg",
      name: "RabbitMQ",
    },
    {
      image:
        "https://www.halo-lab.com/images/services/services-icons/postgresql.svg",
      name: "PostgreSQL",
    },
  ];

  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext)

  function CardRenders() {
    if (state == "frontend") {
      return (
        <>
          {frontEnd.map((item) => {
            return (
              <>
                <div id="" className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  dark:border-gray-700">
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
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500"
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
    } else if (state == "backend") {
      return (
        <>
          {backEnd.map((item) => {
            return (
              <>
                <div id="" className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500"
                  >
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
          {/* {CMS.map((item) => {
            return (
              <>
                <div id="tCard">
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
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-easing="ease-in-out-quart"
                    data-aos-duration="500"
                  >
                    {item.name}
                  </div>
                </div>
              </>
            );
          })} */}
        </>
      );
    }
  }

  return (
    <>
      <div className="skills">
        <Box
          sx={{ flexGrow: 1 }}
          className="flex justify-center intro"
        // className="intro"
        >
          <div id="technologies" style={{ marginTop: 50 }}>
            <div className="flex flex-row justify-center space-x-4 my-5">
              <div className={`${isDarkMode ? "text-white": "text-black"} font-semibold option ${state == 'frontend' && "active"}`} onClick={() => setstate("frontend")}>
                Frontend
              </div>
              <div className={`${isDarkMode ? "text-white": "text-black"} font-semibold option ${state == 'backend' && "active"}`} onClick={() => setstate("backend")}>
                Backend
              </div>
              <div className={`${isDarkMode ? "text-white": "text-black"} font-semibold option ${state == 'blockchain' && "active"}`} onClick={() => setstate("blockchain")}>
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
