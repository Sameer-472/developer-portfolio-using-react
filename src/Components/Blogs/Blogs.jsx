import React, { useContext } from "react";
import "aos/dist/aos.css";
import "./Blogs.css";
import { ThemeContext } from "../../ThemeProvider";
// import Tooltip from '@mui/material/Tooltip';


export const Blogs = () => {
  // const [state, setstate] = useState("frontend");
  const { isDarkMode } = useContext(ThemeContext)

  // const iconColor = !isDarkMode ? '#D9D9D9' : '#A7A7A7';
  const textColor = !isDarkMode ? '#D9D9D9' : 'text-[#D9D9D9]';

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
      {
        name: "What the hell is Closure in JS?",
        img: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fwreybj2ze7kimsgz13np.png",
        details: "In-depth overview of Closure in JS ",
        demo: "https://dev.to/sameer472/what-the-fk-is-closure-in-js-1j4o",
        code: "https://github.com/Sameer-472/expense-tracker-rebuild",
        tech: ["Javascript", "frontend", "react" , "webdev"]
      },
    ]
  };



  const { reactProject } = projectData;

  function CardRenders() {
    if (true) {
      return (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {reactProject.map(({ details, demo, tech, img }) => {
            return (
              <>
                <a href={demo} variant="outlined" className="max-w-lg p-6 relative hover:bottom-2 transition bg-[#ffffff52] rounded-lg shadow-md flex justify-center flex-col items-center" >
                  <img src={img} alt="article cover pic" />
                  <p
                    className={`${textColor} mt-2 ${!isDarkMode && 'opacity-60'
                      } text-base md:text-lg w-11/12 mb-4 hover:text-[white]`}
                  >
                    {details}
                  </p>
                  <div className='flex flex-wrap mt-auto mb-6'>
                    {tech.map((tech) => (
                      <span
                        key={tech}
                        className=" rounded px-2 mr-2 py-1  bg-[#ffffff52] shadow-md flex justify-center flex-col items-center font-menlo text-sm font-medium"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                </a>
              </>
            );
          })}
        </div>
      )

    }
  }

  return (
    <>
      <div className="px-16">
        <div className="text-2xl my-5 font-semibold text-start">Read Latest Articles 📖</div>
        <div id="divider"></div>
        <CardRenders />
      </div>
    </>
  );
};
