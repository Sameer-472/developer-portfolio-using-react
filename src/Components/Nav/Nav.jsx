import React  , {useEffect} from "react";
import "./Nav.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "animate.css/animate.min.css";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { animateScroll as scroll, Element } from 'react-scroll'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";



const Nav = () => {
  <Element name="Skills"></Element>
  const [state, setState] = React.useState(true);
  const [btn, setbtn] = React.useState(false);



  const togglebtn = () => {
    setState(!state);
    setbtn(!btn);
  }

  const scrollToSkill = () => {
    scroll.scrollTo(500)
  }
  const scrollToProject = () => {
    scroll.scrollTo(1600)
  }
  const scrollToContact = () => {
    scroll.scrollTo(4000)
  }
  const scrollToCarrers = () => {
    scroll.scrollTo(900)
  }
  const scrollToBlogs = () => {
    scroll.scrollTo(2300)
  }

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Router>
        <nav className={true ? "nav" : "hiddenNav"}>
          <div className="header">
            <img src="../../Images/signature.png" className="mobsignature" alt="" />
            <MenuIcon fontSize="large" id={btn ? "button" : "notbutton"} onClick={togglebtn} />
            <ClearIcon fontSize="large" id={btn ? "cross" : "notcross"} onClick={togglebtn} />
          </div>
          <ul className={`${state ? "desktopNav" : "mobileNav"} justify-end`}>
            {/* <img src="../../Images/signature.png" className="signature" alt="" /> */}

            <div className="flex flex-row space-x-8">
              <Link className="font-bold" to="/home"><li>Home</li></Link>
              <Link className="font-bold" to="/project" onClick={scrollToProject} duration={50} smooth={false} > <li>Projects</li> </Link>
              <Link className="font-bold" to="/skills" onClick={scrollToSkill} duration={50} smooth={false} > <li>Skills</li> </Link>
              <Link className="font-bold" to="/carrer" onClick={scrollToCarrers} duration={50} smooth={false} > <li>Experience</li> </Link>
              <Link className="font-bold" to="/carrer" onClick={scrollToBlogs} duration={50} smooth={false} > <li>My Blogs</li> </Link>
              <Link className="font-bold" to="/contact" onClick={scrollToContact} duration={50} smooth={false} > <li>Contact Me</li> </Link>
            </div>
            {/* <MUISwitch onChange={toggleColor} /> */}
          </ul>
        </nav>
      </Router>
    </>
  );
};

export default Nav;
