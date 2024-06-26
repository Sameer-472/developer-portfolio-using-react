import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "aos/dist/aos.css";
import "./Projects.css";
import { Tooltip } from "@mui/material";
import { ThemeContext } from "../../ThemeProvider";
// import Tooltip from '@mui/material/Tooltip';








export const Projects = () => {
  const [state, setstate] = useState("frontend");
  const { isDarkMode } = useContext(ThemeContext)

  const iconColor = !isDarkMode ? '#000000' : '#A7A7A7';
  const textColor = !isDarkMode ? 'text-black' : 'text-[#D9D9D9]';

  const projectData = {
    reactProject: [
      {
        name: "Expense Tracker App with PWA",
        details: "In this is web app you can manage and track all your expenses",
        demo: "https://lonely-bedroom.surge.sh/",
        code: "https://github.com/Sameer-472/expense-tracker-rebuild",
        tech: ["Typescript", "React", "Styled Component", "Chakra UI", "Redux"]
      },
      // {
      //   name: "Covid-19 Tracker",
      //   details: "You can track the information about covid-19 globally ",
      //   demo: "https://sudden-zebra.surge.sh/",
      //   code: "https://github.com/Sameer-472/Covid-19-tracker",
      //   tech: "Javascript"
      // },
      {
        name: "Glitch AF",
        details: "You can enjoy purchase shoes with out reloading the page",
        demo: "https://glitch-h0pfcmrlz-sameer-472.vercel.app/",
        code: "https://github.com/Sameer-472/Glitch",
        tech: ["Javascript", "React", "Material UI", "Framer Motion", "Animate on Scroll"]
      },
      {
        name: "Alice and racing queen",
        details: "made this running app with the help Web animation API in react",
        demo: "https://best-letter.surge.sh/",
        code: "https://github.com/Sameer-472/Alice-and-the-red-queen",
        tech: ["React", "CSS", "Styled Component", "", "Redux"]
      },
      {
        name: "React Quiz App",
        details: "made this Quiz app with React and Typscript",
        demo: "https://wary-airplane.surge.sh/",
        code: "https://github.com/Sameer-472/Quiz-app-",
        tech: ["Typescript", "React", "Material UI", "Redux"]
      },

    ],
    blockChainProject: [
      {
        name: "NFT Marketplace",
        details: "In this Marketplace you can create sell mint and resell NFTs",
        demo: "https://63d61ce706bfdf15e7f082ef--ditalversefyp.netlify.app/",
        code: "https://github.com/Sameer-472/DigitalVerse",
        tech: ["React", "Solidity", "Javascript", "Metamask", "Tailwind", "Solidity"]
      },
      {
        name: "Web3.0 Ethereum transfer app",
        details: "Now transfer ether to any address in low gas fees",
        demo: "https://etherblockchain.netlify.app/",
        code: "https://github.com/Sameer-472/Web-3.0-blockchain-project",
        tech: ["Javascript", "React", "Ether.js", "Openzepline", "Hardhat", "Solidity"]
      },
      // {
      //   name: "MultiSender Dapp",
      //   details: "The BNB multisender dapp project is a decentralized application built on the Binance Smart Chain (BSC) that enables users to send Binance Coin (BNB) and other BSC-based tokens to multiple addresses at once.",
      //   demo: "https://etherblockchain.netlify.app/",
      //   code: "https://github.com/Sameer-472/Web-3.0-blockchain-project",
      //   tech: ["Javascript", "React", "Ether.js", "Binance Smart Chain", "Solidity", "Solidity"]
      // },
      {
        name: "Decentralize Exchanger",
        details: "A simple clone of uniswap for swapping two tokens",
        demo: "https://profound-bombolone-bc9b48.netlify.app/",
        code: "https://github.com/Sameer-472/Decentralize-Exchanger",
        tech: ["JavaScript", "React", "Ether.js", "Node.js", "Express" , "1inch Aggregator"]
      },
    ]
  };



  const { reactProject, blockChainProject } = projectData;

  function CardRenders() {
    if (state === "frontend") {
      return (
        reactProject.map(({ name, details, demo, code, tech }) => {
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

                      <Tooltip title="View Source Code" placement="top">
                        <a href={code} target='_blank' rel='noreferrer'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            data-name='Layer 1'
                            viewBox='0 0 24 24'
                            width='28'
                            height='28'
                            id='github'
                            className='mr-2 cursor-pointer'
                            fill={iconColor}
                          >
                            <path d='M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z'></path>
                          </svg>
                        </a>
                      </Tooltip>
                      <Tooltip title="View Live Demo" placement="top">
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
                  <h2
                    className={`font-roboto text-2xl text-start font-bold ${textColor} mt-4`}
                  >
                    {name}
                  </h2>
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
                        // className={`font-menlo text-sm font-medium ${theme ==== 'light'
                        //     ? 'text-black-6 bg-custom-grey'
                        //     : 'text-white bg-custom-grey-5'
                        //   } mt-2 rounded-full px-2 mr-2`}
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

    } else if (state === "backend") {
      return (
        blockChainProject.map(({ name, details, demo, code, tech }) => {
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

                      <Tooltip title="View Source Code" placement="top">
                        <a href={code} target='_blank' rel='noreferrer'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            data-name='Layer 1'
                            viewBox='0 0 24 24'
                            width='28'
                            height='28'
                            id='github'
                            className='mr-2 cursor-pointer'
                            fill={iconColor}
                          >
                            <path d='M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z'></path>
                          </svg>
                        </a>
                      </Tooltip>
                      <Tooltip title="View Live Demo" placement="top">
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
                  <h2
                    className={`font-roboto text-2xl text-start font-bold ${textColor} mt-4`}
                  >
                    {name}
                  </h2>
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
                        // className={`font-menlo text-sm font-medium ${theme ==== 'light'
                        //     ? 'text-black-6 bg-custom-grey'
                        //     : 'text-white bg-custom-grey-5'
                        //   } mt-2 rounded-full px-2 mr-2`}
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
    } else {

      reactProject.map(({ name, details, demo, code, tech }) => {
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

                    <a href={code} target='_blank' rel='noreferrer'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        data-name='Layer 1'
                        viewBox='0 0 24 24'
                        width='28'
                        height='28'
                        id='github'
                        className='mr-2 cursor-pointer'
                        fill={iconColor}
                      >
                        <path d='M10.07031,20.50291a1.00008,1.00008,0,0,0-1.18115-.9834c-1.30908.24024-2.96191.27637-3.40137-.958a5.70754,5.70754,0,0,0-1.83691-2.415,1.20073,1.20073,0,0,1-.1665-.10938,1,1,0,0,0-.93067-.64551H2.54883a.99965.99965,0,0,0-1,.99512c-.00391.81543.811,1.33789,1.1416,1.51465a4.4408,4.4408,0,0,1,.92383,1.35937c.36426,1.02344,1.42285,2.57617,4.46582,2.376.001.03516.00195.06836.00244.09863l.00439.26758a1,1,0,0,0,2,0l-.00488-.31836C10.07715,21.4951,10.07031,21.22068,10.07031,20.50291Zm10.667-15.126c.03174-.125.063-.26367.09034-.41992a6.27792,6.27792,0,0,0-.40821-3.293,1.002,1.002,0,0,0-.61572-.58007c-.356-.12012-1.67041-.35645-4.18408,1.25a13.86918,13.86918,0,0,0-6.354,0C6.76221.751,5.45459.9658,5.10205,1.07908a.99744.99744,0,0,0-.63135.584,6.3003,6.3003,0,0,0-.40332,3.35644c.02442.12793.05078.2461.07813.35449A6.26928,6.26928,0,0,0,2.89014,9.20311a8.42168,8.42168,0,0,0,.04248.92187c.334,4.60254,3.334,5.98438,5.42431,6.459-.04345.125-.083.25878-.11816.40039a1.00023,1.00023,0,0,0,1.94238.47851,1.6784,1.6784,0,0,1,.46778-.87793.99947.99947,0,0,0-.5459-1.74512c-3.4541-.39453-4.95362-1.80175-5.1792-4.89843a6.61076,6.61076,0,0,1-.03369-.73828,4.25769,4.25769,0,0,1,.91943-2.71289,3.022,3.022,0,0,1,.1958-.23145.99988.99988,0,0,0,.188-1.02441,3.3876,3.3876,0,0,1-.15527-.55567A4.09356,4.09356,0,0,1,6.1167,3.06346a7.54263,7.54263,0,0,1,2.415,1.17968,1.00877,1.00877,0,0,0,.82764.13282,11.77716,11.77716,0,0,1,6.17285.001,1.00549,1.00549,0,0,0,.83056-.13769,7.572,7.572,0,0,1,2.40528-1.19043,4.03977,4.03977,0,0,1,.0874,1.57812,3.205,3.205,0,0,1-.16895.60743.9999.9999,0,0,0,.188,1.02441c.07715.08691.1543.18066.22363.26855A4.12186,4.12186,0,0,1,20,9.20311a7.03888,7.03888,0,0,1-.0376.77734c-.22021,3.05566-1.72558,4.46387-5.1958,4.85937a1,1,0,0,0-.54541,1.7461,1.63079,1.63079,0,0,1,.46631.9082,3.06079,3.06079,0,0,1,.09229.81934v2.334C14.77,21.2949,14.77,21.78025,14.77,22.00291a1,1,0,1,0,2,0c0-.2168,0-.69238.00977-1.33984V18.31346a4.8815,4.8815,0,0,0-.15479-1.31153,4.25638,4.25638,0,0,0-.11621-.416,6.51258,6.51258,0,0,0,5.44531-6.42383A8.69677,8.69677,0,0,0,22,9.20311,6.13062,6.13062,0,0,0,20.7373,5.37693Z'></path>
                      </svg>
                    </a>
                    <Tooltip title="View Live Demo" placement="top">
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
                <h2
                  className={`font-roboto text-2xl text-start font-bold ${textColor} mt-4`}
                >
                  {name}
                </h2>
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
                      // className={`font-menlo text-sm font-medium ${theme ==== 'light'
                      //     ? 'text-black-6 bg-custom-grey'
                      //     : 'text-white bg-custom-grey-5'
                      //   } mt-2 rounded-full px-2 mr-2`}
                      className=" rounded px-2 mt-5 mb-5 mr-2 py-1  bg-[#ffffff52] shadow-md flex justify-center flex-col items-center font-menlo text-sm font-medium"
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

    }
  }

  return (
    <>
      <div className="">
        <div className="text-2xl my-5 font-semibold text-start">Open Source Projects 🚀</div>

        <Box sx={{}}>
          <div id="technologies" >
            <div className="flex flex-row justify-center space-x-4 my-5">
              <Tooltip title="Click to viw React projects" placement="top">
                <div className={` ${isDarkMode ? "text-white" : "text-black"} font-semibold  option ${state === 'frontend' ? "active" : "in-active"} text-sm`} onClick={() => setstate("frontend")}>
                  React
                </div>
              </Tooltip>
              <Tooltip title="Click to view Blockchain or web3 projects" placement="top">
                <div className={`${isDarkMode ? "text-white" : "text-black"} font-semibold option ${state === 'backend' ? "active" : "in-active"} text-sm`} onClick={() => setstate("backend")}>
                  Blockchain
                </div>
              </Tooltip>
              {/* <div className={`${isDarkMode ? "text-white" : "text-black"} font-semibold option ${state == 'blockchain' && "active"} text-lg`} onClick={() => setstate("blockchain")}>
                MERN Stack
              </div> */}
            </div>
          </div>
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
